import { ErrorMessage, Form, Formik } from "formik";
import { InputControl } from "../../app/common/form/InputControl";
import { Button, Header, Label } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/api/stores/store";
import { UserFormValues } from "../../app/modules/user";

export const LoginForm = observer(() => {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ email: "", password: "", error: null }}
      onSubmit={(values, { setErrors, setSubmitting }) => {
        userStore
          .login({
            email: values.email,
            password: values.password,
          } as UserFormValues)
          .catch(() => {
            setErrors({ error: "Invalid email or password" });
            setSubmitting(false);
          });
      }}
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <Header
            as="h2"
            content="Login to Reactivates"
            color="teal"
            textAlign="center"
          />
          <InputControl placeholder="Email" name="email" />
          <InputControl
            placeholder="Password"
            name="password"
            type="password"
          />
          <ErrorMessage
            name="error"
            render={() => (
              <Label
                style={{ marginBottom: 10 }}
                basic
                color="red"
                content={errors.error}
              />
            )}
          />
          <Button
            loading={isSubmitting}
            positive
            content="Login"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
});
