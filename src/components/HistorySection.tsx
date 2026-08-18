import Image from "next/image";
import { Cookie, HeartHandshake, Sparkles } from "lucide-react";

export default function HistorySection() {
  return (
    <section
      id="nossa-historia"
      className="w-full bg-surface-bright py-16 md:py-24 border-y border-warm-dust/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
        {/* Content Side */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-petal-pink text-berry-glaze font-label-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm">
            <Cookie className="w-4 h-4" />
            <span>Tradição & Amor</span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-primary-container font-bold tracking-tight">
            Nossa História
          </h2>

          <p className="font-body-md text-on-surface-variant text-base md:text-lg leading-relaxed">
            A Mima nasceu da vontade de resgatar memórias afetivas através do paladar. Cada fornada é um tributo às receitas de família, preparadas com calma, ingredientes reais e um toque de sofisticação.
          </p>

          <p className="font-body-md text-on-surface-variant text-base md:text-lg leading-relaxed">
            Nosso propósito é levar doçura e conforto para a sua rotina, garantindo que cada mordida seja uma experiência sensorial única, do pacote feito à mão ao recheio derretido.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
            <div className="bg-flour-white p-4 rounded-xl border border-warm-dust/20 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-lg bg-petal-pink text-berry-glaze shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-label-md text-berry-glaze font-bold">Afeto em Cada Detalhe</h3>
                <p className="text-xs text-on-surface-variant mt-1">Do preparo manual ao laço na caixa de presente.</p>
              </div>
            </div>

            <div className="bg-flour-white p-4 rounded-xl border border-warm-dust/20 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-lg bg-petal-pink text-berry-glaze shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-label-md text-berry-glaze font-bold">Ingredientes Reais</h3>
                <p className="text-xs text-on-surface-variant mt-1">Sem conservantes, apenas a pureza da boa confeitaria.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="rounded-2xl overflow-hidden p-2.5 bg-flour-white card-shadow border border-warm-dust/20 relative group">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/biscoito_no_pote.jpg"
                alt="Biscoitos artesanais Mima embalados no pote de vidro"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
