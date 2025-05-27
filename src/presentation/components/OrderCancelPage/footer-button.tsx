import React from "react";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const FooterButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      text={<div className="text-sm font-normal text-white">Đặt lại</div>}
      className="rounded-[40px] bg-primary5 py-[8px]"
      onClick={() => navigate("/order")}
    />
  );
};

export default FooterButton;
