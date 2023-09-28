import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import { useStore } from "../../app/api/stores/store";
import { InputControl } from "../../app/common/form/InputControl";
import { TexTAreaControl } from "../../app/common/form/TextAreaControl";
import { ProfileType } from "../../app/modules/profile";

export const ProfileEditForm = observer(
  ({ setEditMode }: { setEditMode: (editMode: boolean) => void }) => {
    const {
      profileStore: { profile, updateProfile },
    } = useStore();
    return (
      <Formik
        initialValues={{
          displayName: profile?.displayName,
          bio: profile?.bio,
        }}
        onSubmit={(values) => {
          updateProfile(values as ProfileType).then(() => {
            setEditMode(false);
          });
        }}
        validationSchema={Yup.object({
          displayName: Yup.string().required("Display name is required"),
        })}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <InputControl placeholder="Display Name" name="displayName" />
            <TexTAreaControl rows={3} placeholder="Add your bio" name="bio" />
            <Button
              positive
              type="submit"
              loading={isSubmitting}
              content="Update profile"
              floated="right"
              disabled={!isValid || !dirty}
            />
          </Form>
        )}
      </Formik>
    );
  },
);
