import { observer } from "mobx-react-lite";
import { SyntheticEvent, useEffect } from "react";
import { Card, Grid, Header, Image, Tab, TabProps } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useStore } from "../../app/api/stores/store";
import { UserActivity } from "../../app/modules/userActivity";

export const ProfileActivities = observer(() => {
  const { profileStore } = useStore();
  const { loadUserActivities, profile, loadingActivities, userActivities } =
    profileStore;
  const panes = [
    { menuItem: "Future Events", pane: { key: "future" } },
    { menuItem: "Past Events", pane: { key: "past" } },
    { menuItem: "Hosting", pane: { key: "hosting" } },
  ];
  const handleTabChange = (_e: SyntheticEvent, data: TabProps) => {
    loadUserActivities(
      profile!.userName,
      panes[data.activeIndex as number].pane.key,
    );
  };

  useEffect(() => {
    loadUserActivities(profile!.userName);
  }, [loadUserActivities, profile]);

  return (
    <Tab.Pane loading={loadingActivities}>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="calendar"
            content={"Activities"}
          ></Header>
        </Grid.Column>
        <Grid.Column width={16}>
          <Tab
            panes={panes}
            menu={{ secondary: true, pointing: true }}
            onTabChange={(e, data) => {
              handleTabChange(e, data);
            }}
          />
          <br />
          <Card.Group itemsPerRow={4}>
            {userActivities.map((activity: UserActivity) => (
              <Card
                as={Link}
                to={`/activities/${activity.id}`}
                key={activity.id}
              >
                <Image
                  src={`/assets/categoryImages/${activity.category}.jpg`}
                  style={{ minHeight: 100, objectFit: "cover" }}
                />
                <Card.Content>
                  <Card.Header textAlign="center">{activity.title}</Card.Header>
                  <Card.Meta textAlign="center">
                    <div>{format(new Date(activity.date), "do LLL")}</div>
                    <div>{format(new Date(activity.date), "h:mm a")}</div>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
});
