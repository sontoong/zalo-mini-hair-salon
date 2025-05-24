import { DatePicker, Divider } from "antd";
import React, { FC } from "react";
import ArrowRightIcon from "../../static/chevron-right-blue.png";
import CalendarEditIcon from "../../static/calendar-edit.png";
import ClockIcon from "../../static/clock.png";
import dayjs from "dayjs";

const TimePicker: FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-[8px] px-[16px]">
      <div className="text-[15px] font-medium">Đặt lịch hẹn</div>
      <DatePicker
        showTime
        showHour
        suffixIcon={null}
        className="border-none p-0"
        allowClear={false}
        components={{
          input: React.forwardRef((propsInput, ref) => {
            const date = dayjs(props.value).format("dd, DD/MM/YYYY");
            const time = dayjs(props.value).format("HH:mm");
            return (
              <div
                ref={ref}
                className="flex h-[38px] w-full items-center gap-[12px] rounded-[20px] bg-primary1 pl-[12px] pr-[14px]"
                {...propsInput}
              >
                <div className="flex flex-1 items-center">
                  <div className="flex flex-1 items-center gap-[4px]">
                    <div className="size-[18px]">
                      <img
                        src={CalendarEditIcon}
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    {/* Date */}
                    {props.value ? (
                      <div className="text-sm font-medium text-primary6">
                        {date}
                      </div>
                    ) : (
                      <div className="text-sm font-medium text-gray4">_ _</div>
                    )}
                  </div>
                  <div className="flex flex-1 items-center">
                    <Divider type="vertical" />
                    <div className="flex items-center gap-[4px]">
                      <div className="size-[18px]">
                        <img
                          src={ClockIcon}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      {/* Time */}
                      {props.value ? (
                        <div className="text-sm font-medium text-primary6">
                          {time}
                        </div>
                      ) : (
                        <div className="text-sm font-medium text-gray4">
                          _ _
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="size-[16px]">
                  <img
                    src={ArrowRightIcon}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            );
          }),
        }}
        {...props}
      />
    </div>
  );
};

export { TimePicker };

type Props = {
  value?: string;
  onChange?: any;
};
