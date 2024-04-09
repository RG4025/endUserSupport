import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";

function DocumentTest() {
  const document = useRef();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,application/pdf",
    onDrop: (acceptedFiles) => {
      handleFileUpload(acceptedFiles);
    },
  });

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileName = file.name;
    const fileType = file.type;

    const action = {
      type: "ADD_TICKET_DOCUMENT",
      payload: {
        file,
        fileName,
        fileType,
      },
    };

    console.log(action);
    document.current.textContent = action;
  };
  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag & drop or click to select a file (Images & PDFs only)</p>

        <p ref={document}></p>
      </div>
    </>
  );
}

export default DocumentTest;
