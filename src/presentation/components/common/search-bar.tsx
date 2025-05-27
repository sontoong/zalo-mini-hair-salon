import { AutoComplete, AutoCompleteProps, ConfigProvider, Input } from "antd";
import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import SearchIcon from "../../static/search-icon.png";

export interface SearchBarRef {
  dropdownHeight: number | null;
  measureDropdownHeight: () => void;
}

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  extraMenuRender?: React.ReactNode;
  onDropdownHeightChange?: (height: number | null) => void;
  pollingInterval?: number;
} & AutoCompleteProps;

export const SearchBar = forwardRef<SearchBarRef, SearchBarProps>(
  (
    {
      placeholder,
      className,
      options,
      extraMenuRender,
      onDropdownHeightChange,
      pollingInterval = 100,
      value = "",
      ...props
    },
    ref,
  ) => {
    const [dropdownHeight, setDropdownHeight] = useState<number | null>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [optionSelected, setOptionSelected] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<any>(null);
    const lastHeightRef = useRef<number | null>(null);

    const measureDropdownHeight = () => {
      if (optionSelected) {
        lastHeightRef.current = 0;
        setDropdownHeight(0);

        if (onDropdownHeightChange) {
          onDropdownHeightChange(0);
        }
        return;
      }

      if (!value.trim() && !isDropdownVisible) {
        lastHeightRef.current = null;
        setDropdownHeight(null);

        if (onDropdownHeightChange) {
          onDropdownHeightChange(null);
        }
        return;
      }

      const dropdownElement = document.querySelector(".ant-select-dropdown");

      if (dropdownElement) {
        const hasContent =
          dropdownElement.querySelector(".ant-select-item") !== null;
        const isEmpty = dropdownElement.classList.contains(
          "ant-select-dropdown-empty",
        );

        if (hasContent && !isEmpty) {
          const height = dropdownElement.getBoundingClientRect().height;

          if (height !== lastHeightRef.current) {
            lastHeightRef.current = height;
            setDropdownHeight(height);

            if (onDropdownHeightChange) {
              onDropdownHeightChange(height);
            }
          }
        } else {
          if (lastHeightRef.current !== 0) {
            lastHeightRef.current = 0;
            setDropdownHeight(0);

            if (onDropdownHeightChange) {
              onDropdownHeightChange(0);
            }
          }
        }
      } else if (!isDropdownVisible) {
        if (lastHeightRef.current !== 0) {
          lastHeightRef.current = 0;
          setDropdownHeight(0);

          if (onDropdownHeightChange) {
            onDropdownHeightChange(0);
          }
        }
      }
    };

    useImperativeHandle(ref, () => ({
      dropdownHeight,
      measureDropdownHeight,
    }));

    useEffect(() => {
      if (optionSelected) {
        const timer = setTimeout(() => {
          setOptionSelected(false);
        }, 200);
        return () => clearTimeout(timer);
      }
    }, [optionSelected]);

    useEffect(() => {
      if (!value?.trim() && !isDropdownVisible) {
        lastHeightRef.current = null;
        setDropdownHeight(null);

        if (onDropdownHeightChange) {
          onDropdownHeightChange(null);
        }
      } else if (!optionSelected) {
        setTimeout(measureDropdownHeight, 50);
      }
    }, [value]);

    useEffect(() => {
      if (!isDropdownVisible) {
        if (value.trim() && !optionSelected) {
          lastHeightRef.current = 0;
          setDropdownHeight(0);

          if (onDropdownHeightChange) {
            onDropdownHeightChange(0);
          }
        }
      }

      if (isDropdownVisible && value.trim() && !optionSelected) {
        measureDropdownHeight();

        intervalRef.current = setInterval(
          measureDropdownHeight,
          pollingInterval,
        );
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        if (!value.trim()) {
          lastHeightRef.current = null;
          setDropdownHeight(null);

          if (onDropdownHeightChange) {
            onDropdownHeightChange(null);
          }
        } else if (lastHeightRef.current !== 0 && !optionSelected) {
          lastHeightRef.current = 0;
          setDropdownHeight(0);

          if (onDropdownHeightChange) {
            onDropdownHeightChange(0);
          }
        }
      }

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }, [isDropdownVisible, pollingInterval, value, optionSelected]);

    useEffect(() => {
      const inputElement = document.querySelector(
        ".ant-select-selection-search-input",
      );
      const inputObserver = new MutationObserver(() => {
        if (!optionSelected) {
          measureDropdownHeight();
        }
      });

      if (inputElement && isDropdownVisible) {
        inputObserver.observe(inputElement, {
          attributes: true,
          childList: true,
          characterData: true,
        });
      }
      return () => {
        inputObserver.disconnect();
      };
    }, [isDropdownVisible, optionSelected]);

    return (
      <ConfigProvider theme={{ components: { Select: { zIndexPopup: 0 } } }}>
        <AutoComplete
          optionRender={(option) => (
            <div className="py-[3px]">
              <div className="text-sm font-normal">{option.label}</div>
            </div>
          )}
          getPopupContainer={(trigger) => trigger.parentNode}
          popupRender={(menus) => (
            <div ref={dropdownRef} className="px-1 pb-[12px]">
              <div className="mb-[20px] flex flex-col gap-[8px] pl-3">
                <div className="text-[15px] font-medium text-gray8">Gợi ý</div>
                {extraMenuRender}
              </div>
              {menus}
            </div>
          )}
          styles={{
            popup: {
              root: {
                width: "100vw",
                left: 0,
                top: "100%",
                borderRadius: 0,
                padding: "12px 0 0 0",
                boxShadow: "none",
              },
            },
          }}
          filterOption={(inputValue, option) => {
            if (typeof option?.value === "string") {
              return (
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              );
            }
            return (
              String(option?.value || "")
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            );
          }}
          className="customSelect flex size-full justify-center"
          options={options}
          onOpenChange={(visible) => {
            if (!visible && isDropdownVisible) {
              lastHeightRef.current = 0;
              setDropdownHeight(0);
              if (onDropdownHeightChange) {
                onDropdownHeightChange(0);
              }
            }
            setIsDropdownVisible(visible);
          }}
          onSelect={(value) => {
            setOptionSelected(true);
            lastHeightRef.current = 0;
            setDropdownHeight(0);

            if (onDropdownHeightChange) {
              onDropdownHeightChange(0);
            }
          }}
          {...props}
        >
          <Input
            placeholder={placeholder}
            prefix={<img src={SearchIcon} className="size-[16px]" />}
            className={`z-10 text-sm font-normal !ring-0 ${className}`}
          />
        </AutoComplete>
      </ConfigProvider>
    );
  },
);
