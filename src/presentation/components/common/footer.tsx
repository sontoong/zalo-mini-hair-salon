import React from "react";
import TransitionLink from "./transition-link";
import HomeIcon from "../../static/home-icon.png";
import CalendarIcon from "../../static/calendar-icon.png";
import LocationIcon from "../../static/location-icon.png";
import UserIcon from "../../static/user-icon.png";

const NAV_ITEMS = [
  {
    name: "Trang chủ",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? <img src={HomeIcon} /> : <img src={HomeIcon} />,
  },
  {
    name: "Đặt lịch",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? <img src={CalendarIcon} /> : <img src={CalendarIcon} />,
  },
  {
    name: "Địa điểm",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? <img src={LocationIcon} /> : <img src={LocationIcon} />,
  },
  {
    name: "Cá nhân",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? <img src={UserIcon} /> : <img src={UserIcon} />,
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
