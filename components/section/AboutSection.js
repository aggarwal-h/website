import Link from "next/link";
import React from "react";
import ProjectDescriber from "./ProjectDescriber";

export default function AboutSection() {
  return (
    <ProjectDescriber
      leftDisplay={
        <video
          className="w-full relative z-10 flex rounded-4xl"
          autoPlay
          loop
          muted
        >
          <source
            src="/videos/himanshu_video.mp4"
            type="video/mp4"
            alt="Himanshu Aggarwal showcasing Integrated Door Lock at McMaster University's Engineering IMPACT Showcase of 2018"
          />
        </video>
      }
      rightDisplay={
        <div className="xl:pl-20 lg:pl-10 font-poppins">
          <h2 className="mb-6 font-poppins font-bold text-5xl">About Me</h2>
          <p className="text-xl leading-relaxed">
            I am currently enrolled in level 3 of the 4-year Software
            Engineering Co-op program at McMaster University. I have developed
            strong skills in Python, Java, C, JavaScript, TypeScript, HTML, CSS,
            Angular, ReactJS, VueJS, Spring Boot and Django through
            participation in various projects. I have achieved excellent time
            management and teamwork skills through participation in hackathons
            and have showcased exceptional analytical and problem solving skills
            through course work.
          </p>
          <div className="text-white w-[190px] text-base tracking-wide px-4 py-3 mt-5 font-normal hover:font-semibold rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-150 hover:shadow-2xl">
            <Link href="/assets/resume.pdf" passHref>
              <a target="_blank" rel="noreferrer" download>
                Download Resume
              </a>
            </Link>
          </div>
        </div>
      }
    />
  );
}
