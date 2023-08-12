import { Button, Form, Segment } from "semantic-ui-react"
import { ChangeEvent, useEffect, useState } from "react"
import { useStore } from "../../../app/api/stores/store"
import { observer } from "mobx-react-lite"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Activity } from "../../../app/modules/activity"
import { LoadingComponent } from "../../../app/layout/LoadingComponent"
import { v4 as uuid } from "uuid";

export const ActivityForm = observer(() => {
    const { activityStore } = useStore();
    const { loading, createActivity, updateActivity,
        loadActivity, loadingInitial } = activityStore;

    const { id } = useParams()
    const navigate = useNavigate()

    const [activity, setActivity] = useState<Activity>({
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
    });

    useEffect(() => {
        if (id) {
            loadActivity(id).then((activity) => {
                setActivity(activity!)
            });
        }
    }, [id, loadActivity]);

    const handleSubmit = () => {
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => {
                navigate(`/activities/${activity.id}`)
            });
        } else {
            updateActivity(activity).then(() => {
                navigate(`/activities/${activity.id}`)
            });
        }
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    if (loadingInitial) return <LoadingComponent content="Loading Activity..." />

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
                <Button as={Link} to='/activities'
                    floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
})