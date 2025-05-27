import React, { useEffect, useState } from "react";
import { Button } from "../common/button";
import SearchIcon from "../../static/search-icon-blue.png";
import ChevronLeftIcon from "../../static/chevron-left.png";
import { Select } from "../common/select";
import { Input } from "antd";
import { Header as HeaderZMP } from "zmp-ui";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollTop = event.target.scrollTop;
      setScrollY(scrollTop);
    };

    const scrollContainer = document.querySelector(
      ".homepage-scroll-container",
    );

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.log("Scroll container not found");
      return;
    }
  }, []);

  const opacity = Math.min(scrollY / 100, 1);

  return (
    <HeaderZMP
      title={
        (
          <div className="relative pt-[34px]">
            <div className="pb-[8px] text-xl font-medium">Salon tóc Kiki</div>
            <SearchSection />
          </div>
        ) as unknown as string
      }
      className="topbar no-border !fixed !z-30 h-auto flex-none !pb-0 pl-4"
      showBackIcon={false}
      style={{ boxShadow: "0px 2px 12px 0px #0000000F", opacity: opacity }}
    />
  );
};

const SearchSection = () => {
  const [textSearch, setTextSearch] = useState<boolean>(false);

  if (textSearch === true) {
    return (
      <div className="flex items-center gap-[12px] py-[8px]">
        <div className="size-[24px]" onClick={() => setTextSearch(false)}>
          <img
            src={ChevronLeftIcon}
            alt=""
            className="size-full object-cover"
          />
        </div>
        <Input
          prefix={<img src={SearchIcon} className="pr-3" />}
          placeholder="Làm tóc"
          className="h-[32px] rounded-[20px] text-xs font-normal"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-[12px] py-[8px]">
      <Select
        options={options}
        className="customSelect flex-1 overflow-hidden rounded-[20px] border border-stroke3"
        defaultValue={"1"}
      />
      <Button
        text={
          <div className="flex items-center gap-[10px]">
            <div className="size-[16px]">
              <img src={SearchIcon} alt="" className="size-full object-cover" />
            </div>
            <div className="text-xs font-normal text-gray8">Tìm</div>
          </div>
        }
        className="border-stroke1a flex-none rounded-[20px] border px-[12px] py-[6px]"
        style={{ boxShadow: "0px 0.78px 4.67px 0px #0C59730F" }}
        onClick={() => setTextSearch(true)}
      />
    </div>
  );
};

export default Header;

const options = [
  { value: "1", label: "Làm tóc" },
  { value: "2", label: "Lucy" },
  { value: "3", label: "yiminghe" },
];
