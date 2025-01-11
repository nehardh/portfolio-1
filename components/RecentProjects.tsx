import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            A small selection of{' '}
            <span className="text-purple">
                recent projects
            </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 mt-10">
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className="sm:h-[41rem]  lg:min-h-[32.5rem] h-[25rem] flex item-center justify-center sm:w-[500px] w-[80vw]">
                    <PinContainer 
                        title={link} 
                        href={link}>
                        <div className="relative flex items-center justify-center sm:w-[550px] w-[80vw] sm:h-[50vh] h-[30vh] overflow-hidden rounded-lg lg:h-[30vh]cover mb-10 bg-[#13162d]">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img src={img} alt={title} className="z-10 absolute bottom-0" />
                        </div>
                        <h1 className="font-bold lg:text-sm md:text-xl text-base line-clamp-1 pb-2">
                            {title}
                        </h1>
                        <p className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-8 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={index} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                    style={{transform: `translateX(-${5 * index + 2}px)`,}}>
                                        <img src={icon} alt={icon} className="p-2"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-start items-center">
                            <p className="flex lg:text-sm md:text-xs text-sm text-purple pt-3">
                                Check Live Site
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </p>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects