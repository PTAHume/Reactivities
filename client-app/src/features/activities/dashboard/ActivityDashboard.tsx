import { Grid } from 'semantic-ui-react';
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../details/ActivitiesDetails';
import { ActivityForm } from '../form/ActivityForm';
import { useStore } from '../../../app/api/stores/store';
import { observer } from 'mobx-react-lite';

export const ActivityDashboard = observer(() => {
    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails />
                }
                {editMode &&
                    <ActivityForm />}
            </Grid.Column>
        </Grid> 
    );
})
