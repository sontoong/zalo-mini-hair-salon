import React, { useState } from "react";
import { Form } from "../common/form";
import { ImageUpload, UploadImage } from "../common/image-upload";
import { DatePicker, Input } from "antd";
import CalendarIconBlue from "../../static/calendar-icon-blue.png";
import { Button } from "../common/button";
import ProfileImage from "../../static/profile.png";

const UpdateAccountForm = () => {
  const [form] = Form.useForm();
  const [images, setImages] = useState<UploadImage[]>([
    { name: "profile", url: ProfileImage },
  ]);

  const initialValues = {
    phone: "0967260087",
  };

  return (
    <Form form={form} initialValues={initialValues} className="relative h-full">
      <div className="flex flex-col items-center gap-[20px] px-[16px] pt-[20px]">
        <ImageUpload
          images={images}
          setImages={setImages}
          maxCount={1}
          listType="picture-circle"
          className={"customSizedUpload"}
        />
        <div className="flex w-full flex-col gap-[12px] rounded-[8px] bg-white p-[12px]">
          <Form.Item
            name="name"
            label={
              <div className="text-sm font-medium text-gray7">Họ và Tên</div>
            }
            labelCol={{ className: "!p-0" }}
            className="m-0"
          >
            <Input placeholder="Nhập dịch vụ khác" className="h-[45px]" />
          </Form.Item>
          <Form.Item
            name="phone"
            label={
              <div className="text-sm font-medium text-gray7">
                Số điện thoại
              </div>
            }
            labelCol={{ className: "!p-0" }}
            className="m-0"
          >
            <Input className="neutral6 h-[45px]" disabled />
          </Form.Item>
          <Form.Item
            name="date"
            label={
              <div className="text-sm font-medium text-gray7">Ngày sinh</div>
            }
            labelCol={{ className: "!p-0" }}
            className="m-0"
          >
            <DatePicker
              placeholder="DD/MM/YYYY"
              className="h-[45px] w-full"
              format="DD/MM/YYYY"
              suffixIcon={<img src={CalendarIconBlue} className="]" />}
              placement="bottomLeft"
              allowClear={false}
            />
          </Form.Item>
        </div>
      </div>
      <Button
        text={<div className="text-sm font-normal text-white">Cập nhật</div>}
        className="absolute inset-x-[16px] bottom-[40px] h-[41px] rounded-[40px] bg-primary5"
      />
    </Form>
  );
};

export default UpdateAccountForm;
