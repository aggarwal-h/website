import Image from "next/image";
import React from "react";
import PageHero from "../components/hero/PageHero";
import Navbar from "../components/navbar/Navbar";
import ProjectDescriber from "../components/section/ProjectDescriber";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function autoenroll() {
  return (
    <div>
      <Navbar />
      <PageHero text="AutoEnroll For McMaster University" />
      <SpaceFiller />

      <ProjectDescriber
        leftDisplay={<iframe src="/assets/autoenroll_extension.html" frameBorder="0" className="h-[609px] rounded-6xl"></iframe>}
        rightDisplay={
          <div>
            <h2 className="mb-6 font-poppins font-bold text-5xl">
              AutoEnroll For McMaster University
            </h2>
            <ul className="font-poppins text-xl list-disc pl-10 leading-relaxed">
              <li className="list-item mb-3">
                AutoEnroll for McMaster University is a Chrome Extension that
                allows students to quickly enroll into their preferred courses.
              </li>
              <li className="list-item mb-3">
                It was developed using HTML, CSS, and JavaScript and contains
                features like email notifications for when a specific course
                becomes open, automatic enrollment into the courses that are
                already in the shopping cart and automatic swapping of 2
                courses.
              </li>
              <li className="list-item mb-3">
                The extension also allows for the user credentials to be
                automatically encrypted and saved to the computer for automatic
                login into the Student Center on Mosaic.
              </li>
            </ul>
          </div>
        }
      />

      <SpaceFiller />
    </div>
  );
}
