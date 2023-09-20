import { Cropper } from "react-cropper"
import "cropperjs/dist/cropper.css";

export const PhotoWidgetCropper = ({ setCropper, imagePreview }: { setCropper(cropper: Cropper): void, imagePreview: string }) => {
    return (
        <Cropper
            src={imagePreview}
            style={{ height: 200, width: '100%' }}
            initialAspectRatio={1}
            aspectRatio={1}
            preview='.img-preview'
            guides={false}
            viewMode={1}
            autoCropArea={1}
            background={false}
            onInitialized={cropper => setCropper(cropper)}
        />
    )
}