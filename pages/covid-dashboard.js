import Image from "next/image";
import React from "react";
import H2 from "../components/headings/H2";
import PageHero from "../components/hero/PageHero";
import Navbar from "../components/navbar/Navbar";
import ProjectDescriber from "../components/section/ProjectDescriber";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function CovidDashboard() {
  return (
    <div>
      <Navbar />
      <PageHero text="COVID-19 Dashboard" />
      <SpaceFiller />

      <ProjectDescriber
        leftDisplay={
          <Image
            src="/images/covid-dashboard_logo.jpeg"
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
              COVID-19 Dashboard
            </h2>
            <ul className="font-poppins text-xl list-disc pl-10 leading-relaxed">
              <li className="list-item mb-3">
                A NextJS + Prisma + PostgreSQL web app for visualizing COVID-19
                cases
              </li>
              <li className="list-item mb-3">Built with TailwindCSS</li>
              <li className="list-item mb-3">
                Uses Apache Echarts and ApexCharts to create beautiful
                visualizations
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
              src="https://covid-dashboard-ruby.vercel.app/"
              className="h-full w-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
      <SpaceFiller />
    </div>
  );
}
