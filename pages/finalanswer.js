import Image from "next/image";
import React from "react";
import H2 from "../components/headings/H2";
import PageHero from "../components/hero/PageHero";
import Navbar from "../components/navbar/Navbar";
import ProjectDescriber from "../components/section/ProjectDescriber";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function finalAnswer() {
  return (
    <div>
      <Navbar />
      <PageHero text="finalAnswer" />
      <SpaceFiller />

      <ProjectDescriber
        leftDisplay={
          <Image
            src="/images/finalanswer_logo.jpeg"
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
              finalAnswer
            </h2>
            <ul className="font-poppins text-xl list-disc pl-10 leading-relaxed">
              <li className="list-item mb-3">
                A ReactJS web application to show automated, custom solutions to
                students&apos; questions with user-fillable input fields
              </li>
              <li className="list-item mb-3">Designed with Bootstrap 4</li>
              <li className="list-item mb-3">
                Uses the MathJax library to show mathematical equations in the
                solutions
              </li>
            </ul>
          </div>
        }
      />

      <SpaceFiller />
      <div className="container mx-auto">
        <div className="flex flex-row justify-center items-center">
          <H2>Demo</H2>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="w-11/12 h-[80vh] self-stretch bg-dark-800 p-4 rounded-2xl shadow-xl">
            <iframe
              src="https://finalanswer.web.app/"
              className="h-full w-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
      <SpaceFiller />
    </div>
  );
}
