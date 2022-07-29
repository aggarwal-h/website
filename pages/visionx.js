import Image from "next/image";
import React from "react";
import H2 from "../components/headings/H2";
import PageHero from "../components/hero/PageHero";
import Navbar from "../components/navbar/Navbar";
import ProjectDescriber from "../components/section/ProjectDescriber";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function visionx() {
  return (
    <div>
      <Navbar />
      <PageHero text="VisionX" />
      <SpaceFiller />

      <ProjectDescriber
        leftDisplay={
          <Image
            src="/images/visionx_logo.jpeg"
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
            <h2 className="mb-6 font-poppins font-bold text-5xl">VisionX</h2>
            <ul className="font-poppins text-xl list-disc pl-10 leading-relaxed">
              <li className="list-item mb-3">
                VisionX is a device that can help the visually impaired in their
                daily life. It can be worn same as a VR headset and incorporates
                a Raspberry Pi 3, an infrared night vision camera, a set of
                ultrasonic sensors, a GPS module, and a pair of bone conducting
                headphones.
              </li>
              <li className="list-item mb-3">
                It is based on the TensorFlow framework and currently uses
                Google&apos;s pre-trained model which is able to recognize many
                everyday objects.
              </li>
              <li className="list-item mb-3">
                It incorporates Google Assistant which allows for the user to do
                many tasks, one of which is to make a grocery list.
              </li>
              <li className="list-item mb-3">
                It consists of a grocery mode which actively scans for items in
                the grocery list and looks for them using the camera.
              </li>
              <li className="list-item mb-3">
                The ultrasonic sensors are used to detect close objects in the
                user&apos;s path for help with navigation around rough terrain.
              </li>
            </ul>
          </div>
        }
      />
      <SpaceFiller />
    </div>
  );
}
