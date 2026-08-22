import Image from "next/image";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

const INSTAGRAM_DIRECT = "https://www.instagram.com/direct/t/17849015700317148/";
const INSTAGRAM_PROFILE = "https://www.instagram.com/biscoitosmima/";

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Left Content */}
      <div className="flex-1 space-y-6 text-center md:text-left z-10">
        <div className="inline-flex items-center gap-2 bg-flour-white/80 border border-warm-dust/30 px-3.5 py-1.5 rounded-full shadow-sm text-xs md:text-sm font-label-md text-berry-glaze backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-berry-glaze animate-pulse" />
          <span>Feito à mão em Salvador, BA</span>
        </div>

        <h1 className="font-headline-xl text-primary-container text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          Biscoitos Feitos com <span className="italic text-berry-glaze">Alma e Afeto</span>
        </h1>

        <p className="font-body-lg text-on-surface-variant text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
          Sinta o aroma reconfortante da manteiga fresca e a textura inigualável de uma receita artesanal, feita para transformar o seu dia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href={INSTAGRAM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-berry-glaze text-flour-white font-label-md px-8 py-4 rounded-xl shadow-[0_4px_14px_rgba(132,13,15,0.25)] hover:bg-primary hover:shadow-[0_6px_20px_rgba(132,13,15,0.35)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 text-base sm:text-lg group"
          >
            <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Peça pelo Instagram</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-flour-white/70 border border-berry-glaze/30 text-berry-glaze font-label-md px-6 py-3.5 rounded-xl hover:bg-flour-white transition-all text-center text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 text-berry-glaze" />
            <span>Conheça Nosso Perfil</span>
          </a>
        </div>

        {/* Feature Badges */}
        <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-xs sm:text-sm text-on-surface-variant/80 font-label-md border-t border-warm-dust/20 max-w-md mx-auto md:mx-0">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-berry-glaze"></span>
            Assado Diariamente
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-berry-glaze"></span>
            Ingredientes Selecionados
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-berry-glaze"></span>
            Entregas em Salvador
          </span>
        </div>
      </div>

      {/* Right Image Frame */}
      <div className="flex-1 w-full relative">
        <div className="w-full h-[360px] sm:h-[450px] md:h-[520px] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(132,13,15,0.2)] border-4 border-flour-white relative group">
          <Image
            src="/biscoito_na_forma.jpg"
            alt="Biscoitos artesanais Mima recém-assados na forma"
            fill
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-berry-glaze/40 via-transparent to-transparent opacity-60"></div>
          
          {/* Overlay Badge */}
          <div className="absolute bottom-6 left-6 right-6 bg-flour-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-warm-dust/20 flex items-center justify-between">
            <div>
              <p className="font-headline-sm text-lg text-berry-glaze font-bold">Fornada Fresquinha</p>
              <p className="text-xs text-on-surface-variant">Saindo do forno para a sua mesa</p>
            </div>
            <span className="bg-petal-pink text-berry-glaze text-xs font-bold px-3 py-1.5 rounded-full">
              100% Artesanal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
