import Image from "next/image";
import { MapPin, Clock, Heart } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

const INSTAGRAM_PROFILE = "https://www.instagram.com/biscoitosmima/";
const INSTAGRAM_DIRECT = "https://www.instagram.com/direct/t/17849015700317148/";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-warm-dust/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-berry-glaze/30 bg-flour-white p-0.5">
              <Image
                src="/MIMA-1.svg"
                alt="Logo Mima"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-headline-sm text-2xl font-bold text-berry-glaze">
              Mima Artisanal Cookies
            </span>
          </div>

          <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
            Resgatando memórias afetivas através do sabor artesanal dos biscoitos feitos à mão com ingredientes nobres.
          </p>

          <div className="flex flex-col gap-2 pt-2 text-sm text-on-surface font-body-md">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <MapPin className="w-4 h-4 text-berry-glaze shrink-0" />
              <span>Salvador, Bahia — Brasil</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Clock className="w-4 h-4 text-berry-glaze shrink-0" />
              <span>Segunda a Sábado, das 10h às 19h</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-3 font-label-md text-sm">
          <h3 className="font-bold text-berry-glaze text-base mb-1">Navegação</h3>
          <a
            href="#"
            className="text-on-surface-variant hover:text-berry-glaze transition-colors"
          >
            Início
          </a>
          <a
            href="#nossa-historia"
            className="text-on-surface-variant hover:text-berry-glaze transition-colors"
          >
            Nossa História
          </a>
          <a
            href="#produtos"
            className="text-on-surface-variant hover:text-berry-glaze transition-colors"
          >
            Nosso Biscoito
          </a>
          <a
            href="#depoimentos"
            className="text-on-surface-variant hover:text-berry-glaze transition-colors"
          >
            Depoimentos
          </a>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col gap-3 font-label-md text-sm">
          <h3 className="font-bold text-berry-glaze text-base mb-1">Contato & Redes</h3>
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-berry-glaze transition-colors flex items-center gap-2"
          >
            <InstagramIcon className="w-4 h-4 text-berry-glaze" />
            <span>@biscoitosmima</span>
          </a>
          <a
            href={INSTAGRAM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-berry-glaze transition-colors"
          >
            Fazer Pedido no Direct
          </a>
          <span className="text-on-surface-variant/70 text-xs pt-2">
            Horário de Atendimento: 10h às 19h
          </span>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full text-center py-4 border-t border-warm-dust/20 text-on-surface-variant text-xs sm:text-sm px-6 flex items-center justify-center gap-1.5 bg-petal-pink/50">
        <span>© 2026 Mima Artisanal Cookies. Feito à mão com</span>
        <Heart className="w-3.5 h-3.5 text-berry-glaze fill-berry-glaze inline" />
        <span>em Salvador.</span>
      </div>
    </footer>
  );
}
