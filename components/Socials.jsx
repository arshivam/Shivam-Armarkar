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
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiLinkedinBoxFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
  {
    path: "/",
    name: <RiTwitterXFill />,
  },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
  <div className={`${containerStyles}`}>
    {
    icons.map((icon, index)=>{
        return <Link href={icon.path}  key={index}>
             <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
   
    })
    }
    </div>);
};

export default Socials;
