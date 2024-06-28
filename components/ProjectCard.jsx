import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github , Link2Icon } from "lucide-react";


const ProjectCard = ({project}) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className="p-0">
        <div className="relative w-full h-[250px] flex items-center justify-center bg-[#fef9f5] rounded-lg dark:bg-secondary/40">
          <Image className="absolute bottom-0 rounded-lg shadow-2xl" 
           src={project.Image}
           width={370}
           height={370}
           alt=""
           priority
          />
          <div className="m-2">
            <Link className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" href={project.link}><Link2Icon className="text-white"/></Link>
          </div>
          <div>
            <Link className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" href={project.gitHub}><Github className="text-white"/></Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full py-6 px-8">
        <Badge className="uppercase text-sm mb-2 font-medium absolute top-4 left-5">{project.category}</Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard