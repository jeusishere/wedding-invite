"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export default function Invitation() {
  return (
    <motion.section
      className="min-h-screen bg-[#F4F1EA] flex justify-center items-center py-20 px-6"
      initial={{
        opacity: 0,
        y: 40,
        scale: .92,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: .9,
      }}
    >
      <article
        className="
        w-full
        max-w-[650px]
        min-h-[900px]

        bg-[#FFFDF9]

        border

        border-[#E8D7B0]

        shadow-[0_30px_70px_rgba(0,0,0,.15)]

        rounded-md

        px-16

        py-24

        text-center

        relative

        overflow-hidden
        "
      >

        {/* Üst Çizgi */}

        <div className="w-24 h-[2px] bg-[#C8A96A] mx-auto mb-10" />

        <p className="tracking-[8px] uppercase text-[#B8894C] text-sm">

          Düğün Davetiyesi

        </p>

        <h1 className="mt-20 text-6xl font-serif text-[#2D2A26]">

          {wedding.bride.fullName}

        </h1>

        <div className="my-10 text-5xl text-[#C8A96A]">

          &

        </div>

        <h2 className="text-6xl font-serif text-[#2D2A26]">

          {wedding.groom.fullName}

        </h2>

        <div className="w-28 h-px bg-[#E8D7B0] mx-auto my-16" />

        <p className="text-3xl">

          {wedding.date.day}

          {" "}

          {wedding.date.month}

          {" "}

          {wedding.date.year}

        </p>

        {wedding.time.ceremony && (

          <p className="mt-6 text-xl">

            Saat

            {" "}

            {wedding.time.ceremony}

          </p>

        )}

        {wedding.venue.name && (

          <>

            <div className="w-20 h-px bg-[#E8D7B0] mx-auto my-16" />

            <h3 className="text-2xl font-semibold">

              {wedding.venue.name}

            </h3>

            <p className="mt-4 text-[#777]">

              {wedding.venue.address}

            </p>

          </>

        )}

        <div className="w-20 h-px bg-[#E8D7B0] mx-auto my-16" />

        <p className="leading-9 italic text-lg text-[#666]">

          {wedding.message}

        </p>

        <div className="mt-20">

          <div className="w-24 h-[2px] bg-[#C8A96A] mx-auto" />

        </div>

      </article>
    </motion.section>
  );
}