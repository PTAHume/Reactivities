import { observer } from "mobx-react-lite"
import { Profile } from "../../app/modules/profile"
import { Card, Icon, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"

export const ProfileCard = observer(({ profile }: { profile: Profile }) => {
    function truncate(str: string | undefined) {
        if (str) {
            return str.length > 40 ? str.substring(0, 37) + '...' : str;
        }
    }
    return (
        <Card as={Link} to={`/profiles/${profile.userName}`}>
            <Image src={profile.image ?? '/assets/user.png'} />
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>{truncate(profile.bio)}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                20 followers
            </Card.Content>
        </Card>
    )
})