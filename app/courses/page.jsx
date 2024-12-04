"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    num: "01",
    title: "Lindy Hop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas",
    href: "",
  },
  {
    num: "02",
    title: "Authentic Jazz",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas",
    href: "",
  },
  {
    num: "03",
    title: "Collegiate Shag",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas",
    href: "",
  },
  {
    num: "04",
    title: "Balboa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas",
    href: "",
  },
  {
    num: "05",
    title: "West Coast Swing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas",
    href: "",
  },
];

const Courses = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {courses.map((course, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {course.num}
                  </div>
                  <Link
                    href={course.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* encabezado */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {course.title}
                </h2>
                {/* descripción */}
                <p className="text-white/60">{course.description}</p>
                {/* borde */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
