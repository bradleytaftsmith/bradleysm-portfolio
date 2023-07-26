import React from "react"
import Image from "next/image"

const skills = [
  { skill: "product strategy" },
  { skill: "KPIs & goal alignment" },
  { skill: "product-led growth" },
  { skill: "sales-led growth" },
  { skill: "product validation" },
  { skill: "user research" },
  { skill: "Figma" },
  { skill: "GIS" },
  { skill: "Postgresql" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
             I&#39;m
              {" "}
              <span className="font-bold text-green-500">
                Bradley Smith
              </span>{""}
              , a 
              <span className="font-bold">{" playful"}</span> and
              <span className="font-bold">{" capable"}</span> product manager and designer based in Austin, TX. 
            </p>
            <br />
            <p>I help lead software products with 
            {" "}
              <span className="font-bold text-green-500">
              user-centered 
              </span>{" "}
                design and development methods. I have experience in B2B SaaS products in a variety of industries, and am always hungry to learn about new ones.
            </p>
            <br />
            <p>
              I believe that {" "}
              <span className="font-bold text-green-500">
                embracing failure
              </span>{" "}
            leads to growth, learning, and all around better outcomes. It takes many failures to make a success.
            </p>
            <br />
            <p>
              I {" "}
              <span className="font-bold text-green-500">
              play a lot of skeeball
              </span>{""}, like to build things with my hands or with automated tools, and appreciate every opportunity I get to hang out with my family.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
