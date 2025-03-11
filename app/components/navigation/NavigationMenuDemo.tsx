"use client";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function NavigationMenuDemo({ isOpen, setIsOpen }: Props) {
  return (
    <nav className="relative">
      {/* ✅ Mobile Toggle Button */}
      <button
        className="md:hidden p-2 text-[#1AC080] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "" : <Menu size={30} />}
      </button>

      {/* ✅ Navigation Menu */}
      <NavigationMenu
        className={`absolute top-full left-0 w-full transition-transform duration-300 
          md:relative md:bg-transparent md:shadow-none
          ${isOpen ? "block" : "hidden"} md:flex`}
      >
        <NavigationMenuList
          className={`flex p-4  md:gap-4 md:p-0 md:flex-row-reverse flex-col
            ${isOpen ? "fixed inset-0 h-screen w-screen backdrop-blur-3xl bg-black/80 flex justify-center items-center overflow-hidden z-50" : ""}
`}
        >
          {/* ✅ Close Button Inside Menu */}
          {isOpen && (
            <button
              className="absolute top-6 right-6 text-[#1AC080] md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X size={30} />
            </button>
          )}

          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex justify-around">   
              <span >تعريف عنا</span>        
              <span className="ml-1 text-[#1AC080] opacity-50">/ ١</span> 
              </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/services" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex justify-around">
                <span >ماذا نقدم</span>
                <span className="ml-1 text-[#1AC080] opacity-50">/ ٢</span> 
              </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex justify-around">
              <span>أسعار الباقات</span>
                <span className="ml-1 text-[#1AC080] opacity-50">/ ٣</span> 
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/faq" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>     
              <div className="flex justify-around">   
              <span >أسئلة و أجوبة </span>   
                <span className="ml-1 text-[#1AC080] opacity-50">/ ٤</span> 
                
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
