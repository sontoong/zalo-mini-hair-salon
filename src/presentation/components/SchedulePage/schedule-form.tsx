import React, { FC } from "react";
import { ServiceList } from "./service-list";
import { Form } from "../common/form";
import { Calendar } from "./calendar";
import { Button } from "../common/button";

const ScheduleForm: FC<Props> = ({ openSuccessModal }) => {
  const [serviceForm] = Form.useForm();
  const [calendarForm] = Form.useForm();

  function submitForm() {
    const serviceValues = serviceForm.getFieldsValue();
    const calendarValues = calendarForm.getFieldsValue();

    const allValues = {
      ...serviceValues,
      ...calendarValues,
    };

    console.log(allValues);
    openSuccessModal();
  }

  return (
    <div>
      <div className="flex flex-col gap-[24px]">
        <ServiceList form={serviceForm} />
        <Calendar form={calendarForm} />
      </div>
      <div
        className="absolute inset-x-0 bottom-0"
        style={{ boxShadow: "0px -2px 12px 0px #0000000F" }}
      >
        <div
          className="px-[16px] pb-[20px] pt-[12px]"
          style={{ boxShadow: "0px -2px 12px 0px #0000000F" }}
        >
          <Button
            text={
              <div className="text-[15px] font-medium text-white">
                Đặt lịch tư vấn
              </div>
            }
            className="h-[36px] w-full rounded-[40px] bg-primary5"
            onClick={submitForm}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleForm;

type Props = {
  openSuccessModal: () => void;
};
