import React, { FC } from "react";
import { ConfigProvider, Select as OriginalSelect, SelectProps } from "antd";
import ChevronDown from "../../static/chevron-down.png";

const Select: FC<Props> = ({ fontSize = 14, optionFontSize = 14, ...rest }) => {
  return (
    <ConfigProvider
      theme={{
        token: { fontSize: fontSize },
        components: { Select: { optionFontSize: optionFontSize } },
      }}
    >
      <OriginalSelect
        suffixIcon={<img src={ChevronDown} className="size-[14px]" />}
        {...rest}
      />
    </ConfigProvider>
  );
};

export { Select };

type Props = {
  fontSize?: number;
  optionFontSize?: number;
} & SelectProps;
