import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <header>
      <nav className="flex justify-between my-4 border-1 border-b-slate-600">
        <div className="font-bold text-xl">
          Converte <span>AI</span>
        </div>
        <div className="flex gap-2">
          <Link href="/about" >
            Sobre
          </Link>
          <Link href="/about" >
            Politica
          </Link>
          <Link href="/about" >
            Privacidade
          </Link>

        </div>
      </nav>
    </header>
  );
}

export default NavBar;
