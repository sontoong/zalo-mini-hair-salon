import React, { useEffect, useState } from "react";
import { RatingImage } from "./rating-image";
import { RatingInput } from "./rating-input";
import { OrderInformation } from "./order-information";
import { RatingForm } from "./rating-form";
import { RatingThankYou } from "./thank-you";

const RatingContainer = () => {
  const [step, setStep] = useState<number>(0);
  const [ratingValue, setRatingValue] = useState<number>();

  return (
    <>
      {step === 0 && (
        <div className="flex flex-col items-center gap-[24px] px-[28px] pt-[100px]">
          {/* Image */}
          <RatingImage />
          {/* Rating input */}
          <div className="flex flex-col items-center gap-[24px]">
            <div className="flex flex-col gap-[12px] text-center">
              <div className="text-xl font-medium">
                Đánh giá trải nghiệm của bạn
              </div>
              <div className="text-sm font-normal text-gray8">
                Đánh giá của bạn sẽ giúp cửa hàng nâng cao trải nghiệp khách
                hàng.
              </div>
            </div>
            <RatingInput
              value={ratingValue}
              onChange={(value) => {
                setRatingValue(value);
                setStep(1);
              }}
            />
          </div>
          {/* Order information */}
          <OrderInformation />
        </div>
      )}
      {step === 1 && (
        <RatingForm
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
          setStep={setStep}
        />
      )}
      {step === 2 && <RatingThankYou />}
    </>
  );
};

export default RatingContainer;
