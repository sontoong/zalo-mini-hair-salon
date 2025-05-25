import React from "react";
import { Header, Page } from "zmp-ui";
import HomeIcon from "../static/home-blue.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/button";
import {
  OrderSuccessPageFooterButtons,
  OrderSuccessPageHead,
  OrderSuccessPageOrderDetails,
} from "../components/OrderSuccessPage";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className=" ">
              <Button.Icon
                className="flex size-[40px] items-center justify-center rounded-full bg-white"
                style={{ boxShadow: "0px -2px 12px 0px #0000000F" }}
                icon={<img src={HomeIcon} />}
                onClick={() => navigate("/")}
              />
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto !bg-surface !pl-[16px]"
        showBackIcon={false}
      />
      <div className="flex-1 overflow-auto">
        <div className="px-[16px] pb-[16px]">
          <div className="flex flex-col gap-[12px] rounded-[24px] bg-white px-[12px] py-[20px]">
            <OrderSuccessPageHead success={true} />
            <OrderSuccessPageOrderDetails success={true} />
            <OrderSuccessPageFooterButtons />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default OrderSuccessPage;
