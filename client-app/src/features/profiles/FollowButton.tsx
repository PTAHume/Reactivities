import { observer } from "mobx-react-lite";
import { Profile } from "../../app/modules/profile";
import { Reveal, Button } from "semantic-ui-react";
import { useStore } from "../../app/api/stores/store";
import { SyntheticEvent } from "react";

export const FollowButton = observer(({ profile }: { profile: Profile }) => {
  const { profileStore, userStore } = useStore();
  const { updateFollowing, loading } = profileStore;

  if (userStore.user?.userName == profile.userName) return null;

  const handleButton = (e: SyntheticEvent, username: string) => {
    e.preventDefault();
    updateFollowing(username, !profile.following);
  };

  return (
    <Reveal animated="move" disabled={loading}>
      <Reveal.Content visible>
        <Button
          fluid
          color="teal"
          content={profile.following ? "Following" : "Not Following"}
          loading={loading}
          disabled={loading}
        />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Button
          fluid
          basic
          color={profile.following ? "red" : "green"}
          content={profile.following ? "Un-follow" : "Follow"}
          loading={loading}
          disabled={loading}
          onClick={(e) => {
            handleButton(e, profile.userName);
          }}
        />
      </Reveal.Content>
    </Reveal>
  );
});
