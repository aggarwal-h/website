import React from 'react'

export default function ProjectDescriber({leftDisplay, rightDisplay}) {
  return (
    <section className="py-0">
    <div className="container mx-auto w-9/12">
      <div className="flex mx-0 flex-wrap">
        <div className="w-[40%] max-w-[40%] basis-[40%]">
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
        <div className="w-[60%]">
          <div className="flex flex-row justify-start px-8 dark:text-white text-black">
            {rightDisplay}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
