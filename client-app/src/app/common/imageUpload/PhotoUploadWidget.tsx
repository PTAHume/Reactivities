import { Button, Grid, Header } from "semantic-ui-react";
import { PhotoWidgetDropZone } from "./PhotoWidgetDropZone";
import { useEffect, useState } from "react";
import { ImageFile } from "../../modules/ImageFile";
import { PhotoWidgetCropper } from "./PhotoWidgetCropper";

export const PhotoUploadWidget = ({
  uploadPhoto,
  loading,
}: {
  uploadPhoto(file: Blob): void;
  loading: boolean;
}) => {
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [cropper, setCropper] = useState<Cropper>();
  const onCrop = () => {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => {
        uploadPhoto(blob!);
      });
    }
  };

  useEffect(() => {
    return () => {
      files.forEach((file: ImageFile) => {
        URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);

  return (
    <Grid>
      <Grid.Column width={4}>
        <Header color="teal" content="Step 1 - Add Photo" />
        <PhotoWidgetDropZone setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color="teal" content="Step 2 - Resize Image" />
        {files && files.length > 0 && (
          <PhotoWidgetCropper
            setCropper={setCropper}
            imagePreview={files[0].preview}
          />
        )}
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color="teal" content="Step 3 - Preview & Upload" />
        {files && files.length > 0 && (
          <>
            <div
              className="img-preview"
              style={{ minHeight: 200, overflow: "hidden" }}
            />
            <Button.Group width={2}>
              <Button
                loading={loading}
                onClick={() => {
                  onCrop;
                }}
                positive
                icon="check"
              />
              <Button
                disabled={loading}
                onClick={() => {
                  setFiles([]);
                }}
                icon="close"
              />
            </Button.Group>
          </>
        )}
      </Grid.Column>
    </Grid>
  );
};
