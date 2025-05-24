import {
  Calendar as OriginCalendar,
  FormInstance,
  Row,
  Col,
  Radio,
  Select,
} from "antd";
import React, { FC } from "react";
import { Form } from "../common/form";
import dayjs from "dayjs";
import dayLocaleData from "dayjs/plugin/localeData";

dayjs.extend(dayLocaleData);

const Calendar: FC<Props> = ({ form }) => {
  return (
    <Form form={form} className="flex flex-col gap-[14px]">
      <div className="text-lg font-medium">Chọn lịch hẹn</div>
      <Form.Item name="time" noStyle>
        <OriginCalendar
          fullscreen={false}
          headerRender={({ value, onChange }) => {
            const start = 0;
            const end = 12;
            const monthOptions = [];

            let current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
              current = current.month(i);
              months.push(localeData.monthsShort(current));
            }

            for (let i = start; i < end; i++) {
              monthOptions.push(
                <Select.Option key={i} value={i} className="month-item">
                  {months[i]}
                </Select.Option>,
              );
            }

            const year = value.year();
            const month = value.month();
            const options = [];
            for (let i = year - 10; i < year + 10; i += 1) {
              options.push(
                <Select.Option key={i} value={i} className="year-item">
                  {i}
                </Select.Option>,
              );
            }
            return (
              <div className="flex flex-col gap-[20px]">
                <Row gutter={8}>
                  <Col>
                    <Select
                      size="small"
                      popupMatchSelectWidth={false}
                      className="my-year-select"
                      value={year}
                      onChange={(newYear) => {
                        const now = value.clone().year(newYear);
                        onChange(now);
                      }}
                    >
                      {options}
                    </Select>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      popupMatchSelectWidth={false}
                      value={month}
                      onChange={(newMonth) => {
                        const now = value.clone().month(newMonth);
                        onChange(now);
                      }}
                    >
                      {monthOptions}
                    </Select>
                  </Col>
                </Row>
                <div className="mb-[6px] text-[15px] font-medium">
                  Chọn khung giờ
                </div>
              </div>
            );
          }}
        />
      </Form.Item>
    </Form>
  );
};

export { Calendar };

type Props = {
  form: FormInstance;
};
