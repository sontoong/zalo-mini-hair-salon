import React, { useState } from "react";
import { CheckableTag } from "../common/tag";

const Filters = () => {
  const [currentChecked, setCurrentChecked] = useState<number>();

  return (
    <div className="flex gap-[6px]">
      {types.map((type, index) => (
        <CheckableTag
          key={index}
          className="flex h-[26px] items-center rounded-[20px]"
          checked={currentChecked === index}
          onClick={() => setCurrentChecked(index)}
        >
          <div className="text-xs font-normal">{type.label}</div>
        </CheckableTag>
      ))}
    </div>
  );
};

export default Filters;

const types = [
  { label: "Tất cả" },
  { label: "Đơn nháp" },
  { label: "Chờ xác nhận" },
  { label: "Chờ thực hiện" },
];
