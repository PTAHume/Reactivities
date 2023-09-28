import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Header, Icon } from "semantic-ui-react";
import { ImageFile } from "../../modules/ImageFile";

export const PhotoWidgetDropZone = ({
  setFiles,
}: {
  setFiles(files: ImageFile[]): void;
}) => {
  const dzStyles = {
    border: "dashed 3px  #eee",
    borderColor: "#eee",
    boarderRadius: "5px",
    paddingTop: "30px",
    textAlign: "center" as const,
    hight: 200,
  };

  const dzActive = {
    borderColor: "green",
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file: File) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
    [setFiles],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}
    >
      <input {...getInputProps()} />
      <Icon name="upload" size="huge" />
      <Header content="Drop image here" />
    </div>
  );
};
