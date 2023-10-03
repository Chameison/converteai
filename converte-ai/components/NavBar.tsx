import Link from "next/link";
import React from "react";
import { SiConvertio } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { GrMenu } from "react-icons/gr";
function NavBar() {
  return (
      <nav className="w-full backdrop-blur-md bg-white bg-opacity-30 py-5 px-12 md:px-5 xl:px-16 2xl:px-24 flex justify-between  items-center">
        <Link
          href="/"
          className="text-xl text-rose-700 font-bold flex gap-1 items-center"
        >
          <SiConvertio />
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
        <Sheet>
          <SheetTrigger className="block md:hidden p-3">
            <span>
              <GrMenu />
            </span>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="w-full space-y-3">
                  <Link href='/'>
                    <Button
                      variant="link"
                      className="font-semibold text-md w-full"
                    >
                      Home
                    </Button>
                  </Link>
                  <Link href='/sobre'>
                    <Button
                      variant="link"
                      className="font-semibold text-md w-full"
                    >
                      Sobre
                    </Button>
                  </Link>
                  <Link href='/privacidade'>
                    <Button
                      variant="link"
                      className="font-semibold text-md w-full"
                    >
                      Privacidade
                    </Button>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
  );
}

export default NavBar;
