"use client";

import React, { useState, MouseEvent } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface CloudinaryUploadResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState<string>("");

  return (
    <>
      {publicId && (
        <CldImage
          className="mb-4"
          width={270}
          height={180}
          alt="Hook image"
          src={publicId}
        />
      )}
      <CldUploadWidget
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result) => {
          if (result.event !== "success") return;

          const { public_id } = result.info as CloudinaryUploadResult;
          setPublicId(public_id);
        }}
        uploadPreset="ykc7nlk1"
      >
        {({ open }) => {
          const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            open();
          };

          return (
            <button className="btn btn-primary" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
