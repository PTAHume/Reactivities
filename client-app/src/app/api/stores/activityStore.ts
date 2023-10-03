import { makeAutoObservable, reaction, runInAction } from "mobx";
import { Activity, ActivityFormValues } from "../../modules/activity";
import { agent } from "../agent";
import { format } from "date-fns";
import { store } from "./store";
import { Profile } from "../../modules/profile";
import { Pagination, PagingParams } from "../../modules/pagination";

export default class ActivityStore {
  activityRegistry = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;
  pagination: Pagination | null = null;
  pagingParams = new PagingParams();
  predicate = new Map().set('all', true);

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.predicate.keys(),
      () => {
        this.pagingParams = new PagingParams
        this.activityRegistry.clear();
        this.loadActivities();
      }
    )
  }

  setPagingParams = (pagingParams: PagingParams) => {
    this.pagingParams = pagingParams;
  }

  get axiosParams() {
    const prams = new URLSearchParams();
    prams.append("pageNumber", this.pagingParams.pageNumber.toString());
    prams.append("pageSize", this.pagingParams.pageSize.toString());
    this.predicate.forEach((value, key) => {
      if (key === 'startDate') {
        prams.append(key, (value as Date).toISOString());
      } else {
        prams.append(key, value);
      }
     })
    return prams;
  }

  setPredicate = (predicate: string, value: string | Date) => {
    const resetPredicate = () => {
      this.predicate.forEach((_, key) => { 
        if(key !== 'startDate') this.predicate.delete(key)
      })
    }

    switch (predicate) {
      case 'all':
        resetPredicate();
        this.predicate.set('all', true);
        break;
      case 'isGoing':
        resetPredicate();
        this.predicate.set('isGoing', true);
        break;
      case 'isHost':
        resetPredicate();
        this.predicate.set('isHost', true);
        break;
      case 'startDate':
        this.predicate.delete('startDate');
        this.predicate.set('startDate', value);
        break;
     }
   }


  get activitiesByDate() {
    return Array.from(this.activityRegistry.values()).sort((a, b) =>
      a.date && b.date ? a.date.getTime() - b.date.getTime() : -1,
    );
  }

  get groupedActivities() {
    return Object.entries(
      this.activitiesByDate.reduce<Record<string, Activity[]>>(
        (activities, activity) => {
          const date = format(activity.date!, "dd MMM yyyy");
          activities[date] = activities[date]
            ? [...activities[date], activity]
            : [activity];
          return activities;
        },
        {},
      ),
    );
  }

  loadActivities = async () => {
    this.setLoadingInitial(true);
    try {
      const result = await agent.Activities.list(this.axiosParams);
      result.data.forEach((activity) => {
        this.setActivity(activity);
      });
      this.setPagination(result.pagination);
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  setPagination = (pagination: Pagination) => {
    this.pagination = pagination;
  };

  loadActivity = async (id: string) => {
    if (this.activityRegistry.has(id)) {
      this.selectedActivity = this.activityRegistry.get(id);
      return this.selectedActivity;
    } else {
      this.setLoadingInitial(true);
      try {
        const activity = await agent.Activities.details(id);
        this.setActivity(activity);
        runInAction(() => (this.selectedActivity = activity));
        this.setLoadingInitial(false);
        return this.selectedActivity;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createActivity = async (activity: ActivityFormValues) => {
    const user = store.userStore.user;
    const attendee = new Profile(user!);
    try {
      await agent.Activities.create(activity);
      const newActivity = new Activity(activity);
      newActivity.hostUserName = user!.userName;
      newActivity.attendees = [attendee];
      this.setActivity(newActivity);
      runInAction(() => {
        this.selectedActivity = newActivity;
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateAttendeeFollowing = (username: string) => {
    this.activityRegistry.forEach((activity) => {
      activity.attendees.forEach((attendee: Profile) => {
        if (attendee.userName === username) {
          attendee.following
            ? attendee.followersCount--
            : attendee.followersCount++;
          attendee.following = !attendee.following;
        }
      });
    });
  };

  updateAttendeeProfile = (profile: Profile) => {
    this.activityRegistry.forEach((activity: Activity) => {
      activity.attendees?.forEach((attendee: Profile) => {
        if (attendee.userName === profile.userName) {
          attendee.bio = profile.bio;
          attendee.displayName = profile.displayName;
          attendee.image = profile.photos?.find((p) => p.isMain)?.url;
        }
        if (activity.host?.userName === profile.userName) {
          activity.host = { ...activity.host, ...profile };
        }
      });
    });
  };

  updateActivity = async (activity: ActivityFormValues) => {
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        if (activity.id) {
          const updatedActivity = {
            ...this.getActivity(activity.id),
            ...activity,
          };
          this.activityRegistry.set(activity.id, updatedActivity as Activity);
          this.selectedActivity = updatedActivity as Activity;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteActivity = async (id: string) => {
    this.loading = true;
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activityRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => (this.loading = false));
    }
  };

  updateAttendance = async () => {
    const user = store.userStore.user;
    this.loading = true;
    try {
      await agent.Activities.attend(this.selectedActivity!.id);
      runInAction(() => {
        if (this.selectedActivity?.isGoing) {
          this.selectedActivity.attendees =
            this.selectedActivity.attendees.filter(
              (a) => a.userName !== user?.userName,
            );
          this.selectedActivity.isGoing = false;
        } else {
          const attendee = new Profile(user!);
          this.selectedActivity?.attendees.push(attendee);
          this.selectedActivity!.isGoing = true;
        }
        this.activityRegistry.set(
          this.selectedActivity!.id,
          this.selectedActivity!,
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => (this.loading = false));
    }
  };

  cancelActivityToggle = async () => {
    this.loading = true;
    try {
      await agent.Activities.attend(this.selectedActivity!.id);
      runInAction(() => {
        this.selectedActivity!.isCanceled = !this.selectedActivity!.isCanceled;
        this.activityRegistry.set(
          this.selectedActivity!.id,
          this.selectedActivity!,
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => (this.loading = false));
    }
  };

  clearSelectedActivity = () => {
    this.selectedActivity = undefined;
  };

  private getActivity = (id: string) => {
    return this.activityRegistry.get(id);
  };

  private setActivity(activity: Activity) {
    const user = store.userStore.user;
    if (user) {
      activity.isGoing = activity.attendees.some(
        (a) => a.userName === user.userName,
      );
      activity.isHost = activity.hostUserName === user.userName;
      activity.host = activity.attendees.find(
        (x) => x.userName === activity.hostUserName,
      );
    }
    activity.date = new Date(activity.date!);
    this.activityRegistry.set(activity.id, activity);
  }
}
