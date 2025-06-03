import React, { useState, useRef, useCallback } from "react";
import { DatePicker, Divider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import ChevronDown from "../../static/chevron-down-small.png";
import clsx from "clsx";

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedTime, setSelectedTime] = useState<string>("06:00");
  const swiperRef = useRef<SwiperType | null>(null);

  const timeSlots = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:30",
    "06:30",
  ].concat(Array.from({ length: 19 }).map((_, index) => `06:${30 + index}`));

  const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  const getWeekDates = useCallback((offset: number) => {
    const startOfWeek = dayjs().startOf("week").add(offset, "week");
    return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
  }, []);

  const onDateChange = (date: Dayjs) => {
    if (date >= dayjs().startOf("day")) {
      setSelectedDate(date);

      const diffInWeeks = date.diff(dayjs().startOf("week"), "week");

      if (swiperRef.current) {
        swiperRef.current.slideTo(diffInWeeks);
      }
    }
  };

  const onTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const disabledDate = (date: Dayjs) => {
    return date.isBefore(dayjs().startOf("day"));
  };

  const renderWeekSlide = (offset: number) => {
    const dates = getWeekDates(offset);
    return (
      <div className="flex w-full justify-between">
        {dates.map((date, index) => {
          const isSelected = date.isSame(selectedDate, "day");
          const isToday = date.isSame(dayjs(), "day");

          return (
            <button
              key={index}
              onClick={() => onDateChange(date)}
              className={clsx(
                "flex h-[64px] flex-col items-center gap-[6px] rounded-[24px] px-[10px] py-[8px]",
                {
                  "bg-primary4 text-white": isSelected,
                  "bg-blue1": isToday,
                },
              )}
            >
              <div className="text-lg font-medium">{date.date()}</div>
              <div
                className={clsx("text-xs font-normal text-gray7", {
                  "!text-white": isSelected,
                })}
              >
                {weekdays[index]}
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const virtualSlides = Array.from({ length: 100 }).map((_, index) => {
    const offset = index;
    return { offset };
  });

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[14px]">
        {/* Header */}
        <div className="text-lg font-medium">Chọn lịch hẹn</div>
        {/* Date Selection */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <DatePicker
              disabledDate={disabledDate}
              variant="borderless"
              format="[Tháng] M[/]YYYY"
              allowClear={false}
              className="w-[120px] p-0"
              inputReadOnly
              suffixIcon={
                <img
                  src={ChevronDown}
                  alt="ChevronDown"
                  className="size-[20px] object-contain"
                />
              }
              value={selectedDate}
              onChange={(date) => date && onDateChange(date)}
            />
            <div
              className="text-[15px] font-medium text-blue5"
              onClick={() => onDateChange(dayjs())}
            >
              Hôm nay
            </div>
          </div>
          <Divider className="m-0" />
          <Swiper
            modules={[Virtual]}
            spaceBetween={0}
            slidesPerView={1}
            virtual
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="size-full"
          >
            {virtualSlides.map((slide, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                {renderWeekSlide(slide.offset)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Time Slots */}
      <div className="flex flex-col gap-[14px]">
        <div className="text-[15px] font-medium">Chọn khung giờ</div>
        <div className="grid grid-cols-5 gap-[12px]">
          {timeSlots.map((time, index) => {
            const isSelected = time === selectedTime;
            return (
              <button
                key={index}
                onClick={() => onTimeSelect(time)}
                className={clsx(
                  "h-[42px] rounded-[8px] border border-primary6",
                  {
                    "bg-primary1": isSelected,
                  },
                )}
              >
                <div
                  className={clsx("text-[15px] font-medium", {
                    "text-primary6": isSelected,
                  })}
                >
                  {time}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { AppointmentScheduler };
