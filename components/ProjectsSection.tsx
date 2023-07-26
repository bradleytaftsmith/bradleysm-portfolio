import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare, BsBank2 } from "react-icons/bs"

const projects = [
  {
    name: "Green Room | Head of Product",
    description:
      "Green Room is a platform to let musicians manage themselves, with event planning, team coordination, and financial tools.",
    image: "/greenroom.png",
    crunchbase: "https://www.crunchbase.com/organization/green-room-app",
    link: "https://greenroom.app",
  },
  {
    name: "Banyan Water | Director of Product",
    description: "Banyan Water is an IoT-powered platform for commercial real estate managers to control and analyze their water usage.",
    image: "/banyan.png",
    crunchbase: "https://www.crunchbase.com/organization/banyan-water",
    link: "https://banyanwater.com",
  },
  {
    name: "MineralSoft | Product Manager",
    description:
      "MineralSoft is a portfolio management web application for oil and gas mineral rights and related royalty payments. It was acquired by DrillingInfo/Enverus in 2019.",
    image: "/mineralsoft.png",
    crunchbase: "https://www.crunchbase.com/organization/mineralsoft",
    link: "https://www.enverus.com/mineralsoft/",
  },
  {
    name: "Blackbeard Data | Product Manager",
    description:
      "Blackbeard Data is a skunkworks product development shop building one-off and ongoing data collection and analytics products for the oil & gas industry.",
    image: "/blackbeard.png",
    crunchbase: "https://www.crunchbase.com/organization/blackbeard-data-services",
    link: "https://blackbearddata.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.crunchbase} target="_blank">
                        <BsBank2
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
