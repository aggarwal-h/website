import Image from "next/image";
import React from "react";
import H2 from "../components/headings/H2";
import PageHero from "../components/hero/PageHero";
import Navbar from "../components/navbar/Navbar";
import ProjectDescriber from "../components/section/ProjectDescriber";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function doorlock() {
  return (
    <div>
      <Navbar />
      <PageHero text="Integrated Door Lock" />
      <SpaceFiller />

      <ProjectDescriber
        leftDisplay={
          <Image
            src="/images/doorlock_logo.jpeg"
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
              Integrated Door Lock
            </h2>
            <ul className="font-poppins text-xl list-disc pl-10 leading-relaxed">
              <li className="list-item mb-3">
                Integrated Door Lock System is a system that helps the
                differently abled in unlocking and locking their apartment
                doors.
              </li>
              <li className="list-item mb-3">
                The system has a device that sits behind the door of the
                apartment and waits for a signal to unlock or lock the door.
                Once a command is received, the device pushes or pulls the door
                knob.
              </li>
              <li className="list-item mb-3">
                The system also contains another portable device containing a
                fingerprint sensor that can send commands to the module behind
                the door.
              </li>
              <li className="list-item mb-3">
                A dedicated app with FaceID/TouchID integration can also be used
                to lock or unlock the door. Or simply saying &quot;Ok Google, Unlock
                the Door&quot; or &quot;Ok Google, Lock the Door&quot; does the job.
              </li>
            </ul>
          </div>
        }
      />
      <SpaceFiller />
    </div>
  );
}
