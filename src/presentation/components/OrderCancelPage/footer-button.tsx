import React from "react";
import { Button } from "../common/button";

const FooterButton = () => {
  return (
    <Button
      text={<div className="text-sm font-normal text-white">Đặt lại</div>}
      className="rounded-[40px] bg-primary5 py-[8px]"
    />
  );
};

export default FooterButton;
