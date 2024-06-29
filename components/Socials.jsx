"use client";
import React from "react";
import Link from "next/link";
import {
  RiTwitterXFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://github.com/arshivam",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/shivam-armarkar-9b957b192/",
    name: <RiLinkedinBoxFill />,
  },
  {
    path: "https://www.instagram.com/_i_am_shivam/",
    name: <RiInstagramFill />,
  },
  {
    path: "https://x.com/ShivamArmarkar",
    name: <RiTwitterXFill />,
  },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
  <div className={`${containerStyles}`}>
    {
    icons.map((icon, index)=>{
        return <a target="_blank" href={icon.path}  key={index}>
             <div className={`${iconStyles}`}>{icon.name}</div>
        </a>
   
    })
    }
    </div>);
};

export default Socials;
