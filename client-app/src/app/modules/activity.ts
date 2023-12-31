import { Profile } from "./profile";

export interface ActivityType {
  id: string;
  title: string;
  date: Date | null;
  description: string;
  category: string;
  city: string;
  venue: string;
  hostUserName: string;
  isCanceled: boolean;
  isGoing: boolean;
  isHost: boolean;
  host?: Profile;
  attendees: Profile[];
}

export class Activity implements ActivityType {
  constructor(init: ActivityFormValues) {
    this.id = init.id!;
    this.title = init.title;
    this.category = init.category;
    this.description = init.description;
    this.date = init.date;
    this.venue = init.venue;
    this.city = init.city;
  }
  id = "";
  title = "";
  date: Date | null = null;
  description = "";
  category = "";
  city = "";
  venue = "";
  hostUserName = "";
  isCanceled = false;
  isGoing = false;
  isHost = false;
  host?: Profile;
  attendees: Profile[] = [];
}

export class ActivityFormValues {
  id?: string = undefined;
  title = "";
  category = "";
  description = "";
  date: Date | null = null;
  city = "";
  venue = "";

  constructor(activity?: ActivityFormValues) {
    if (activity) {
      this.id = activity.id;
      this.title = activity.title;
      this.category = activity.category;
      this.description = activity.description;
      this.date = activity.date;
      this.venue = activity.venue;
      this.city = activity.city;
    }
  }
}
