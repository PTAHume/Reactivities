import { Button, Icon, Item, Label, Segment } from "semantic-ui-react"
import { Activity } from "../../../app/modules/activity"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { ActivityListItemAttendee } from "./ActivityListItemAttendee"
import { lazily } from 'react-lazily';
import { observer } from "mobx-react-lite"
import 'react-tooltip/dist/react-tooltip.css'
import "./ActivityListItem.css"

const { Tooltip } = lazily(() => import("react-tooltip"))
export const ActivityListItem = observer( ({ activity }: { activity: Activity }) => {
    return (
        <Segment.Group>
            <Segment>
                {activity.isCanceled && (
                    <Label attached="top" color="red" content="Cancelled" style={{ textAlign: 'center' }} />
                )}
                <Item.Group>
                    <Item>
                        <Item.Image as={Link} to={`/profiles/${activity.hostUserName}`} style={{ marginBottom: 3 }} size="tiny" circular
                            src={activity.host?.image ?? "/assets/user.png"} />
                        {activity.host?.following && (
                            <>
                                <Icon name="info" data-tooltip-id="following" data-tooltip-content="You are following this person" className="micro" circular />
                                <Tooltip id="following" place='left' />
                            </>
                        )}
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted By <Link to={`/profiles/${activity.hostUserName}`}>{activity.host?.displayName}</Link></Item.Description>
                            {activity.isHost && (
                                <Item.Description>
                                    <Label basic color="orange">You are hosting this activity</Label>
                                </Item.Description>
                            )}
                            {activity.isGoing && !activity.isHost && (
                                <Item.Description>
                                    <Label basic color="green">You are going to this activity</Label>
                                </Item.Description>
                            )}
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" />{format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name="marker" />{activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendee attendees={activity.attendees} />
            </Segment>
            <Segment clearing>
                <span>
                    {activity.description}
                </span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color="teal"
                    floated="right"
                    content="View" />
            </Segment>
        </Segment.Group>
    )
})