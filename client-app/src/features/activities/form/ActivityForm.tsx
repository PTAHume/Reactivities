import { Button, Form, Segment } from "semantic-ui-react"
import { ChangeEvent, useState } from "react"
import { useStore } from "../../../app/api/stores/store"
import { observer } from "mobx-react-lite"

export const ActivityForm = observer(() => {
    const { activityStore } = useStore();
    const { selectedActivity, FormClose, loading, createActivity, updateActivity } = activityStore;

    const initialState = selectedActivity ?? {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
    }
    const [activity, setActivity] = useState(initialState);
    const handleSubmit = () => {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input
                    value={activity.title}
                    name='title'
                    onChange={handleInputChange}
                    placeholder="Title" />
                <Form.TextArea
                    value={activity.description}
                    name='description'
                    onChange={handleInputChange}
                    placeholder="Description" />
                <Form.Input
                    value={activity.category}
                    name='category'
                    onChange={handleInputChange}
                    placeholder="Category" />
                <Form.Input
                    value={activity.date}
                    name='date'
                    onChange={handleInputChange}
                    type="date"
                    placeholder="Date" />
                <Form.Input
                    value={activity.city}
                    name='city'
                    onChange={handleInputChange}
                    placeholder="City" />
                <Form.Input
                    value={activity.venue}
                    name='venue'
                    onChange={handleInputChange}
                    placeholder="Venue" />
                <Button loading={loading}
                    floated="right" positive type="submit" content="Submit" />
                <Button onClick={FormClose}
                    floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
})