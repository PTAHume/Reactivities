import { Grid } from 'semantic-ui-react';
import { ActivityList } from './ActivityList';
import { useStore } from '../../../app/api/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';

export const ActivityDashboard = observer(() => {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry, loadingInitial } = activityStore

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities()
    }, [loadActivities, activityRegistry]);

    if (loadingInitial) return <LoadingComponent content='Loading app...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    );
})
