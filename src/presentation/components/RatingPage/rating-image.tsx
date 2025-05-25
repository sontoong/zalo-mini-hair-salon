import React from "react";
import RatingImg from "../../static/rating-page-image.png";

const RatingImage = () => {
  return (
    <div className="size-[160px]">
      <img src={RatingImg} alt="" className="size-full object-cover" />
    </div>
  );
};

export { RatingImage };
