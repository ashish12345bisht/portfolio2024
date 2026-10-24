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
    <footer className="flex h-[60px] items-center justify-around text-white sm:h-[100px] sm:flex-col">
      <div className="grid place-content-center text-center sm:text-sm">
        Tech Stack: Next JS 14, Typescript, Three JS, Framer Motion, Shadcn,
        Tailwind
      </div>
      <div className="flex items-center justify-around">
        <Dialog>
          <DialogTrigger asChild>
            <button className="mr-2 h-[40px] rounded bg-[#003a9d] px-4 py-2 sm:h-auto sm:px-2 sm:py-1 sm:text-[12px]">
              View package.json
            </button>
          </DialogTrigger>
          <DialogContent className="w-full bg-[#272727] text-white sm:max-w-[360px]">
            <DialogHeader>
              <DialogTitle>package.json</DialogTitle>
              <DialogDescription className="scrollbar-hidden h-[500px] overflow-y-scroll text-left text-white">
                <pre>{JSON.stringify(json, null, 2)}</pre>
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4"></div>
          </DialogContent>
        </Dialog>
        <button
          onClick={handleCodeView}
          className="h-[40px] rounded bg-[#003a9d] px-4 py-2 sm:h-auto sm:px-2 sm:py-1 sm:text-[12px]"
        >
          View Code
        </button>
      </div>
    </footer>
  );
};

export default Footer;
