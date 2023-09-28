import { Header } from "semantic-ui-react";
import { useStore } from "../../../app/api/stores/store";
import { observer } from "mobx-react-lite";
import { ActivityListItem } from "./ActivityListItem";
import { Fragment } from "react";

export const ActivityList = observer(() => {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activity]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          {activity.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </Fragment>
      ))}
    </>
  );
});
