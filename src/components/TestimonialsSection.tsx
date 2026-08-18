import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "A combinação do biscoito amanteigado derretendo na boca com a casquinha de chocolate nobre é perfeita. Virou meu vício semanal!",
    author: "Mariana C.",
    location: "Salvador, BA",
    initial: "M",
  },
  {
    id: 2,
    quote:
      "Dá para sentir o carinho em cada embalagem. O sabor da manteiga de verdade com o chocolate faz desse biscoito o presente ideal.",
    author: "Lucas T.",
    location: "Salvador, BA",
    initial: "L",
  },
  {
    id: 3,
    quote:
      "Ingredientes de altíssima qualidade. É disparado o melhor biscoito amanteigado com chocolate que já comi em Salvador!",
    author: "Julia S.",
    location: "Salvador, BA",
    initial: "J",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="w-full bg-surface-container py-16 md:py-24 border-y border-warm-dust/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="inline-flex justify-center text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary-container font-bold tracking-tight">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="font-body-md text-on-surface-variant text-base">
            Depoimentos reais de quem provou e se apaixonou pelas nossas fornadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-flour-white p-6 sm:p-8 rounded-2xl border border-warm-dust/20 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary-container/40" />

              <div className="relative z-10 mb-6">
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-body-md text-on-surface-variant italic text-base sm:text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-warm-dust/10">
                <div className="w-10 h-10 rounded-full bg-petal-pink flex items-center justify-center text-berry-glaze font-bold font-label-md text-base border border-warm-dust/20 shrink-0">
                  {t.initial}
                </div>
                <div>
                  <h3 className="font-label-md text-berry-glaze font-bold text-sm">
                    {t.author}
                  </h3>
                  <p className="text-xs text-on-surface-variant/70">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
