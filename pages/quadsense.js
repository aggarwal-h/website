import Image from "next/image";
import React from "react";
import H2 from "../components/headings/H2";
import PageHero from "../components/hero/PageHero";
import Navbar from "../components/navbar/Navbar";
import ProjectDescriber from "../components/section/ProjectDescriber";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function quadsense() {
  return (
    <div>
      <Navbar />
      <PageHero text="QuadSense" />
      <SpaceFiller />

      <ProjectDescriber
        leftDisplay={
          <Image
            src="/images/quadsense_logo.jpeg"
            className="rounded-4xl shadow"
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
              QuadSense: An Autonomous Auxiliary Navigation Assistant
            </h2>
            <ul className="font-poppins text-xl list-disc pl-10 leading-relaxed">
              <li className="list-item mb-3">
                QuadSense is a navigation assistant designed to make driving in
                older vehicles a more safer and convenient experience. It allows
                for the driver of older vehicles to get alerted if they are
                changing lanes while a car is in the blind spot.
              </li>
              <li className="list-item mb-3">
                It is split into three different modules: Two of these modules
                are attached on the outside of the car (one on each side view
                mirrors). The other module is the &quot;brain&quot;, which sits
                inside the car on the steering wheel.
              </li>
              <li className="list-item mb-3">
                The &quot;brain&quot; contains a gyroscope which senses the
                direction of the steering wheel. The outer modules contain
                ultrasonic sensors which measure the distance of the vehicles in
                the blind spot and send this data to the &quot;brain&quot; using
                bluetooth. If the driver attempts to turn the wheel in the
                direction of a vehicle that is in the blind spot, the
                &quot;brain&quot; produces a warning alarm alerting the driver
                immediately.
              </li>
            </ul>
          </div>
        }
      />
      <SpaceFiller />
    </div>
  );
}
