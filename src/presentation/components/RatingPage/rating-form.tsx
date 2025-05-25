import React, { FC } from "react";
import { Form } from "../common/form";
import { RatingInput } from "./rating-input";
import Tags from "./tags";
import { Input } from "antd";
import { Button } from "../common/button";

const RatingForm: FC<Props> = ({ ratingValue, setRatingValue, setStep }) => {
  const [form] = Form.useForm();
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  function onFormFinish(e) {
    console.log(e);
    setStep?.(2);
  }

  if (ratingValue && ratingValue < 3) {
    return (
      <Form
        form={form}
        className="relative h-full px-[16px]"
        onFinish={onFormFinish}
      >
        <div className="flex flex-col items-center gap-[24px] pt-[200px]">
          {/* Rating input */}
          <div className="flex flex-col items-center gap-[24px]">
            <RatingInput
              value={ratingValue}
              onChange={(value) => {
                setRatingValue(value);
              }}
            />
            <div className="text-center text-xl font-medium">
              Bạn gặp vấn đề gì?
            </div>
          </div>
          {/* Tags */}
          <Tags
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tags={tagsNegative}
          />
          {/* Notes */}
          <Form.Item name="extra-notes" noStyle>
            <Input.TextArea
              placeholder="Thêm nhận xét quán"
              autoSize={{ minRows: 4, maxRows: 6 }}
            />
          </Form.Item>
        </div>
        <Button
          text={
            <div className="text-[15px] font-medium text-white">
              Gửi đánh giá
            </div>
          }
          className="absolute inset-x-[16px] bottom-[40px] flex h-[44px] items-center justify-center rounded-[40px] bg-primary5"
          onClick={form.submit}
        />
      </Form>
    );
  }

  return (
    <Form
      form={form}
      className="relative h-full px-[16px]"
      onFinish={onFormFinish}
    >
      <div className="flex flex-col items-center gap-[24px] pt-[200px]">
        {/* Rating input */}
        <div className="flex flex-col items-center gap-[24px]">
          <RatingInput
            value={ratingValue}
            onChange={(value) => {
              setRatingValue(value);
            }}
          />
          <div className="text-center text-xl font-medium">
            Chia sẻ cảm nhận, giúp cửa hàng cải thiện mỗi ngày
          </div>
        </div>
        {/* Tags */}
        <Tags
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          tags={tagsPositive}
        />
        {/* Notes */}
        <Form.Item name="extra-notes" noStyle>
          <Input.TextArea
            placeholder="Thêm nhận xét quán"
            autoSize={{ minRows: 4, maxRows: 6 }}
          />
        </Form.Item>
      </div>
      <Button
        text={
          <div className="text-[15px] font-medium text-white">Gửi đánh giá</div>
        }
        className="absolute inset-x-[16px] bottom-[40px] flex h-[44px] items-center justify-center rounded-[40px] bg-primary5"
        onClick={form.submit}
      />
    </Form>
  );
};

export { RatingForm };

type Props = {
  ratingValue?: number;
  setRatingValue: (value: number) => void;
  setStep?: (value: number) => void;
};

const tagsNegative = [
  { label: "Dịch vụ không tốt" },
  { label: "Nhân viên không tốt" },
  { label: "Đồ ăn dở" },
  { label: "Không gian tệ" },
  { label: "Nước dở" },
];

const tagsPositive = [
  { label: "Dịch vụ tốt" },
  { label: "Nhân viên nhiệt tình" },
  { label: "Chất lượng tốt" },
  { label: "Cơ sở vật chất tốt" },
];
