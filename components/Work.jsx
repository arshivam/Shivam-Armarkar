'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        Image:"/projects/SpotifyClone.png",
        name:'Chat App',
        category:'React js',
        description:"lorremmmm man jksnd kmnsa",
        gitHub:"/",
        link:"/"
    },
    {
        Image:"/projects/NetflixClone.png",
        name:'Netflix UI Clone',
        category:'Html, Css',
        description:"lorremmmm man jksnd kmnsa",
        gitHub:"/",
        link:"/"
    },
    {
        Image:"/projects/twitterClone.png",
        name:'Twitter UI Clone',
        category:'Html, Css',
        description:"lorremmmm man jksnd kmnsa",
        gitHub:"/",
        link:"/"
    },
    {
        Image:"/projects/SpotifyClone.png",
        name:'Spotify Clone',
        category:'Html, Css, Js',
        description:"lorremmmm man jksnd kmnsa",
        gitHub:"/",
        link:"/"
    },
]


const Work = () => {
  return (
    <section>
        <div className="container mx-auto relative mb-12 xl:mb-48">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Lastest Projects</h2>
             <p className="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum beatae numquam culpa non? Voluptatem voluptas rerum ipsam.</p>
             <Link href='/projects'><Button>All Projects</Button></Link>
            </div>
          {/* slider */}
          <div className="xl:max-w-[1000px] xl:absolute top-0 right-0">
            <Swiper className="h-[480px]" slidesPerView={1} spaceBetween={30}
             breakpoints={{
                640:{
                    slidesPerView:2
                }
             }}
             modules={[Pagination]}
             pagination={{ clickable: true }}
            >
                {
                    projectsData.slice(0,4).map((project, index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
          </div>
        </div>
        
    </section>
  )
}

export default Work