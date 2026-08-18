"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

const INSTAGRAM_PROFILE = "https://www.instagram.com/biscoitosmima/";
const INSTAGRAM_DIRECT = "https://www.instagram.com/direct/t/17849015700317148/";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-petal-pink/95 backdrop-blur-md border-b border-warm-dust/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-berry-glaze/30 bg-flour-white p-0.5 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/MIMA-1.svg"
              alt="Logo Mima Biscoitos"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-headline-md text-3xl font-bold text-berry-glaze tracking-tight">
            Mima
          </span>
        </Link>

        {/* Desktop Navigation Links with Animated Underline on Hover */}
        <nav
          aria-label="Navegação Principal"
          className="hidden md:flex items-center gap-8 font-label-md"
        >
          <a
            href="#"
            className="relative text-on-surface-variant hover:text-berry-glaze transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-berry-glaze hover:after:w-full after:transition-all after:duration-300"
          >
            Início
          </a>
          <a
            href="#nossa-historia"
            className="relative text-on-surface-variant hover:text-berry-glaze transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-berry-glaze hover:after:w-full after:transition-all after:duration-300"
          >
            Nossa História
          </a>
          <a
            href="#produtos"
            className="relative text-on-surface-variant hover:text-berry-glaze transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-berry-glaze hover:after:w-full after:transition-all after:duration-300"
          >
            Nosso Biscoito
          </a>
          <a
            href="#depoimentos"
            className="relative text-on-surface-variant hover:text-berry-glaze transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-berry-glaze hover:after:w-full after:transition-all after:duration-300"
          >
            Depoimentos
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={INSTAGRAM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-berry-glaze text-flour-white font-label-md px-5 py-2.5 rounded-lg shadow-md hover:bg-primary hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Peça no Direct</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={INSTAGRAM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-berry-glaze text-flour-white text-xs font-label-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 active:scale-95 transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Direct</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            className="text-berry-glaze p-2 rounded-lg hover:bg-berry-glaze/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-warm-dust/20 px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 font-label-md">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-berry-glaze font-bold text-lg py-1 border-b border-warm-dust/10"
            >
              Início
            </a>
            <a
              href="#nossa-historia"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-berry-glaze text-lg py-1 border-b border-warm-dust/10"
            >
              Nossa História
            </a>
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-berry-glaze text-lg py-1 border-b border-warm-dust/10"
            >
              Nosso Biscoito
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-berry-glaze text-lg py-1 border-b border-warm-dust/10"
            >
              Depoimentos
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={INSTAGRAM_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-berry-glaze text-flour-white font-label-md py-3 rounded-lg flex items-center justify-center gap-2 text-center"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Peça no Direct do Instagram</span>
              </a>
              <a
                href={INSTAGRAM_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-berry-glaze text-berry-glaze font-label-md py-2.5 rounded-lg flex items-center justify-center gap-2 text-center"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Ver Perfil @biscoitosmima</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
