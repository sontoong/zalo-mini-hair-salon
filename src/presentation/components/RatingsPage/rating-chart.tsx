import React from "react";
import { StarFilled } from "@ant-design/icons";
import { Progress } from "antd";

const RatingChart = () => {
  return (
    <div className="flex items-center gap-[40px] pl-[16px] pr-[32px]">
      {/* Left */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[4px]">
          <StarFilled className="text-yellow5 text-xl" />
          <span className="text-xl font-medium">4.8</span>
        </div>
        <div className="text-sm font-normal text-neutral6">120 đánh giá</div>
      </div>
      {/* Right */}
      <div className="flex flex-1 flex-col gap-[4px]">
        {Object.keys(data)
          .reverse()
          .map((key, index) => (
            <div key={index} className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[2px]">
                <div className="text-neutral8 text-sm font-normal">{key}</div>
                <StarFilled className="text-yellow5 text-sm" />
              </div>
              <Progress
                percent={data[key].percent}
                strokeColor="#00BFFF"
                showInfo={false}
              />
              <div className="w-[20px] text-sm font-normal text-neutral5">
                {`(${data[key].count})`}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RatingChart;

const data = {
  5: { percent: 60, count: 12 },
  4: { percent: 60, count: 12 },
  3: { percent: 20, count: 6 },
  2: { percent: 20, count: 5 },
  1: { percent: 5, count: 3 },
};
