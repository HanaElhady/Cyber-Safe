"use client";

import { RefObject } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cards } from "./Cards";
import { CarouselDemo } from "./Carousel";
import { ArrowLeft, Check } from "lucide-react";
import Infographic from "./Infographic";

interface PricesProps {
  pricesRef: RefObject<HTMLDivElement | null>;
}

export function Prices({ pricesRef }: PricesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col py-4 w-screen"
    >
    <Infographic />
      
      {/* ✅ Header Animation */}
      <motion.div
        ref={pricesRef}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-4"
      >
        <div className="flex w-fit flex-row mx-12 mt-24 items-center translate-x-4 justify-center gap-4 bg-transparent p-2 rounded-2xl border-white border-2">
          <h5 className="text-white text-sm">باقاتنا كلها صممت لتلائم احتياجاتك</h5>
        </div>
      </motion.div>

      {/* ✅ Animated Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-white text-8xl p-8 font-bold text-center"
      >
        الأسعـار
      </motion.h1>

      {/* ✅ Desktop Cards with Faster Staggered Effect */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="hidden md:flex flex-row justify-evenly mt-8"
      >
        {Plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <Cards plan={plan} />
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Mobile Carousel Animation */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="block md:hidden py-4"
      >
        <CarouselDemo plans={Plans} />
      </motion.div>

      {/* ✅ Subscribe Button Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="py-6 justify-center flex pt-12 text-extrabold"
      >
        <Button variant="outline" className="w-1/3 text-extrabold text-white" >
          اشتراكات أخرى
        </Button>
      </motion.div>

      {/* ✅ Additional Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center text-white py-8"
      >
        {/* ✅ Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          viewport={{ once: true }}
          className="justify-center items-center object-fill w-1/3 h-fit bg-transparent"
        >
          <img src="/images/persons.png" alt="" />
        </motion.div>

        {/* ✅ Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-transparent w-2/3"
        >
          <p className="text-2xl">
            انضم لأكثر من <span className="font-extrabold">546.132</span> مستخدم حول العالم
            <br />
            لحماية بيناتهم
          </p>
          <p className="text-sm font-light py-2">ابق بيانات حساباتك آمنة مع سايبر سيف</p>
        </motion.div>

        {/* ✅ Start 7-Day Free Trial Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-row justify-center pt-4 text-center items-center"
        >
          <Button className="font-bold text-2xl cursor-pointer rounded-full bg-transparent border-2 hover:opacity-45 border-b-gray-100">
            ابدأ 7 أيام مجانا
            <ArrowLeft className="text-[#1AC080] w-8 h-8 !size-8" />
          </Button>
        </motion.div>

        {/* ✅ Checkmark Confirmation Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="rounded-full flex flex-row gap-1.5 justify-center items-center pt-2 mt-2"
        >
          <div className="w-fit rounded-full mb-12 bg-[#1AC080]">
            <Check />
          </div>
          <p className="text-sm font-light mb-12">أرسل رسالة تأكيد خلال 30 دقيقة</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Prices;


const Plans = [
    {
        title: "الاشتراك المجاني",
        description: "مجاني",
        features: [
          "محاولتان مجانيتان كل اسبوع",
          "الوصول الى عدد محدود من الخدمات",
          "تجربة مدعومة بالاعلانات",
          "مميزات محدودة",
          "دعم البريد الالكتروني",
        ],
    },
  {
    title: "الاشتراك القياسي",
    description: "شهريا 49 ",
    currency : "LE" ,
        features: [
          "محاولات لا نهائية ",
          "الوصول الى جميع الخدمات الأساسية",
          "تخفيض عدد ومدةالاعلانات المعروضة"  ,
          "مميزات لا محدودة",
          " متابعة شهرية مع العميل ",
        ],
  },

  {
    title: " الاشتراك المميز",
    description: "شهريا 99 ",
    currency : "LE" ,
        features: [
          "محاولات لا نهائية ",
          "الوصول الى جميع الخدمات الأساسية",
          "بلا اعلانات"  ,
          "محتوى مجاني حصري بالأمن السيبراني",
          " متابعة اسبوعية مع العميل ",
        ],
  },
]
