import React, { FC } from "react";
import { Radio } from "../common/radio";
import { Form } from "../common/form";
import { FormInstance, Input } from "antd";

const ServiceList: FC<Props> = ({ form }) => {
  return (
    <Form name="serviceForm" form={form} className="flex flex-col gap-[14px]">
      <div className="text-lg font-medium">Chọn dịch vụ cần tư vấn</div>
      <div className="flex flex-col gap-[12px]">
        <Form.Item name="service" noStyle>
          <Radio.ButtonGroup
            items={data}
            render={(service) => (
              <div className="flex h-[41px] items-center justify-center rounded-[8px] border border-stroke3 px-[12px]">
                <div className="text-[15px] font-normal">{service?.label}</div>
              </div>
            )}
            activeRender={(service) => (
              <div className="flex h-[41px] items-center justify-center rounded-[8px] border border-primary6 bg-primary1 px-[12px]">
                <div className="text-[15px] font-normal text-primary6">
                  {service?.label}
                </div>
              </div>
            )}
            className="grid grid-cols-2 gap-[12px]"
          />
        </Form.Item>
        <Form.Item name="other-service" noStyle>
          <Input
            className="h-[41px] rounded-[8px] border-stroke3 px-[20px] text-[15px] font-normal"
            placeholder="Nhập dịch vụ khác"
          />
        </Form.Item>
      </div>
    </Form>
  );
};

export { ServiceList };

type Props = {
  form: FormInstance;
};

const data = [
  { label: "Làm tóc", value: 1 },
  { label: "Làm móng", value: 2 },
  { label: "Massage", value: 3 },
  { label: "Nặn mụn", value: 4 },
  { label: "Hấp tóc", value: 5 },
  { label: "Xông tinh dầu", value: 6 },
];
