"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import json from "../../../package.json";

const Footer = () => {
  const handleCodeView = () =>
    window.open("https://github.com/ashish12345bisht/portfolio2024", "_blank");
  return (
    <footer className="h-[60px] sm:h-[100px] text-white flex sm:flex-col items-center justify-around">
      <div className="grid place-content-center sm:text-sm text-center">
        Tech Stack: Next JS 14, Typescript, Three JS, Framer Motion, Shadcn,
        Tailwind
      </div>
      <div className="flex items-center justify-around">
        <Dialog>
          <DialogTrigger asChild>
            <button className="h-[40px] mr-2 py-2 px-4 sm:px-2 sm:py-1 sm:h-auto sm:text-[12px] bg-[#003a9d] rounded">
              View package.json
            </button>
          </DialogTrigger>
          <DialogContent className="w-full sm:max-w-[360px] bg-[#272727] text-white">
            <DialogHeader>
              <DialogTitle>package.json</DialogTitle>
              <DialogDescription className="h-[500px] text-left overflow-y-scroll text-white scrollbar-hidden">
                <pre>{JSON.stringify(json, null, 2)}</pre>
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4"></div>
          </DialogContent>
        </Dialog>
        <button
          onClick={handleCodeView}
          className="h-[40px]  py-2 px-4 sm:px-2 sm:py-1 sm:h-auto sm:text-[12px] bg-[#003a9d] rounded"
        >
          View Code
        </button>
      </div>
    </footer>
  );
};

export default Footer;
