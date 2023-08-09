import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { notifications } from "../../constants/nav";

const NotiSidebar = ({toggleNoti}) => {
  
  return (
    <div className=" w-full">
      <div className="flex justify-between items-center px-5 border-b py-7 font-bold text-lg bg-white sticky top-0">
        <h2>Notifications</h2>
        <div className="flex gap-4">
          <BiDotsHorizontalRounded className="cursor-pointer"/>
          <CgClose onClick={toggleNoti} className="cursor-pointer"/>
        </div>
      </div>

      {notifications.map((i) => {
        return (
          <div
            key={i.id}
            className="px-5 border-t items-center cursor-pointer hover:bg-[#E5F8F9]"
          >
            <div className="flex items-center py-2 justify-between w-full">
              <div className="flex items-center gap-3">
                {i.user_image === null ? (
                  <p className="text-sm font-bold text-white bg-lime-300 w-9 h-9 rounded-full flex items-center justify-center">
                    {i.name[0].toLocaleUpperCase()}
                  </p>
                ) : (
                  <img className="w-9 h-9 rounded-full" src={i.user_image} />
                )}
                <p className="text-sm font-bold  text-[#172B40]">{i.name}</p>
              </div>
              <p className="text-sm  text-[#7E8790]">{i.duration}</p>
            </div>
            <div className="ml-12 -mt-2">
              <h2 className="text-sm">{i.title}</h2>
              <p className="text-[#7E8790] text-sm py-2">{i.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NotiSidebar;
