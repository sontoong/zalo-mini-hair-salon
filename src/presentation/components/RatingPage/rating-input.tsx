import { Rate } from "antd";
import React, { FC } from "react";

const RatingInput: FC<Props> = (props) => {
  return <Rate className="text-[28px]" {...props} />;
};

export { RatingInput };

type Props = {
  value?: any;
  onChange?: (value: any) => void;
};
