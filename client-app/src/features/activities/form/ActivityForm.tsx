import { Button, Form, Segment } from "semantic-ui-react"
import { Activity } from "../../../app/modules/Activity"
import { ChangeEvent, useState } from "react"

export const ActivityForm = (
    {
        closeForm,
        activity: selectedActivity,
        createOrEdit
    }:
        {
            closeForm: () => void,
            activity: Activity | undefined,
            createOrEdit: Function,
        }
) => {
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
        createOrEdit(activity)
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input
                    value={activity.title} name='title' onChange={handleInputChange} placeholder="Title" />
                <Form.TextArea
                    value={activity.description} name='description' onChange={handleInputChange}
                    placeholder="Description" />
                <Form.Input
                    value={activity.category} name='category' onChange={handleInputChange} placeholder="Category" />
                <Form.Input
                    value={activity.date} name='date' onChange={handleInputChange} placeholder="Date" />
                <Form.Input
                    value={activity.city} name='city' onChange={handleInputChange} placeholder="City" />
                <Form.Input
                    value={activity.venue} name='venue' onChange={handleInputChange} placeholder="Venue" />
                <Button
                    floated="right" positive type="submit" content="Submit" />
                <Button onClick={closeForm}
                    floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
}