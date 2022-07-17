import Image from "next/image";
import React from "react";
import PageHero from "../components/hero/PageHero";
import Navbar from "../components/navbar/Navbar";
import ProjectDescriber from "../components/section/ProjectDescriber";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function aslx() {
  return (
    <div>
      <Navbar />
      <PageHero text="aslX" />
      <SpaceFiller />

      <ProjectDescriber
        leftDisplay={
          <Image
            src="/images/aslx_logo.jpg"
            className="rounded-6xl shadow"
            width="100%"
            height="100%"
            layout="responsive"
            alt="Logo for aslX"
            unoptimized
          />
        }
        rightDisplay={
          <div>
            <h2 className="mb-6 font-poppins font-bold text-5xl">
              aslX: ASL over video calls
            </h2>
            <ul className="font-poppins text-xl list-disc pl-10 leading-relaxed">
              <li className="list-item mb-3">
                aslX uses MediaPipe&apos;s Hands API to detect ASL and produces
                subtitles over video calls.
              </li>
              <li className="list-item mb-3">
                <b>How it works:</b> MediaPipe&apos;s Hands API provides precise
                keypoint localization of 21 3D hand-knuckle coordinates. These
                coordinates are then matched against pre-defined ASL words&apos;
                coordinates to find similarities.
              </li>
            </ul>
          </div>
        }
      />

      <SpaceFiller />

    </div>
  );
}
