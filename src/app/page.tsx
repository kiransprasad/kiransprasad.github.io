"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import NavbarElem from "@/components/navbarElement";
import NavbarFiller from "@/components/navbarFiller";

export default function Home() {

  const [currentPage, setCurrentPage] = useState(0);

  const keyDownHandler = (event: { keyCode: number; }) => {
      console.log(event.keyCode); // Key UP would return `38`
      // Handle key event here based on `event.keyCode`
      setCurrentPage(event.keyCode % 6)
  };

  useEffect(() => {
      document.addEventListener("keydown", keyDownHandler);
      return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  return (
    <main className="flex flex-row p-0 h-dvh">
      {/* This sidebar is only rendered when screen size is md or larger */}
      <div className="invisible md:visible w-0 md:w-1/5 flex flex-col h-dvh">
          <NavbarFiller num={-5} selected={currentPage} />
          <NavbarFiller num={-4} selected={currentPage} />
          <NavbarFiller num={-3} selected={currentPage} />
          <NavbarFiller num={-2} selected={currentPage} />
          <NavbarFiller num={-1} selected={currentPage} />
          <NavbarElem num={0} title="Home" selected={currentPage} />
          <NavbarElem num={1} title="About Me" selected={currentPage} />
          <NavbarElem num={2} title="Web Development" selected={currentPage} />
          <NavbarElem num={3} title="Game Development" selected={currentPage} />
          <NavbarElem num={4} title="PT" selected={currentPage} />
          <NavbarElem num={5} title="PT" selected={currentPage} />
      </div>
      {/* The content leaves width for sidebar when screen size is md or larger */}
      <div className="w-auto p-0 m-0">
        <p>content</p>
      </div>
    </main>
  );
}
