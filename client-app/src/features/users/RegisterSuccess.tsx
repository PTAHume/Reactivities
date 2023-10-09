import { toast } from "react-toastify";
import { agent } from "../../app/api/agent";
import { useQuery } from "../../app/utils/hooks";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export const RegisterSuccess = () => {
  const email = useQuery().get("email") as string;
  const handleConfirmResendEmail = () => {
    agent.Account.resendEmailConfirm(email)
      .then(() => {
        toast.success("Verification email resent - please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Segment placeholder textAlign="center">
      <Header icon color="green">
        <Icon name="check" />
        Successfully Registered !
      </Header>
      <p>
        Please check your email (including junk email) for the verification
        email
      </p>
      {email && (
        <>
          <p>Did not receive the email? Click the below button to resend</p>
          <Button
            primary
            onClick={() => {
              handleConfirmResendEmail();
            }}
            content="Resent email"
            size="huge"
          />
        </>
      )}
    </Segment>
  );
};
