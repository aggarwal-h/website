import Image from "next/image";
import React from "react";
import H3 from "../headings/H3";

export default function ProjectCard({ title, image }) {
  return (
    <div className="w-full md:w-[47%] xl:w-[30.4%] hover:scale-[104%] cursor-pointer text-center transition-all duration-100">
      <a href="cryptometrics">
        <div className="bg-dark-800 p-5 rounded-4xl h-[360px] flex flex-col">
          <div className="mb-4">
            <H3>{title}</H3>
          </div>
          <div className="mt-auto">
            <Image
              src={image}
              className="rounded-[40%] mx-4"
              alt="Logo for CryptoMetrics Dashboard"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
        </div>
      </a>
    </div>
  );
}
