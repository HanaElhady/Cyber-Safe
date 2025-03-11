"use client";

import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

interface HeroProps {
  pricesRef: RefObject<HTMLDivElement | null>;
}

const Hero: React.FC<HeroProps> = ({ pricesRef }) => {
  const scrollToPrices = () => {
    pricesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}  // Starts lower for smoother effect
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}  // Slower transition
      viewport={{ once: true }}
      className="flex flex-col md:flex-row text-center justify-center md:justify-between items-center my-40 px-6 md:px-12 top-0"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -150 }} // More delay in entrance
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col w-full md:justify-between md:w-1/2 h-auto px-4"
      >
        <div className="flex flex-col md:text-right">
          <h1 className="text-[#ffffff] text-5xl font-bold arabic-text leading-[1.6] space-y-6">
            احصل على
            <br />
            تحكم كامل على
            <br />
            جميع
            <span className="text-7xl"> حساباتك</span>
          </h1>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-4/5"
        >
          <div className="grid grid-cols-3 grid-rows-1 gap-4 place-items-center pt-8 text-center text-white">
            <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>+4587</motion.div>
            <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}>1</motion.div>
            <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }}>100%</motion.div>
          </div>
          <div className="grid grid-cols-3 grid-rows-1 place-items-center gap-4 pt-2.5 text-center text-[#1AC080]">
            <div>عدد عملائنا حول العالم</div>
            <div>ترتيبنا بين الشركات</div>
            <div>آمن</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}  // More delay for smooth appearance
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-between md:w-5/12 h-auto px-4 text-white"
      >
        <p className="text-2xl md:p-auto p-4 text-[#1AC080]">حماية بياناتك يبدأ منك</p>
        <div className="py-8 text-sm text-gray-300 text-right">
          <p>نقدم لك أفضل طرق الفحص لحساباتك مع تحليل لنقاط قوتك ونقاط الضعف</p>
          <br />
          <p>نضمن لك كلمات سر مقترحة قوية تمنع اختراق حساباتك الهامة للمؤسسات</p>
          <br />
          <p>نوفر لك نصائح دائمة وخدمات دعم لاسترجاع حساباتك وتحسين نتائج التحليل</p>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}  // Starts lower for smoother entrance
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col w-full md:flex md:flex-row justify-around"
        >
          <motion.div className="md:w-1/2 w-full" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.7 }} viewport={{ once: true }}>
            <Button  variant="destructive" className="w-full hover:opacity-55 md:my-0 my-4" onClick={scrollToPrices}>
              أسعار الباقات
              <MoveRight className="w-8 h-8 !size-8" />
            </Button>
          </motion.div>

          <motion.div className="md:w-1/2 w-full" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.9 }} viewport={{ once: true }}>
            <Button className="w-full cursor-pointer hover:opacity-55">
              تواصل معنا
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
