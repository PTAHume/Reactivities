import { Tab } from "semantic-ui-react"
import { Profile } from "../../app/modules/profile"
import { observer } from "mobx-react-lite"
import { lazily } from "react-lazily"

const { ProfileAbout } = lazily(() => import("./ProfileAbout"))
const { ProfilePhotos } = lazily(() => import("./ProfilePhotos"))

export const ProfileContent = observer(({ profile }: { profile: Profile }) => {
    const panes = [
        { menuItem: 'About', render: () => <Tab.Pane><ProfileAbout /></Tab.Pane> },
        { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
        { menuItem: 'Events', render: () => <Tab.Pane>Events Content</Tab.Pane> },
        { menuItem: 'Followers', render: () => <Tab.Pane>Followers Content</Tab.Pane> },
        { menuItem: 'Following', render: () => <Tab.Pane>Following Content</Tab.Pane> }
    ]
    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
        />
    )
})