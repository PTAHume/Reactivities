import { observer } from "mobx-react-lite"
import { Image, List } from "semantic-ui-react"
import { Profile } from "../../../app/modules/profile"
import { Link } from "react-router-dom"

export const ActivityListItemAttendee = observer(({ attendees }: { attendees: Profile[] }) => {
    return (
        <List horizontal>
            {attendees.map(attendee => (
                <List.Item key={attendee.userName} as={Link} to={`/profiles/${attendee.userName}`}>
                    <Image size="mini" circular src={attendee.image ?? '/assets/user.png'} />
                </List.Item>
            ))}
        </List>
    )
})