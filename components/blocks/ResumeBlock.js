import React from "react";
import H3 from "../headings/H3";

export default function ResumeBlock({
  icon,
  dates,
  heading,
  subheading,
  children,
}) {
  return (
    <div className="flex border-b-1 border-gray-700 mb-7 w-full pb-5">
      <div className="w-12 h-12 bg-indigo-600 rounded-full items-center justify-center">
        {icon}
      </div>
      <div className="w-[calc(100%-3rem)] pl-5">
        <span className="font-bold text-base text-indigo-500">
          {dates
            .map((date) => {
              return date.join(" - ");
            })
            .join(", ")}
        </span>
        <H3>{heading}</H3>
        <p className="font-poppins text-lg font-bold dark:text-white text-black mb-3">
          {subheading}
        </p>
        {children}
      </div>
    </div>
  );
}
