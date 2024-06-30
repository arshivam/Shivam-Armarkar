import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  User2,
  PhoneCall,
  MailIcon,
  GraduationCap,
  HomeIcon,
  Calendar,
  Briefcase,
  University,
  LampDesk,
} from "lucide-react";
import { SiMongodb } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { CgFigma } from "react-icons/cg";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Shivam Armarkar",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shivam.armarkar007@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 14 Sept 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor in Mechanical Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Nagpur, Maharashtra, India",
  },
  {
    icon: <LampDesk size={20} />,
    text: "Currently working at Tata Consultancy Services",
  },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        university: "Rashtrasant Tukadoji Maharaj Nagpur University",
        degree: "Bachelor of Engineering",
        year: "2016 - 2020",
      },
      {
        university: "Maharashtra State Board",
        degree: "HSC",
        year: "2016",
      },
      {
        university: "Maharashtra State Board",
        degree: "SSC",
        year: "2014",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Tata Consultancy Services",
        role: "Software Developer",
        year: "2023 - present",
      },
      {
        company: "Tata Consultancy Services",
        role: "Associate Software Developer",
        year: "2022 - 2023",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "Html, Css, javaScript",
      },
      {
        name: "React js",
      },
      {
        name: "Next js",
      },
      {
        name: "Tailwind CSS, BootStrap CSS",
      },
      {
        name: "Redux, Redux-toolkit"
      },
      {
        name: "MongoDB, PostgreSQL",
      },
      {
        name: "Code review",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        toolIcon: <CgFigma size={50} />,
      },
      {
        toolIcon: <VscVscodeInsiders size={50} />,
      },
      {
        toolIcon: <SiMongodb size={50} />,
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] py-12 pb-12 xl:py-24 flex flex-col items-center">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
      </div>
      <div className="flex-1 px-8">
        {/* tabs */}
        <Tabs defaultValue="personal">
          <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[920px] xl:border dark:border-none">
            <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
              Personal Info
            </TabsTrigger>
            <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
              Qualifications
            </TabsTrigger>
            <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
              Skills
            </TabsTrigger>
          </TabsList>
          {/* tab container */}
          <div className="text-lg  mt-12 xl:mt-8">
            <TabsContent value="personal">
              <h3 className="h3">Experienced in web development : React</h3>
              <p className="subtitle max-w-xl mx-auto mt-4 xl:mx-0">
                I'm specialize in crafting intuitive websites with cutting edge
                technology and enchancing user experience. I've helped some of
                the client to create applications, portals and solutions.
              </p>
              <div className="grid xl:grid-cols-2 gap-4 mb-12">
                {infoData.map((item, index) => {
                  return (
                    <div className="flex items-center gap-x-4" key={index}>
                      <div className="text-primary">{item.icon}</div>
                      <div>{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="qualifications">
              <div className="grid md:grid-cols-2 gap-y-8">
                <div>
                  <div className="flex items-center gap-x-4 text-primary mb-2">
                    <Briefcase />
                    <h4 className="font-medium capitalize text-[22px]">
                      {getData(qualificationsData, "experience").title}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-y-6">
                    {getData(qualificationsData, "experience").data.map(
                      (item, index) => {
                        const { company, role, year } = item;
                        return (
                          <div className="flex gap-x-8 group" key={index}>
                            <div>
                              <div className="text-xl font-semibold leading-none mb-2">
                                {company}
                              </div>
                              <div className="text-lg leading-none mb-2 text-muted-foreground">
                                {role}
                              </div>
                              <div className="text-base font-medium">
                                {year}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                {/* education */}
                <div>
                  <div className="flex items-center gap-x-4 text-primary mb-2">
                    <GraduationCap />
                    <h4 className="font-medium capitalize text-[22px]">
                      {getData(qualificationsData, "education").title}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-y-6">
                    {getData(qualificationsData, "education").data.map(
                      (item, index) => {
                        const { university, degree, year } = item;
                        return (
                          <div className="flex gap-x-8 group" key={index}>
                            <div>
                              <div className="text-xl font-semibold leading-none mb-2">
                                {university}
                              </div>
                              <div className="text-lg leading-none mb-2 text-muted-foreground">
                                {degree}
                              </div>
                              <div className="text-base font-medium">
                                {year}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills">
              <div className="text-center xl:text-left">
                <div className="mb-6">
                  <h4 className="font-medium capitalize text-[22px] mb-2 text-primary">
                    {getData(skillsData, "skills").title}
                  </h4>
                  <div className="border border-border mb-2"></div>
                  {getData(skillsData, "skills").data.map((item, index) => {
                    const { name } = item;
                    return (
                      <div key={index}>
                        <div className="text-xl">{name}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mb-6">
                  <h4 className="font-medium capitalize text-[22px] mb-2 text-primary">
                    {getData(skillsData, "tools").title}
                  </h4>
                  <div className="border border-border mb-4"></div>
                  <div className="flex justify-center xl:justify-start gap-x-6">
                    {getData(skillsData, "tools").data.map((item, index) => {
                      const { toolIcon } = item;
                      return (
                        <div
                          key={index}
                          className="hover:cursor-pointer hover:text-primary"
                        >
                          <div className="text-xl">{toolIcon}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
