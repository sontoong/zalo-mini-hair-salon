import React from "react";
import RatingThankPicture from "../../static/rating-thank.jpg";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const RatingThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full">
      <div className="flex flex-col items-center gap-[12px] px-[48px] pt-[200px]">
        {/* Image */}
        <div className="size-[160px]">
          <img
            src={RatingThankPicture}
            alt=""
            className="size-full object-cover"
          />
        </div>
        {/* Text */}
        <div className="text-center text-xl font-medium">
          Cảm ơn đã đánh giá!
        </div>
        <div className="text-center text-sm font-normal text-gray8">
          Đánh giá của bạn sẽ giúp cửa hàng nâng cao trải nghiệp khách hàng.
        </div>
      </div>
      <Button
        text={
          <div className="text-sm font-medium text-primary6">Về trang chủ</div>
        }
        className="absolute inset-x-[16px] bottom-[40px] h-[44px] rounded-[400px] border-[1.5px] border-primary5 bg-white"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export { RatingThankYou };
