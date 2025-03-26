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
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-12 md:gap-48 text-center md:text-right my-20 md:my-40 px-4 md:px-12"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col w-full md:w-2/3 h-auto px-4"
      >
        <h1 className="text-white text-4xl md:text-[60px] font-bold arabic-text leading-[1.6] space-y-4">
          احصل على
          <br />
          تحكم كامل على
          <br />
          جميع
          <span> حساباتك</span>
        </h1>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-4/5"
        >
          <div className="grid grid-cols-3 gap-4 pt-8 text-center text-white w-full">
            <div className="flex flex-col items-center">
              <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>+4587</motion.div>
              <p className="text-[#1AC080] text-xs md:text-sm mt-1">عدد عملائنا حول العالم</p>
            </div>
            <div className="flex flex-col items-center">
              <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}>1</motion.div>
              <p className="text-[#1AC080] text-xs md:text-sm mt-1">ترتيبنا بين الشركات</p>
            </div>
            <div className="flex flex-col items-center">
              <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }}>100%</motion.div>
              <p className="text-[#1AC080] text-xs md:text-sm mt-1">آمن</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-between w-full md:w-6/12 h-auto px-4 text-white"
      >
        <p className="text-xl md:text-2xl text-[#1AC080]">حماية بياناتك يبدأ منك</p>
        <div className="py-6 text-sm md:text-base text-gray-300 text-center md:text-right">
          <p>نقدم لك أفضل طرق الفحص لحساباتك مع تحليل لنقاط قوتك ونقاط الضعف</p>
          <br />
          <p>نضمن لك كلمات سر مقترحة قوية تمنع اختراق حساباتك الهامة للمؤسسات</p>
          <br />
          <p>نوفر لك نصائح دائمة وخدمات دعم لاسترجاع حساباتك وتحسين نتائج التحليل</p>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 w-full justify-center md:justify-start"
        >
          <motion.div className="w-full md:w-1/2" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.7 }} viewport={{ once: true }}>
            <Button variant="destructive" className="w-full md:w-auto px-6 py-3 text-lg hover:opacity-55" onClick={scrollToPrices}>
              أسعار الباقات
              <MoveRight className="w-6 h-6 ml-2" />
            </Button>
          </motion.div>

          <motion.div className="w-full md:w-1/2" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.9 }} viewport={{ once: true }}>
            <Button className="w-full md:w-auto px-6 py-3 text-lg cursor-pointer hover:opacity-55">
              تواصل معنا
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;