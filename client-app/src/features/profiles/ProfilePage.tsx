import { Grid } from "semantic-ui-react";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileContent } from "./ProfileContent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStore } from "../../app/api/stores/store";
import { useEffect } from "react";
import { lazily } from "react-lazily";

const { LoadingComponent } = lazily(
  () => import("../../app/layout/LoadingComponent.tsx"),
);

export const ProfilePage = observer(() => {
  const { username } = useParams<{ username: string }>();
  const { profileStore } = useStore();
  const { loadingProfile, profile, loadProfile, setActiveTab } = profileStore;

  useEffect(() => {
    if (username != null) loadProfile(username);
    return () => {
      setActiveTab(0);
    };
  }, [loadProfile, setActiveTab, username]);

  if (loadingProfile) return <LoadingComponent content="Loading Profile..." />;

  return (
    <Grid>
      <Grid.Column width={16}>
        {profile && (
          <>
            <ProfileHeader profile={profile} />
            <ProfileContent profile={profile} />
          </>
        )}
      </Grid.Column>
    </Grid>
  );
});
