import { useEffect, useState } from "react";
import { useStore } from "../../app/api/stores/store";
import { useQuery } from "../../app/utils/hooks";
import { toast } from "react-toastify";
import { agent } from "../../app/api/agent";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import { LoginForm } from "./LoginForm";

export const ConfirmEmail = () => {
  const { modalStore } = useStore();
  const email = useQuery().get("email") as string;
  const token = useQuery().get("token") as string;
  const Status = {
    Verifying: "Verifying",
    Failed: "Failed",
    Success: "Success",
  };
  const [status, setStatus] = useState(Status.Verifying);
  const handleConfirmResendEmail = () => {
    agent.Account.resendEmailConfirm(email)
      .then(() => {
        toast.success("Verification email resent - please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    agent.Account.verifyEmail(token, email)
      .then(() => {
        setStatus(Status.Success);
      })
      .catch((error) => {
        console.log(error);
        setStatus(Status.Failed);
      });
  }, [Status.Failed, Status.Success, token, email]);

  const getBody = () => {
    switch (status) {
      case Status.Verifying:
        return <p>Verifying...</p>;
      case Status.Failed:
        return (
          <div>
            <p>
              Verification failed. You can try resending the verify the link to
              your Email
            </p>
            <Button
              primary
              onClick={() => {
                handleConfirmResendEmail();
              }}
              content="Resent email confirmation"
              size="huge"
            />
          </div>
        );
      case Status.Success:
        return (
          <div>
            <p>Email has been verified - you can now log in</p>
            <Button
              positive
              size="huge"
              content="Login"
              onClick={() => {
                modalStore.openModal(<LoginForm />);
              }}
            />
          </div>
        );
    }
  };

  return (
    <Segment placeholder textAlign="center">
      <Header icon>
        <Icon name="envelope" />
        Email Verification
      </Header>
      <Segment.Inline>{getBody()}</Segment.Inline>
    </Segment>
  );
};
