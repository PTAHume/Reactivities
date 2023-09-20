import { observer } from "mobx-react-lite"
import { Card, Header, Tab, Image, Grid, Button } from "semantic-ui-react"
import { Photo, Profile } from "../../app/modules/profile"
import { useStore } from "../../app/api/stores/store"
import { SyntheticEvent, useState } from "react"
import { PhotoUploadWidget } from "../../app/common/imageUpload/PhotoUploadWidget"

export const ProfilePhotos = observer(({ profile }: { profile: Profile }) => {
    const { profileStore: { isCurrentUser, uploadPhoto,
        uploading, loading, setMainPhoto, deletePhoto } } = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);
    const [target, setTarget] = useState('');
    const handlePhotoUpload = (file: Blob) => {
        uploadPhoto(file).then(() => setAddPhotoMode(false));
    }
    const handleSetMainPhoto = (photo: Photo, e: SyntheticEvent<HTMLButtonElement>) => {
        setTarget(e.currentTarget.name);
        setMainPhoto(photo);
    }
    const handleDeletePhoto = (photo: Photo, e: SyntheticEvent<HTMLButtonElement>) => {
        setTarget(e.currentTarget.name);
        deletePhoto(photo);
    }

    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated="left" icon='image' content='Photos' />
                    {isCurrentUser &&
                        <Button
                            floated="right"
                            basic
                            content={addPhotoMode ? 'Cancel' : 'Add Photo'}
                            onClick={() => setAddPhotoMode(!addPhotoMode)}
                        ></Button>
                    }
                </Grid.Column>
                <Grid.Column width={16}>
                    {addPhotoMode ? (
                        <PhotoUploadWidget uploadPhoto={handlePhotoUpload} loading={uploading} />
                    ) : (
                        <Card.Group itemsPerRow={5}>
                            {profile.photos?.map(photo =>
                                <Card key={photo.id}>
                                    <Image src={photo.url} />
                                    {isCurrentUser && (
                                        <Button.Group fluid width={2}>
                                            <Button
                                                basic
                                                color="green"
                                                content="Main"
                                                name={'main' + photo.id}
                                                disabled={photo.isMain}
                                                loading={target === 'main' + photo.id && loading}
                                                onClick={e => handleSetMainPhoto(photo, e)}
                                            />
                                            <Button
                                                basic
                                                color="red"
                                                icon="trash"
                                                name={photo.id}
                                                disabled={photo.isMain}
                                                loading={target === photo.id && loading}
                                                onClick={e => handleDeletePhoto(photo, e)}
                                            />
                                        </Button.Group>
                                    )}
                                </Card>
                            )}
                        </Card.Group>
                    )}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
})