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
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
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
