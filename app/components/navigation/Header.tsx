"use client";
import React, { useState } from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";

import Image from "next/image";
import { DialogDemo } from "./Dialog";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full  backdrop-blur-sm h-24 bg-transparent shadow-2xl drop-shadow-lg fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12">
      <div className="relative w-1/3 h-fit mt-4">
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={400}
          height={30}
          className="object-contain w-full"
        />
      </div>
      <NavigationMenuDemo isOpen={isOpen} setIsOpen={setIsOpen} />
      <DialogDemo />
   
      
    </header>
  );
}

export default Header;

