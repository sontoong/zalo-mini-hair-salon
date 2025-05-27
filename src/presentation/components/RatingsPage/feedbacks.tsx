import React, { useState } from "react";
import { Tag } from "../common/tag";
import { Divider } from "antd";
import Customer1 from "../../static/customer-1.jpg";
import Service1 from "../../static/high-rating-service.jpg";
import Rate from "../common/rate";
import { Button } from "../common/button";
import { Select } from "../common/select";
import { StarFilled } from "@ant-design/icons";

const Feedbacks = () => {
  return (
    <>
      <Filters />
      <div className="flex flex-col gap-[12px] px-[16px]">
        <Divider className="m-0" />
        {Array.from({ length: 6 }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-[8px]">
              {/* Profile */}
              <div className="flex justify-between">
                {/* Name */}
                <div className="flex gap-[12px]">
                  <div className="size-[48px] overflow-hidden rounded-full">
                    <img
                      src={Customer1}
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[15px] font-medium">Emm Yi</div>
                    <Rate className="text-sm" disabled />
                  </div>
                </div>
                {/* Time */}
                <div className="text-xs font-normal text-gray7">
                  19:33, 20/12/2024
                </div>
              </div>
              {/* Feedback */}
              <div className="text-sm font-normal">
                Chất lượng tốt, dịch vụ ổn, nhân viên nhiệt tình.
              </div>
              <div className="flex flex-col gap-[8px]">
                {/* Tags */}
                <div className="flex gap-[12px]">
                  <Tag
                    color="#FFFFFF"
                    className="m-0 rounded-[12px] !border-stroke3"
                  >
                    <div className="text-gray8">Dịch vụ tốt</div>
                  </Tag>
                  <Tag
                    color="#FFFFFF"
                    className="m-0 rounded-[12px] !border-stroke3"
                  >
                    <div className="text-gray8">Nhân viên nhiệt tình</div>
                  </Tag>
                </div>
                {/* Service */}
                <div className="flex items-center gap-[8px] rounded-[8px] bg-neutral2 p-[8px]">
                  <div className="size-[40px] overflow-hidden rounded-[4px]">
                    <img
                      src={Service1}
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="text-xs font-normal">Cắt, uốn duỗi</div>
                </div>
              </div>
            </div>
            {index !== 6 ? <Divider className="m-0" /> : null}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

const Filters = () => {
  return (
    <div className="flex gap-[12px] pl-[6px]">
      <Button
        text={<div className="text-sm font-normal text-neutral8">Tất cả</div>}
        className="flex h-[32px] flex-none items-center rounded-[8px] border border-stroke1 px-[12px]"
      />
      <Select
        defaultValue="5"
        options={ratings}
        colorBorder="transparent"
        className="overflow-hidden rounded-[8px] border border-stroke1"
      />
      <Select
        defaultValue="1"
        options={services}
        colorBorder="transparent"
        className="overflow-hidden rounded-[8px] border border-stroke1"
      />
    </div>
  );
};

export default Feedbacks;

const ratings = [
  {
    value: "5",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          5 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
  {
    value: "4",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          4 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
  {
    value: "3",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          3 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
  {
    value: "2",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          2 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
  {
    value: "1",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          1 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
];

const services = [
  {
    value: "1",
    label: <div className="text-sm font-normal text-neutral8">Uốn tóc</div>,
  },
  {
    value: "2",
    label: <div className="text-sm font-normal text-neutral8">Duỗi tóc</div>,
  },
];
