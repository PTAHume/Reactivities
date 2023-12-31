import { observer } from "mobx-react-lite";
import { Segment, Header, Comment, Button, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/api/stores/store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { formatDistanceToNow } from "date-fns";

export const ActivityDetailedChat = observer(
  ({ activityId }: { activityId: string }) => {
    const [connectionRef, setConnection] = useState(false);
    const { commentStore } = useStore();

    useEffect(() => {
      if (activityId && !connectionRef) {
        commentStore.createHubConnection(activityId);
        setConnection(true);
      }
      return () => {
        if (connectionRef) commentStore.clearComments();
      };
    }, [commentStore, activityId, connectionRef, setConnection]);

    return (
      <>
        <Segment
          textAlign="center"
          attached="top"
          inverted
          color="teal"
          style={{ border: "none" }}
        >
          <Header>Chat about this event</Header>
        </Segment>
        <Segment attached clearing>
          <Formik
            onSubmit={(values, { resetForm }) =>
              commentStore.addComments(values).then(() => {
                resetForm();
              })
            }
            initialValues={{ body: "" }}
            validationSchema={Yup.object({
              body: Yup.string().required("Comment required"),
            })}
          >
            {({ isSubmitting, isValid, handleSubmit, dirty }) => (
              <Form className="ui form">
                <Field name="body">
                  {(props: FieldProps) => (
                    <div style={{ position: "relative" }}>
                      <Loader active={isSubmitting} />
                      <textarea
                        placeholder="Enter your comments (Press Enter to submit, SHIFT + Enter for new line"
                        rows={2}
                        {...props.field}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.shiftKey) {
                            return;
                          }
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            isValid && handleSubmit();
                          }
                        }}
                      />
                    </div>
                  )}
                </Field>
                <Button
                  loading={isSubmitting}
                  disabled={isSubmitting || !dirty || !isValid}
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  primary
                  type="submit"
                  style={{ display: "flex", marginTop: "10px", zIndex: 999 }}
                  floated="right"
                />
              </Form>
            )}
          </Formik>
          <Comment.Group>
            {commentStore.comments.map((comment) => (
              <Comment key={comment.id}>
                <Comment.Avatar
                  as={Link}
                  to={`/profiles/${comment.username}`}
                  src={comment.image ?? "/assets/user.png"}
                />
                <Comment.Content>
                  <Comment.Author
                    as={Link}
                    to={`/profiles/${comment.username}`}
                  >
                    {comment.displayName}
                  </Comment.Author>
                  <Comment.Metadata>
                    <div>{formatDistanceToNow(comment.createdAt)} ago</div>
                  </Comment.Metadata>
                  <Comment.Text style={{ whiteSpace: "pre-wrap" }}>
                    {comment.body}
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>
        </Segment>
      </>
    );
  },
);
