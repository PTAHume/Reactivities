import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/modules/Activity';
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../details/ActivitiesDetails';
import { ActivityForm } from '../form/ActivityForm';

export const ActivityDashboard = (
    { activities,
        selectedActivity,
        selectActivity,
        cancelSelectedActivity,
        editMode,
        openForm,
        closeForm,
        createOrEdit,
        deleteActivity
    }:
        {
            activities: Activity[],
            selectedActivity: Activity | undefined,
            selectActivity: (id: string) => void, // can also be just Function
            cancelSelectedActivity: () => void,
            editMode: boolean,
            openForm: Function,
            closeForm: () => void,
            createOrEdit: Function,
            deleteActivity:Function
        }
) => {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectedActivity={cancelSelectedActivity}
                        openForm={openForm}
                    />}
                {editMode &&
                    <ActivityForm
                        activity={selectedActivity}
                        closeForm={closeForm}
                        createOrEdit={createOrEdit}
                    />}
            </Grid.Column>
        </Grid>
    );
}
