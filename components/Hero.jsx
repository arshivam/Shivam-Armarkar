'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import {RiBriefcase4Fill, RiArrowDownSLine,RiProfileFill, RiTeamFill, RiTodoFill} from "react-icons/ri"
import { FaTools } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import Socials from "./Socials";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[89vh] xl:pt-28 bg-[#fef9f5] dark:bg-transparent" >
    <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
        <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center">
            <div className="text-sm text-primary uppercase font-semibold mb-4 tracking-[4px]"><span style={{ fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Software Developer", "Front-End Developer", "Web Developer"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  cursorBlinking={true}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span></div>
            <h1 className="h1 mb-4">Hello, my name is Shivam Armarkar</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-auto"> I&apos;am Software developer and a Dotted line manager with expertise in front-end
            and back-end development, experienced in leading cross-functional teams.</p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-auto mb-12 ">
                <Link href={'/contact'}>
                <Button className="gap-x-2">Contact me <Send sixe={18}/></Button>
                </Link>
                <a href="/resume/Shivam_Armarkar_SDE.pdf" download>
                <Button variant='secondary' className="gap-x-2">Download CV <Download sixe={18}/></Button>
                </a>
            </div>
            {/* Socials */}
            <Socials containerStyles="flex px-4  gap-x-6 mx-auto xl:mx-0" iconStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
        </div>
        {/* badge */}
        <div className="hidden xl:flex relative">
            <Badge containerStyles='absolute top-[14%] -left-[35rem]' icon={<RiBriefcase4Fill/>} endCountNum={2} endCountText='+' badgeText='Years Of Experience'/>
            <Badge containerStyles='absolute top-[34%] -left-[25rem]' icon={<FaTools/>} endCountNum={10} badgeText='Technology knowledge'/>
            <Badge containerStyles='absolute top-[54%] -left-[15rem]' icon={<RiProfileFill/>} endCountNum={6} badgeText='Finished Projects'/>
        </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex absolute left-2/4 bottom-5 xl:bottom-5 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary"/>
        </div>
       

    </div>
    </section>
  )
}

export default Hero