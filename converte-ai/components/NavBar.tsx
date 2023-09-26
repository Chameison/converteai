import Link from "next/link";
import React from "react";
import { SiConvertio } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { Button } from "./ui/button";
function NavBar() {
  return (
    <header className=" ">
      <nav className="py-3 px-4 flex justify-between  border-1 border-b-slate-600">
        <Link
          href="/"
          className="text-xl text-rose-700 font-bold flex gap-1 items-center"
        >
          <SiConvertio />{" "}
          <p className="flex items-center">
            Converte<span className="text-rose-500">AI</span>
          </p>
        </Link>
        <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex ">
          <Button variant="ghost" className="font-sans text-md">
            <Link href="/">Home</Link>
          </Button>
          <Link href="/about">
            <Button variant="ghost" className="font-sans text-md">
              Sobre
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="font-sans text-md">
            Privacidade
            </Button>
          </Link>
        </div>
        <Link href="/">
          <Button
            variant="default"
            className="rounded-full w-fit bg-rose-400 gap-2 items-center hidden md:flex"
            size="lg"
          >
            <span>Repositório Github</span>{" "}
            <span className="text-xl">
              <BsGithub />
            </span>
          </Button>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
