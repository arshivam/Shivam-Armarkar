import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import {User2, PhoneCall, MailIcon, GraduationCap, HomeIcon, Calendar, Briefcase, University} from "lucide-react"

const infoData = [
    {
        icon:<User2 size={20}/>,
        text: 'Shivam Armarkar'
    },
    {
        icon:<MailIcon size={20}/>,
        text: 'shivam.armarkar007@gmail.com'
    },
    {
        icon:<Calendar size={20}/>,
        text: 'Born on 14 Sept 1998'
    },
    {
        icon:<GraduationCap size={20}/>,
        text: 'Bachelor in Mechanical Engineering'
    },
    {
        icon:<HomeIcon size={20}/>,
        text: 'Nagpur, Maharashtra, India'
    },
]

const qualificationsData = [
    {
        title: 'education',
        data:[
            {
                university:"Rashtrasant Tukadoji Maharaj Nagpur University",
                degree: 'Bachelor of Engineering',
                year: '2016 - 2020'
            },
            {
                university:"Maharashtra State Board",
                degree: 'HSC',
                year: '2016 - 2020'
            },
            {
                university:"Maharashtra State Board",
                degree: 'SSC',
                year: '2016 - 2020'
            },
        ]
    },
    {
        title: 'experience',
        data:[
            {
                company:"Tata Consultancy Services",
                role: 'Software Developer',
                year: '2023 - present'
            },
            {
                company:"Tata Consultancy Services",
                role: 'Associate Software Engineer Trainee',
                year: '2022 - 2023'
            },
        ]
    }
]

const skillsData = [
    {
        title:"skills",
        data:[
            {
                name:"Html, Css, javaScript"
            }
        ]
    },
    {
        title:"tools",
        data:[
            {
                toolImg:"Figma"
            },
            {
                toolImg:"VsCode"
            },
            {
                toolImg:"Mongo Atlas"
            },
        ]
    },
]

const About = () => {
  return (
    <section className="container mx-auto">
        About
    </section>
  )
}

export default About