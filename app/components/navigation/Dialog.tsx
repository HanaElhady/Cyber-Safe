"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { LogIn } from "lucide-react";
import { AvatarDemo } from "./Avatar";

export function DialogDemo() {
  const [username, setUsername] = useState(""); // Store entered username
  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form reload
    if (username.trim()) {
      setLoggedIn(true); // Change login state
    }
  };

  const handleLogout = () => {
    setUsername(""); // Clear username
    setLoggedIn(false); 
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-fit h-3/5 text-xl place-items-start">
          {loggedIn ? `${username}` : "تسجيل الدخول" } 
          {loggedIn ? <AvatarDemo /> : <LogIn className="w-8 h-8 !size-8" />}
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-2/4 text-white bg-cover bg-center bg-no-repeat 
        ${loggedIn ? "h-40 w-60 flex flex-col justify-center items-center bg-[url('/images/LogoutBackground.jpg')]" : "h-96 bg-[url('/images/LoginBackground.jpg')]"}`}
      >
        <DialogHeader>
          <DialogTitle>
            {loggedIn ? `مرحبا ${username}` : ""}
          </DialogTitle>
        </DialogHeader>

        {loggedIn ? (
          <DialogFooter className="flex justify-center">
            <DialogClose asChild>
              <Button variant="outline" onClick={handleLogout}>
                تسجيل الخروج
              </Button>
            </DialogClose>
          </DialogFooter>
        ) : (
          <DialogFooter>
          <form onSubmit={handleLogin} className="flex flex-row justify-between w-full items-end gap-8 py-4">
            <div className="flex flex-row w-1/2 items-center gap-4">
              <Button variant="outline" className="cursor-default">الاسم </Button>
              <Input
                id="name"
                type="text"
                placeholder="أدخل اسمك"
                className="col-span-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-row w-1/2 items-center gap-4">
              <Button variant="outline" className="cursor-default">كلمة السر</Button>
              <Input id="password" type="password" className="text-white col-span-3" placeholder="أدخل كلمة السر" />
            </div>
            </form>
            </DialogFooter>
          
        )}
      </DialogContent>
    </Dialog>
  );
}

