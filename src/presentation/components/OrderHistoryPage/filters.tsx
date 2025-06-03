import React, { FC, useState } from "react";
import { CheckableTag } from "../common/tag";
import { DatePicker } from "antd";
import RangePickerIcon from "../../static/date-range-picker-icon.png";
import { SearchBar } from "../common/search-bar";

const Filters: FC<Props> = ({ enableSearch }) => {
  const [currentChecked, setCurrentChecked] = useState<number>();

  return (
    <div className="flex flex-col gap-[12px]">
      {enableSearch ? (
        <SearchBar
          className="rounded-[24px] border-stroke2 text-sm"
          placeholder="Tìm đơn hàng"
        />
      ) : null}
      <div className="flex gap-[6px]">
        {filterTags.map((tag, index) => (
          <CheckableTag
            key={index}
            className="flex h-[26px] items-center justify-center rounded-[20px] border-stroke3 bg-white px-[8px]"
            checked={currentChecked === index}
            onClick={() => setCurrentChecked(index)}
          >
            <div className="text-sm font-normal">{tag.label}</div>
          </CheckableTag>
        ))}
      </div>
      <DatePicker.RangePicker
        className="w-fit rounded-[20px] border border-[#EEF0F2] bg-white text-xs"
        format="DD/MM/YYYY"
        prefix={<img src={RangePickerIcon} className="size-[18px]" />}
        suffixIcon={null}
        allowClear={false}
        separator={<div className="-translate-x-[15px] text-neutral7">-</div>}
      />
    </div>
  );
};

export default Filters;

type Props = {
  enableSearch?: boolean;
};

const filterTags = [
  { label: "Tất cả" },
  { label: "Đã hoàn thành" },
  { label: "Đã huỷ" },
];
