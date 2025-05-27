import React, { FC } from "react";
import Rate from "../common/rate";

const RatingInput: FC<Props> = (props) => {
  return <Rate className="text-[28px]" {...props} />;
};

export { RatingInput };

type Props = {
  value?: any;
  onChange?: (value: any) => void;
};
