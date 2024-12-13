"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsInstagram } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Festival Lindy Poh!",
    description:
      "Aliquam maecenas accumsan nisl pharetra ultrices egestas aptent sagittis, ligula arcu interdum quisque blandit mauris ridiculus justo, fringilla gravida ullamcorper dis orci feugiat natoque, tincidunt cras volutpat malesuada magnis per suscipit. Volutpat ultricies mauris pretium litora venenatis lectus taciti luctus senectus, risus platea nibh maecenas bibendum torquent sapien quisque varius dapibus, class netus imperdiet consequat erat neque vitae tristique. Eget magnis dui pharetra porttitor auctor ligula velit ultricies malesuada, dictum curae condimentum vestibulum netus quis ornare fermentum arcu, mauris rutrum laoreet ac rhoncus non justo placerat",
    image: "/assets/work/thumb1.png ",
    live: "",
    instagram: "",
  },
  {
    num: "02",
    title: "Fonda Parienteswing",
    description:
      "Lligula arcu interdum quisque blandit mauris ridiculus justo, fringilla gravida ullamcorper dis orci feugiat natoque, tincidunt cras volutpat malesuada magnis per suscipit. Volutpat ultricies mauris pretium litora venenatis lectus taciti luctus senectus, risus platea nibh maecenas bibendum torquent sapien quisque varius dapibus, class netus imperdiet consequat erat neque vitae tristique. Eget magnis dui pharetra porttitor auctor ligula velit ultricies malesuada, dictum curae condimentum vestibulum netus quis ornare fermentum arcu, mauris rutrum laoreet ac rhoncus non justo placerat",
    image: "/assets/work/thumb2.png ",
    live: "",
    instagram: "",
  },
  {
    num: "03",
    title: "Swingset",
    description:
      "La gravida ullamcorper dis orci feugiat natoque, tincidunt cras volutpat malesuada magnis per suscipit. Volutpat ultricies mauris pretium litora venenatis lectus taciti luctus senectus, risus platea nibh maecenas bibendum torquent sapien quisque varius dapibus, class netus imperdiet consequat erat neque vitae tristique. Eget magnis dui pharetra porttitor auctor ligula velit ultricies malesuada, dictum curae condimentum vestibulum netus quis ornare fermentum arcu, mauris rutrum laoreet ac rhoncus non justo placerat",
    image: "/assets/work/thumb3.png ",
    live: "",
    instagram: "",
  },
];

const Archive = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // obtener index de slide actual
    const currentIndex = swiper.activeIndex;
    // actualizar estado  en base al index de slide actual
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay:2.4, } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* titulo proyecto */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* descripción proyecto */}
              <p className="text-white/60">{project.description}</p>
              {/* borde */}
              <div className="border border-white/20"></div>
              {/* botones */}
              <div className="flex items-center gap-4">
                {/* boton a sitio web */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Sitio Web</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* boton a ig */}
                <Link href={project.instagram}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsInstagram className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Instagram</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] xl:w-[50%]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div></div>
                      {/* imagen */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Archive;
