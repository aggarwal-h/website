import React from 'react'

export default function ProjectDescriber({leftDisplay, rightDisplay}) {
  return (
    <section className="py-0">
    <div className="container mx-auto w-11/12 lg:w-9/12">
      <div className="flex flex-col lg:flex-row mx-0 flex-wrap justify-center items-center w-full">
        <div className="w-full lg:w-[40%] lg:max-w-[40%] lg:basis-[40%]">
          <div className="flex items-stretch">
            <div
              className="flex text-center p-2 shadow-2xl w-full h-full rounded-6xl"
            >
              <span className="w-full h-full">
                {leftDisplay}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] mt-8">
          <div className="flex flex-row justify-start px-8 dark:text-white text-black">
            {rightDisplay}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
