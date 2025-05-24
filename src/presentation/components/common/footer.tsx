import React from "react";
import TransitionLink from "./transition-link";
import HomeIcon from "../../static/home-icon.png";
import HomeOutlineIcon from "../../static/home-outline-icon.png";
import CalendarIcon from "../../static/calendar-icon.png";
import ShoppingBagIcon from "../../static/shopping-bag-icon.png";
import ShoppingBagOutlineIcon from "../../static/shopping-bag-outline-icon.png";
import UserIcon from "../../static/user-icon.png";
import UserOutlineIcon from "../../static/user-outline-icon.png";
import ChatBubbleIcon from "../../static/chat-bubble-icon.png";

const NAV_ITEMS = [
  {
    name: "Trang chủ",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <img src={HomeIcon} className="size-[20px]" />
      ) : (
        <img src={HomeOutlineIcon} className="size-[20px]" />
      ),
  },
  {
    name: "Đơn hàng",
    path: "/orders",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <img src={ShoppingBagIcon} className="size-[20px]" />
      ) : (
        <img src={ShoppingBagOutlineIcon} className="size-[20px]" />
      ),
  },
  {
    name: "Đặt lịch",
    path: "/schedule",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <img src={CalendarIcon} className="size-[20px]" />
      ) : (
        <img src={CalendarIcon} className="size-[20px]" />
      ),
  },
  {
    name: "Chat",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <img src={ChatBubbleIcon} className="size-[20px]" />
      ) : (
        <img src={ChatBubbleIcon} className="size-[20px]" />
      ),
  },
  {
    name: "Cá nhân",
    path: "/profile",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <img src={UserIcon} className="size-[20px]" />
      ) : (
        <img src={UserOutlineIcon} className="size-[20px]" />
      ),
  },
];

function Footer() {
  return (
    <div
      className="p w-ful grid rounded-t-[12px] bg-[#00BFFF] pt-2"
      style={{
        gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        paddingBottom: `max(16px, env(safe-area-inset-bottom)`,
      }}
    >
      {NAV_ITEMS.map((item, key) => {
        return (
          <TransitionLink
            to={item.path}
            key={key}
            className="flex cursor-pointer flex-col items-center space-y-0.5 p-1 pb-0.5"
          >
            {({ isActive }) => (
              <>
                <div className="flex h-6 w-6 items-center justify-center">
                  <item.icon active={isActive} />
                </div>
                <div
                  className={`text-2xs text-white ${isActive ? "text-primary" : ""}`}
                >
                  {item.name}
                </div>
              </>
            )}
          </TransitionLink>
        );
      })}
    </div>
  );
}

export { Footer };
