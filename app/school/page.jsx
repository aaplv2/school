"use client";

import { Description } from "@radix-ui/react-dialog";

// about data
const about = {
  title: "Acerca de nosotros",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit officia quia.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Escuela de swing",
    },
    {
      fieldName: "Phone",
      fieldValue: "+569 11223344",
    },
    {
      fieldName: "Email",
      fieldValue: "email@contacto.com",
    },
    {
      fieldName: "Address",
      fieldValue: "direccion 123",
    },
  ],
};

// experiencia data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Nuestra Escuela",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam vitae ",
  items: [
    {
      company: "Fundacion Parenteswing",
    },
    {
      company: "Festival Lindy Poh",
    },
  ],
};

// profesores data
const teachers = {
  icon: "/assets/resume/cap.svg",
  title: "Profesores",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam vitae ",
  items: [
    {
      name: "Profesor 1",
      dances: "Lindy Hop, Collegiate Shag, Authentic Jazz",
      experience: "2015 - Presente",
    },
    {
      name: "Profesor 2",
      dances: "Lindy Hop, Authentic Jazz",
      experience: "2015 - Presente",
    },
    {
      name: "Profesor 3",
      dances: "Lindy Hop, Balboa, Authentic Jazz, Collegiate Shag",
      experience: "2020 - Presente",
    },
    {
      name: "Profesor 4",
      dances: "Lindy Hop, West Coast Swing, Authentic Jazz",
      experience: "2018 - Presente",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const School = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-black">{experience.title}</h3>
                <p className="max-w-[600px] text-wrap/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xñ flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.company}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* teachers */}
            <TabsContent value="teachers" className="w-full">
              teachers
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default School;
