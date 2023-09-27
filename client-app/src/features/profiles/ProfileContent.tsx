import { Tab } from "semantic-ui-react"
import { Profile } from "../../app/modules/profile"
import { observer } from "mobx-react-lite"
import { lazily } from "react-lazily"
import { useStore } from "../../app/api/stores/store"

const { ProfileAbout } = lazily(() => import("./ProfileAbout"))
const { ProfilePhotos } = lazily(() => import("./ProfilePhotos"))
const { ProfileFollowings } = lazily(() => import("./ProfileFollowings"))

export const ProfileContent = observer(({ profile }: { profile: Profile }) => {
    const { profileStore } = useStore()
    const panes = [
        { menuItem: 'About', render: () => <Tab.Pane><ProfileAbout /></Tab.Pane> },
        { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
        { menuItem: 'Events', render: () => <Tab.Pane>Events Content</Tab.Pane> },
        { menuItem: 'Followers', render: () => <ProfileFollowings /> },
        { menuItem: 'Following', render: () => <ProfileFollowings /> }
    ]
    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
            onTabChange={(_, data) => profileStore.setActiveTab(data.activeIndex as number)}
        />
    )
})