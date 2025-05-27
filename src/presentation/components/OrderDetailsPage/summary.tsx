import { Divider } from "antd";
import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import NoteTextIcon from "../../static/note-text.png";
import EditIcon from "../../static/edit-icon.png";

export const Summary = () => {
  return (
    <div className="flex flex-col gap-[8px] px-[16px]">
      <div className="text-[15px] font-medium">Danh sách dịch vụ</div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[12px]">
          {data.map((service, index) => (
            <React.Fragment key={index}>
              <SummaryItem service={service} />
              {index < data.length - 1 && <Divider className="m-0" />}
            </React.Fragment>
          ))}
        </div>
        <Divider className="m-0" variant="dashed" />
        <div className="flex flex-col gap-[4px]">
          <div className="flex justify-between">
            <div className="text-[15px] font-normal">Tổng tiền</div>
            <div className="text-[15px] font-medium">
              {formatCurrency(320000)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-normal text-gray8">Giảm giá</div>
            <div className="text-sm font-normal text-gray8">
              -{formatCurrency(70000)}
            </div>
          </div>
        </div>
        <Divider className="m-0" variant="dashed" />
        <div className="flex justify-between">
          <div className="text-[15px] font-normal">Tổng thanh toán</div>
          <div className="text-[15px] font-medium">
            {formatCurrency(250000)}
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryItem: FC<{ service: any }> = ({ service }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between">
        {/* Title */}
        <div className="flex items-center gap-[12px]">
          <div className="text-sm font-normal text-gray8">
            x{service.quantity}
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="text-sm font-medium">{service.title}</div>
            <div className="text-xs font-normal text-gray8">
              {service.product}
            </div>
          </div>
        </div>
        {/* Edit */}
        <div className="flex flex-col items-end justify-between">
          <div className="size-[20px]">
            <img src={EditIcon} alt="" className="size-full object-cover" />
          </div>
          <div className="text-sm font-normal">
            {formatCurrency(service.price)}
          </div>
        </div>
      </div>
      <Divider className="m-0" />
      {/* Notes */}
      <div className="flex items-center gap-[4px]">
        <div className="size-[20px] shrink-0">
          <img src={NoteTextIcon} alt="" className="size-full object-cover" />
        </div>
        <div className="truncate text-xs font-normal">
          <span className="text-gray8">Ghi chú: </span>
          <span className="text-gray7">{service.notes}</span>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Uốn tóc",
    product: "Dầu gội Pantin, Loại 1",
    price: 125000,
    quantity: 1,
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Nhuộm tóc",
    product: "Dầu gội Pantin, Loại 1",
    price: 250000,
    quantity: 2,
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
