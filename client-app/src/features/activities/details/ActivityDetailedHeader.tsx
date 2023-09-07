import { observer } from 'mobx-react-lite';
import { Button, Header, Item, Segment, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/modules/activity';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const activityImageStyle = {
    filter: 'brightness(30%)'
};

const activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const ActivityManagement = observer(({ activity }: { activity: Activity }) => {
    if (activity.isHost) {
        return (
            <Button as={Link} to={`/manage/${activity.id}`} color='orange' floated='right'>
                Manage Event
            </Button>
        )
    } else if (activity.isGoing) {
        return (<Button>Cancel attendance</Button>)
    } else {
        return (<Button color='teal'>Join Activity</Button>)
    }
})
export const ActivityDetailedHeader = observer(({ activity }: { activity: Activity }) => {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{ padding: '0' }}>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`} fluid style={activityImageStyle} />
                <Segment style={activityImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={activity.title}
                                    style={{ color: 'white' }}
                                />
                                <p>{format(activity.date!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong><Link to={`/profiles/${activity.host?.userName}`}>{activity.host?.displayName}</Link></strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <ActivityManagement activity={activity} />
            </Segment>
        </Segment.Group>
    )
});
