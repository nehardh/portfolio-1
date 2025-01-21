import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerate'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="pb-20 pt-20">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white' />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='blue' />
            <Spotlight className="top-30 left-20 h-[80vh] w-[50vw]" fill='purple' />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className="flex justify-center relative my-20 z-10 py-3">
          <div className="max-w-[89vw md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect 
              words="Building Seamless Experiences Through Code and Curiosity"
              className="text-center md:tracking-wider mb-4 text-xl md:text-lg lg:text-2xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg">
              Hi! I&apos;m Nehardh, a Full Stack Developer based in Telangana, India.
            </p>
            <a href="#about">
              <MagicButton 
                title="show my work"  
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
          </div>
        </div>

    </div>
  )
}

export default Hero