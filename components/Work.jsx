"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    Image: "/projects/jobListingPortal.png",
    name: "Job Portal",
    category: "React js",
    description:
      "Developed this project in one of the interview machine coding round in 1:30 Hrs, Which includes component based development, optimising app, responsive CSS and many more...",
    gitHub: "https://github.com/arshivam/JobListing_Website",
    link: "https://job-listing-website-beta.vercel.app/",
  },
  {
    Image: "/projects/chatApp.png",
    name: "Chat App",
    category: "React js",
    description:
      "Developed this application using socket io,Tailwinds CSS, Shadcn ui, Mongo Atlas,Express and Redux-toolkit.This app has feature such as show online user, live chatting, group chat, search user, etc...",
    gitHub: "https://github.com/arshivam/ChatApp",
    link: "https://github.com/arshivam/ChatApp",
  },
  {
    Image: "/projects/youtubeClone.png",
    name: "Youtube Clone",
    category: "React js",
    description:
      "Made a project using Tailwind CSS, Redux-toolkit, Axios and Youtube API's used debouncing and caching to enchance user experience.",
    gitHub: "https://github.com/arshivam/Youtube-Clone-React",
    link: "https://github.com/arshivam/Youtube-Clone-React",
  },
  {
    Image: "/projects/SpotifyClone.png",
    name: "Spotify Clone",
    category: "Html, Css, Js",
    description:
      "Built using html, css, and javascript. This project has feature such as play, pause, play next song, play previous song and much more...",
    gitHub: "https://github.com/arshivam/Spotify-Clone",
    link: "https://github.com/arshivam/Spotify-Clone",
  },
  {
    Image: "/projects/NetflixClone.png",
    name: "Netflix UI Clone",
    category: "Html, Css",
    description:
      "Build this project to enchance my css skill here i have use simple html and css to make a replica of netflix home page.",
    gitHub: "https://github.com/arshivam/NetFlix_Clone",
    link: "https://github.com/arshivam/NetFlix_Clone",
  },
  {
    Image: "/projects/twitterclone.png",
    name: "Twitter UI Clone",
    category: "Html, Css",
    description:
      "Build this project to enchance my css skill here i have use simple html and css to make a replica of Twiiter web page.",
    gitHub: "https://github.com/arshivam/Twitter-Clone-Tailwind",
    link: "https://github.com/arshivam/Twitter-Clone-Tailwind",
  },
];

const Work = () => {
  return (
    <section>
      <div className="container mx-auto relative mb-12 xl:mb-48">
        <div className="max-w-[350px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Lastest Projects</h2>
          <p className="subtitle">
            Here are some of my projects I recently worked on. Please have a
            look or click on <span className="text-primary">All Projects</span>{" "}
            button to see all projects I&apos;ve worked on till date.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute top-0 -right-3">
          <Swiper
            className="h-[530px]"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectsData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
