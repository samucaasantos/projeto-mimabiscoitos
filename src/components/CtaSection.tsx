import { Cookie, ArrowUpRight } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

const INSTAGRAM_DIRECT = "https://www.instagram.com/direct/t/17849015700317148/";
const INSTAGRAM_PROFILE = "https://www.instagram.com/biscoitosmima/";

export default function CtaSection() {
  return (
    <section className="w-full bg-berry-glaze py-16 md:py-24 text-flour-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <Cookie className="w-[600px] h-[600px] text-flour-white" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
        <div className="w-16 h-16 rounded-full bg-flour-white/10 flex items-center justify-center border border-flour-white/20">
          <Cookie className="w-9 h-9 text-flour-white" />
        </div>

        <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Pronto para adoçar seu dia?
        </h2>

        <p className="font-body-lg text-flour-white/90 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
          Nossas fornadas são limitadas para garantir o máximo frescor e qualidade impecável. Garanta o seu pacote especial hoje mesmo.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
          <a
            href={INSTAGRAM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-flour-white text-berry-glaze font-label-md px-8 py-4 rounded-full shadow-xl hover:bg-petal-pink active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 text-base sm:text-lg font-bold"
          >
            <InstagramIcon className="w-5 h-5 text-berry-glaze" />
            <span>Peça agora pelo Direct</span>
          </a>

          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-flour-white/40 text-flour-white hover:bg-flour-white/10 font-label-md px-6 py-4 rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>Seguir @biscoitosmima</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
