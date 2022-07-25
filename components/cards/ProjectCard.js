import Image from "next/image";
import Link from "next/link";
import React from "react";
import H3 from "../headings/H3";

export default function ProjectCard({ title, image, imageAltText, href }) {
  return (
    <div className="hover:scale-[104%] cursor-pointer text-center transition-all duration-100 rounded-4xl shadow-xl bg-gray-50 dark:bg-dark-800">
      <Link href={href}>
        <a>
          <div className="p-5 flex flex-col h-full">
            <div className="mb-4">
              <H3>{title}</H3>
            </div>
            <div className="mt-auto">
              <Image
                src={image}
                className="rounded-[40%] mx-4"
                alt={imageAltText}
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
