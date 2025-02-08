"use client";
import React, { useState } from "react";
// import { Tabs,TabsList } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
      Image:"/projects/chatApp.png",
      name:'Chat App',
      category:'React js',
      description:"Developed this application using socket io,Tailwinds CSS, Shadcn ui, Mongo Atlas,Express and Redux-toolkit.This app has feature such as show online user, live chatting, group chat, search user, etc...",
      gitHub:"https://github.com/arshivam/ChatApp",
      link:"https://github.com/arshivam/ChatApp"
  },
  {
      Image:"/projects/youtubeClone.png",
      name:'Youtube Clone',
      category:'React js',
      description:"Made a project using Tailwind CSS, Redux-toolkit, Axios and Youtube API's used debouncing and caching to enchance user experience.",
      gitHub:"https://github.com/arshivam/Youtube-Clone-React",
      link:"https://github.com/arshivam/Youtube-Clone-React"
  },
  {
      Image:"/projects/SpotifyClone.png",
      name:'Spotify Clone',
      category:'Html, Css, Js',
      description:"Built using html, css, and javascript. This project has feature such as play, pause, play next song, play previous song and much more...",
      gitHub:"https://github.com/arshivam/Spotify-Clone",
      link:"https://github.com/arshivam/Spotify-Clone"
  },
  {
      Image:"/projects/NetflixClone.png",
      name:'Netflix UI Clone',
      category:'Html, Css',
      description:"Build this project to enchance my css skill here i have use simple html and css to make a replica of netflix home page.",
      gitHub:"https://github.com/arshivam/NetFlix_Clone",
      link:"https://github.com/arshivam/NetFlix_Clone"
  },
  {
      Image:"/projects/twitterclone.png",
      name:'Twitter UI Clone',
      category:'Html, Css',
      description:"Build this project to enchance my css skill here i have use simple html and css to make a replica of Twiiter web page.",
      gitHub:"https://github.com/arshivam/Twitter-Clone-Tailwind",
      link:"https://github.com/arshivam/Twitter-Clone-Tailwind"
  },
]

const Projects = () => {
  return (
    <section className="min-h-screen pt-6">
      <div className="container mx-auto my-6 xl:my-8">
        <h3 className="h3 text-center mb-14">My Projects</h3>
        <div className="grid grid-cols-1 gap-6 mb-24 md:grid-cols-3">
        {projectsData.map((project, index) => {
          return (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          );
        })}
        </div>
       
      </div>
    </section>
  );
};

export default Projects;
