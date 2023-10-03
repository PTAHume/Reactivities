import { ErrorMessage, Form, Formik } from "formik";
import { InputControl } from "../../app/common/form/InputControl";
import { Button, Header } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/api/stores/store";
import { UserFormValues } from "../../app/modules/user";
import * as Yup from "yup";
import { lazily } from "react-lazily";

const { ValidationErrors } = lazily(
  () => import("../errors/ValidationErrors.tsx"),
);

export const RegisterForm = observer(() => {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{
        displayName: "",
        userName: "",
        email: "",
        password: "",
        error: null,
      }}
      onSubmit={(values, { setErrors, setSubmitting }) => {
        userStore
          .register({
            displayName: values.displayName,
            userName: values.userName,
            email: values.email,
            password: values.password,
          } as UserFormValues)
          .catch((error) => {
            setErrors({ error });
            setSubmitting(false);
          });
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        userName: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form
          className="ui form error"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Header
            as="h2"
            content="Sign up to Reactivates"
            color="teal"
            textAlign="center"
          />
          <InputControl placeholder="Display Name" name="displayName" />
          <InputControl placeholder="User Name" name="userName" />
          <InputControl placeholder="Email" name="email" />
          <InputControl
            placeholder="Password"
            name="password"
            type="password"
          />
          <ErrorMessage
            name="error"
            render={() => (
              <ValidationErrors errors={errors.error as unknown as string[]} />
            )}
          />
          <Button
            disabled={!isValid || !dirty || isSubmitting}
            loading={isSubmitting}
            positive
            content="Register"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
});
