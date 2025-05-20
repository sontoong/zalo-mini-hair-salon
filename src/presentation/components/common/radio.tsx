import React from "react";
import {
  Radio as OriginRadio,
  RadioGroupProps as OriginRadioGroupProps,
} from "antd";

type RecordType = {
  value: any;
  [key: string]: any;
};

function Radio() {}

function RadioGroup({
  render,
  divider,
  items,
  className,
  ...props
}: RadioGroupProps<RecordType>) {
  return (
    <OriginRadio.Group className={`custom-radio ${className}`} {...props}>
      {items?.map((item, index) => (
        <React.Fragment key={index}>
          <OriginRadio value={item.value}>{render(item)}</OriginRadio>
          {index < items.length - 1 && divider}
        </React.Fragment>
      ))}
    </OriginRadio.Group>
  );
}

function RadioButtonGroup({
  activeRender,
  items,
  render,
  direction = "row",
  className,
  ...rest
}: RadioButtonGroupProps<RecordType>) {
  const handleClick = (value: number) => {
    if (rest.onChange) {
      rest.onChange(value);
    }
  };

  if (Array.isArray(items)) {
    if (items.length === 0) {
      return <></>;
    }
    return (
      <div className={className} style={{ flexDirection: direction }}>
        {items.map((item, index) => (
          <div
            className="flex-1 cursor-pointer"
            onClick={() => handleClick(item.value)}
            key={index}
          >
            {rest.value === item.value ? activeRender(item) : render(item)}
          </div>
        ))}
      </div>
    );
  }
  return null;
}

Radio.Group = RadioGroup;
Radio.ButtonGroup = RadioButtonGroup;

export { Radio };

type RadioGroupProps<RecordType> = {
  items: RecordType[];
  render: (item?: RecordType) => React.ReactNode;
  divider?: React.ReactNode;
} & OriginRadioGroupProps;

type RadioButtonGroupProps<RecordType> = {
  defaultActiveIndex?: number; //starts at 0
  items: RecordType[]; //an array of object ([{name: "abc"}, {name: "abcd"}])
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  render: (item?: RecordType) => React.ReactNode; //specify how to render, eg: render={(item) => <div>{item?.name}</div>}
  activeRender: (item?: RecordType) => React.ReactNode; //specify how to render when focused, eg: activeRender={(item) => (<div className="text-primary">{item?.name}</div>)}
  value?: any;
  onChange?: (value: any) => void;
  className?: string;
};
