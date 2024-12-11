import React from "react";
import { AvatarDemo } from "./avatar";

export default function GlassNavbar() {
  return (
    <div className="fixed flex justify-center top-0 left-0 right-0 z-50">
      <nav
        className="w-[68%] pr-[-3px] bg-slate-800/30 backdrop-blur-md py-1 shadow-lg border-b border-accent/50 rounded-[35px] mt-7"
        style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
      >
        <div className="container mx-auto pl-4 pr-3 sm:pl-6 lg:pl-5 lg:pr-3">
          <div className="flex items-center justify-between h-14">
            <div className="flex-shrink-0 flex flex-row">
                <img
                src="finance.svg"
                alt="Finance Icon"
                width="40"
                height="40"
                />
              <span className="text-2xl ml-2 self-center font-bold text-gray-200">
                Finboard
              </span>
            </div>
            <div>
              <AvatarDemo />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
