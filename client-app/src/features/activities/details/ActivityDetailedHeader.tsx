import { observer } from "mobx-react-lite";
import { Button, Header, Item, Segment, Image, Label } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/api/stores/store";

const activityImageStyle = {
  filter: "brightness(30%)",
};

const activityImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

export const ActivityDetailedHeader = observer(
  ({ activity }: { activity: Activity }) => {
    const {
      activityStore: { updateAttendance, loading, cancelActivityToggle },
    } = useStore();
    const ActivityParticipation = () => {
      if (activity.isHost) {
        return (
          <>
            <Button
              color={activity.isCanceled ? "green" : "red"}
              floated="left"
              basic
              content={
                activity.isCanceled ? "Re-activate Activity" : "Cancel Activity"
              }
              onClick={cancelActivityToggle}
              loading={loading}
            />
            <Button
              disabled={activity.isCanceled}
              loading={loading}
              as={Link}
              to={`/manage/${activity.id}`}
              color="orange"
              floated="right"
            >
              Manage Event
            </Button>
          </>
        );
      } else if (activity.isGoing) {
        return (
          <Button loading={loading} onClick={updateAttendance}>
            Cancel attendance
          </Button>
        );
      } else {
        return (
          <Button
            disabled={activity.isCanceled}
            loading={loading}
            onClick={updateAttendance}
            color="teal"
          >
            Join attendance
          </Button>
        );
      }
    };
    return (
      <Segment.Group>
        <Segment basic attached="top" style={{ padding: "0" }}>
          {activity.isCanceled && (
            <Label
              style={{ position: "absolute", zIndex: 1000, left: -14, top: 20 }}
              ribbon
              color="red"
              content="Cancelled"
            />
          )}
          <Image
            src={`/assets/categoryImages/${activity.category}.jpg`}
            fluid
            style={activityImageStyle}
          />
          <Segment style={activityImageTextStyle} basic>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Header
                    size="huge"
                    content={activity.title}
                    style={{ color: "white" }}
                  />
                  <p>{format(activity.date!, "dd MMM yyyy")}</p>
                  <p>
                    Hosted by{" "}
                    <strong>
                      <Link to={`/profiles/${activity.host?.userName}`}>
                        {activity.host?.displayName}
                      </Link>
                    </strong>
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>
        <Segment clearing attached="bottom">
          <ActivityParticipation />
        </Segment>
      </Segment.Group>
    );
  },
);
