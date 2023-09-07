import { Segment, List, Label, Item, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Activity } from '../../../app/modules/activity'

export const ActivityDetailedSidebar = observer(({ activity: { attendees, host } }: { activity: Activity }) => {
    if (!attendees) return null
    return (
        <>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                {attendees.length} {attendees.length === 1 ? 'Person' : 'People'} going
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    {attendees.slice().sort((a, b) => {
                        if (a.userName === host?.userName) {
                            return -1;
                        } else if (b.userName === host?.userName) {
                            return 1
                        } else {
                            return a.userName.localeCompare(b.userName)
                        }
                    }).map(attendee => (
                        <Item style={{ position: 'relative' }} key={attendee.userName}>
                            {attendee.userName === host?.userName && (
                                <Label
                                    style={{ position: 'absolute' }}
                                    color='orange'
                                    ribbon='right'
                                >
                                    Host
                                </Label>
                            )}
                            <Image size='tiny' src={attendee.image || '/assets/user.png'} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='h3'>
                                    <Link to={`/profile/${attendee.userName}`}>{attendee.displayName}</Link>
                                </Item.Header>
                                <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
                </List>
            </Segment>
        </>

    )
})
