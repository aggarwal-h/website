import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ResumeBlock from "../blocks/ResumeBlock";
import ProjectCard from "../cards/ProjectCard";
import H2 from "../headings/H2";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";

export default function ResumeSection() {
  const options = {
    threshold: 0.5,
  };
  const [
    educationSectionRef,
    educationSectionInViewport,
    educationSectionEntry,
  ] = useInView(options);
  const [
    experienceSectionRef,
    experienceSectionInViewport,
    experienceSectionEntry,
  ] = useInView(options);
  const [projectSectionRef, projectSectionInViewport, projectSectionEntry] =
    useInView(options);
  const [awardSectionRef, awardSectionInViewport, awardSectionEntry] =
    useInView(options);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (awardSectionInViewport) {
      setActiveSection("award-section");
    } else if (projectSectionInViewport) {
      setActiveSection("project-section");
    } else if (experienceSectionInViewport) {
      setActiveSection("experience-section");
    } else if (educationSectionInViewport) {
      setActiveSection("education-section");
    }
  }, [
    awardSectionInViewport,
    projectSectionInViewport,
    experienceSectionInViewport,
    educationSectionInViewport,
  ]);

  return (
    <section className="font-poppins" id="resume-section">
      <div className="container mx-auto w-9/12">
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="flex-grow-0 flex-shrink-0 basis-1/4 max-w-[25%] lg:block hidden">
            <nav className="m-0 top-[180px] sticky">
              <ul className="m-0 p-0">
                <StickyListItem
                  text="Education"
                  href="#education-section"
                  active={activeSection === "education-section"}
                />
                <StickyListItem
                  text="Work Experience"
                  href="#experience-section"
                  active={activeSection === "experience-section"}
                />
                <StickyListItem
                  text="Projects"
                  href="#projects-section"
                  active={activeSection === "project-section"}
                />
                <StickyListItem
                  text="Awards"
                  href="#awards-section"
                  active={activeSection === "award-section"}
                />
              </ul>
            </nav>
          </div>
          <div className="lg:flex-grow-0 lg:flex-shrink-0 lg:basis-3/4 lg:max-w-[75%]">
            <div
              id="education-section"
              className="mb-16"
              ref={educationSectionRef}
            >
              <H2>Education</H2>
              <ResumeBlock
                dates={[["Sep. 2018", "Present"]]}
                heading="Bachelor of Engineering, Software Engineering"
                subheading="McMaster University"
                icon={<FaGraduationCap color="white" size={"24px"} />}
              >
                <p className="dark:text-white text-black font-poppins">
                  Currently maintaining a high average in all my courses and
                  actively participating in software and electronic-based
                  projects.
                </p>
              </ResumeBlock>
            </div>

            <div
              id="experience-section"
              className="mb-16"
              ref={experienceSectionRef}
            >
              <H2>Work Experience</H2>
              <ResumeBlock
                dates={[["May. 2022", "Current"]]}
                heading="Full Stack Developer Co-op (4 months)"
                subheading="GBatteries"
                icon={<MdOutlineWork color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>Working with React to create data visualizations</li>
                  <li>Working with Python to power the backend</li>
                </ul>
              </ResumeBlock>
              <ResumeBlock
                dates={[["Jan. 2021", "Aug. 2021"]]}
                heading="Software Engineering Co-op (8 months)"
                subheading="Preteckt"
                icon={<MdOutlineWork color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>
                    Worked with React to develop powerful client-facing apps
                  </li>
                  <li>Worked with Django to power the backend</li>
                  <li>
                    Wrote SQL queries to fetch data from PostgreSQL and
                    TimescaleDB databases
                  </li>
                </ul>
              </ResumeBlock>
              <ResumeBlock
                dates={[["Aug. 2020", "Nov. 2020"]]}
                heading="Software Engineering Co-op (4 months)"
                subheading="Cooper Lighting Solutions"
                icon={<MdOutlineWork color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>
                    Used Robot Framework to test the frontend Angular
                    application
                  </li>
                  <li>
                    Used Postman requests to test the backend Spring Boot
                    application
                  </li>
                  <li>
                    Developed a database decryption tool using Angular and
                    Spring Boot
                  </li>
                </ul>
              </ResumeBlock>
              <ResumeBlock
                dates={[
                  ["Jul. 2018", "Aug. 2018"],
                  ["May 2019", "Jul. 2019"],
                ]}
                heading="Sales Associate"
                subheading="DGN Kilters"
                icon={<MdOutlineWork color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>
                    Assisted with sales administration by balancing daily
                    receipts
                  </li>
                  <li>
                    Demonstrated excellent communication skills while responding
                    to customers
                  </li>
                  <li>Helped maintain product inventory</li>
                </ul>
              </ResumeBlock>
            </div>

            <div
              id="projects-section"
              className="mb-16"
              ref={projectSectionRef}
            >
              <H2 className="heading">Projects</H2>
              <div className="flex justify-center">
                <div className="grid auto-rows-max lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-x-8 gap-x-5 gap-y-8 mt-3 mb-12">
                  <ProjectCard
                    title="CryptoMetrics"
                    image="/images/cryptometrics_logo.jpeg"
                    imageAltText="Logo for CryptoMetrics"
                    href="/cryptometrics"
                  />
                  <ProjectCard
                    title="COVID-19 Dashboard"
                    image="/images/covid-dashboard_logo.jpeg"
                    imageAltText="Logo for COVID-19 Dashboard"
                    href="/covid-dashboard"
                  />
                  <ProjectCard
                    title="aslX"
                    image="/images/aslx_logo.jpg"
                    imageAltText="Logo for aslX"
                    href="/aslx"
                  />
                  <ProjectCard
                    title="finalAnswer"
                    image="/images/finalanswer_logo.jpeg"
                    imageAltText="Logo for finalAnswer"
                    href="/finalanswer"
                  />
                  <ProjectCard
                    title="VisionX"
                    image="/images/visionx_logo.jpeg"
                    imageAltText="Logo for VisionX"
                    href="/visionx"
                  />
                  <ProjectCard
                    title="AutoEnroll For McMaster"
                    image="/images/autoenroll_logo.jpeg"
                    imageAltText="Logo for AutoEnroll For McMaster University"
                    href="/autoenroll"
                  />
                  <ProjectCard
                    title="Integrated Door Lock"
                    image="/images/doorlock_logo.jpeg"
                    imageAltText="Logo for Integrated Door Lock"
                    href="/doorlock"
                  />
                  <ProjectCard
                    title="QuadSense"
                    image="/images/quadsense_logo.jpeg"
                    imageAltText="Logo for QuadSense"
                    href="/quadsense"
                  />
                </div>
              </div>
            </div>

            <div id="awards-section" className="mb-16" ref={awardSectionRef}>
              <H2>Awards and Achievements</H2>
              <ResumeBlock
                dates={[["December 2018"]]}
                heading="Most Innovative Project Award"
                subheading="McMaster University"
                icon={<RiAwardFill color="white" size={"24px"} />}
              >
                <p className="dark:text-white text-black font-poppins">
                  Competed against over 900 Engineering students at the 2018
                  Impact Competition held at McMaster University and achieved
                  the award for the “Most Innovative Project”.
                </p>
              </ResumeBlock>
              <ResumeBlock
                dates={[["May 2018"]]}
                heading="CWSF 2018 Finalist"
                subheading="Canada Wide Science Fair 2018, Ottawa"
                icon={<RiAwardFill color="white" size={"24px"} />}
              >
                <p className="dark:text-white text-black font-poppins">
                  Represented the Region of Peel at the Canada Wide Science Fair
                  2018 as a Finalist and showcased Quadsense.
                </p>
              </ResumeBlock>
              <ResumeBlock
                dates={[["April 2018"]]}
                heading="Bronze Medal"
                subheading="Peel Science Fair 2018, University of Toronto"
                icon={<RiAwardFill color="white" size={"24px"} />}
              >
                <p className="dark:text-white text-black font-poppins">
                  Participated and won Bronze in the Peel Regional Science Fair
                  2018 and qualified for the national level (Canada Wide Science
                  Fair 2018).
                </p>
              </ResumeBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyListItem({ text, href, active }) {
  return (
    <li className="list-none mb-[10px]">
      <Link href={href}>
        <a
          className={classNames(
            "font-bold ml-5 text-lg relative transition-all duration-300",
            {
              "text-indigo-600 after:absolute after:top-1/2 after:-left-6 after:w-5 after:h-[2px] after:bg-indigo-700":
                active,
              "text-black dark:text-white": !active,
            }
          )}
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
