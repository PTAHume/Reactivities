import { observer } from "mobx-react-lite"
import { Image, List, Popup } from "semantic-ui-react"
import { Profile } from "../../../app/modules/profile"
import { Link } from "react-router-dom"
import { ProfileCard } from "../../profiles/ProfileCard"

export const ActivityListItemAttendee = observer(({ attendees }: { attendees: Profile[] }) => {
    return (
        <List horizontal>
            {attendees.map(attendee => (
                <Popup
                    hoverable
                    key={attendee.userName}
                    trigger={
                        <List.Item key={attendee.userName} as={Link} to={`/profiles/${attendee.userName}`}>
                            <Image size="mini" circular src={attendee.image ?? '/assets/user.png'} />
                        </List.Item>
                    }
                    >
                    <Popup.Content>
                        <ProfileCard profile={attendee} />
                    </Popup.Content>
                </Popup>
            ))}
        </List>
    )
})