import React from "react";
import Image from "next/image";

const Photos = ({ photos }) => {
  return (
    <>
      {photos.map((photo) => (
        <div className="card">
          <div className="img_wraper">
            <Image
              src={photo.thumbnailUrl}
              height={200}
              width={300}
              alt="image"
            />
          </div>
          <p className="search_doctor">{photo.title.substr(1, 25)}</p>
          <p className="doctor_description">{photo.title}</p>
        </div>
      ))}
    </>
  );
};

export default Photos;
