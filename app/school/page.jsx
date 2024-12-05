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

// us data
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

const School = () => {
  return <div>School</div>;
};

export default School;
