import { Form, Formik } from "formik";
import { InputControl } from "../../../app/common/form/InputControl";
import * as Yup from 'yup'
import { observer } from "mobx-react-lite"
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/modules/activity";
import { useStore } from "../../../app/api/stores/store";
import { Button, Header } from "semantic-ui-react";
import { TexTAreaControl } from "../../../app/common/form/TextAreaControl";
import { SelectControl } from "../../../app/common/form/SelectControl";
import { CategoryOptions } from "../../../app/common/options/categoryOptions";
import { DateControl } from "../../../app/common/form/DateControl";
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
        date: null,
        city: "",
        venue: "",
    });

    const validationSchema = Yup.object({
        title: Yup.string().required("The activity title is required"),
        description: Yup.string().required("The activity description is required"),
        category: Yup.string().required(),
        date: Yup.string().required("Date is required"),
        city: Yup.string().required(),
        venue: Yup.string().required(),
    })

    useEffect(() => {
        if (id) {
            loadActivity(id).then((activity) => {
                setActivity(activity!)
            });
        }
    }, [id, loadActivity]);

    const handleFormSubmit = (activity: Activity) => {
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

    if (loadingInitial) return <LoadingComponent content="Loading Activity..." />

    return (
        <div>
            <h1>My Form</h1>
            <Header content="Activity Details" sub color="teal" />
            <Formik
                initialValues={activity}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" autoComplete='off'>
                        <InputControl name="title" placeholder="title" />
                        <TexTAreaControl
                            name='description'
                            rows={3}
                            placeholder="Description" />
                        <SelectControl
                            options={CategoryOptions}
                            name='category'
                            placeholder="Category" />
                        <DateControl
                            name='date'
                            placeholderText="Date"
                            showTimeSelect
                            timeCaption="Time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        <Header content="Location Details" sub color="teal" />
                        <InputControl
                            name='city'
                            placeholder="City" />
                        <InputControl
                            name='venue'
                            placeholder="Venue" />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated="right" positive type="submit" content="Submit" />
                        <Button as={Link} to='/activities'
                            floated="right" type="button" content="Cancel" />
                        
                    </Form>
                )}
            </Formik>
        </div>
    )
})
