"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "+569 11223344",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "email.escuela@mail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Dirección",
    description: "Direccion 1234, Lugar",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* formulario */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action=""
            >
              <h3 className="text-4xl text-accent">Únete a nuestra escuela</h3>
              <p className="text-white/60">
                Texto descriptivo de unas cuantas lineas, que sirvan de rlleno.
                Escribiendo cualquier cosa
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Nombre" />
                <Input type="lastname" placeholder="Apellido" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Teléfono" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecciona un plan</SelectLabel>
                    <SelectItem value="est">Clase suelta</SelectItem>
                    <SelectItem value="cst">Plan mensual</SelectItem>
                    <SelectItem value="mst">Plan Semestral</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Déjanos un mensaje"
              />
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
