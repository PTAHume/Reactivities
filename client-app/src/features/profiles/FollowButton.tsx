import { observer } from "mobx-react-lite";
import { Profile } from "../../app/modules/profile";
import { Reveal, Button } from "semantic-ui-react";
import { useStore } from "../../app/api/stores/store";
import { SyntheticEvent, useState } from "react";

export const FollowButton = observer(({ profile }: { profile: Profile }) => {
  const { profileStore, userStore } = useStore();
  const { updateFollowing, loading } = profileStore;
  const [target, setTarget] = useState('');

  if (userStore.user?.userName == profile.userName) return null;

  const handleButton = (
    e: SyntheticEvent,
    username: string,
  ) => {
    e.preventDefault();
    setTarget(username);
    updateFollowing(username, !profile.following).then(() => { setTarget(''); })
  };

  return (
    <Reveal animated="move">
      <Reveal.Content visible>
        <Button
          fluid
          color="teal"
          name={profile.userName}
          content={profile.following ? 'Following' : 'Not Following'}
          loading={target === profile.userName && loading}
          disabled={target === profile.userName && loading}
        />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Button
          fluid
          basic
          name={profile.userName}
          color={profile.following ? 'red' : 'green'}
          content={profile.following ? 'Un-follow' : 'Follow'}
          loading={target === profile.userName && loading}
          disabled={target === profile.userName && loading}
          onClick={(e) => {
            handleButton(e, profile.userName);
          }}
        />
      </Reveal.Content>
    </Reveal>
  );
});
