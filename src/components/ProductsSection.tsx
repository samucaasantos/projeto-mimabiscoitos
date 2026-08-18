import Image from "next/image";
import { ShoppingBag, Star, Sparkles, Heart, Gift, ShieldCheck } from "lucide-react";

const INSTAGRAM_DIRECT = "https://www.instagram.com/direct/t/17849015700317148/";

export default function ProductsSection() {
  return (
    <section id="produtos" className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 bg-petal-pink text-berry-glaze font-label-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm">
          <Star className="w-4 h-4 fill-berry-glaze text-berry-glaze" />
          <span>Nossa Receita Exclusiva</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary-container font-bold tracking-tight">
          Nosso Biscoito Especial
        </h2>
        <p className="font-body-md text-on-surface-variant text-base md:text-lg">
          Um clássico artesanal feito com manteiga pura e coberto parcialmente com chocolate nobre.
        </p>
      </div>

      {/* Featured Main Card: Biscoito Amanteigado Mima */}
      <div className="max-w-5xl mx-auto mb-16 bg-flour-white rounded-2xl card-shadow overflow-hidden border border-warm-dust/30 flex flex-col md:flex-row group hover:border-warm-dust/60 transition-all duration-300">
        <div className="md:w-1/2 h-72 sm:h-96 md:h-auto relative overflow-hidden">
          <Image
            src="/biscoito_com_calda.jpg"
            alt="Biscoito amanteigado Mima coberto parcialmente com chocolate"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 left-4 bg-berry-glaze text-flour-white text-xs font-label-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-secondary-container" />
            <span>Produto Assinatura Mima</span>
          </div>
        </div>

        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-on-surface-variant/80 font-label-md">Receita de Família</span>
            </div>

            <h3 className="font-headline-md text-3xl md:text-4xl text-primary-container font-bold mb-4">
              Biscoito Amanteigado Mima
            </h3>

            <p className="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
              Nossa estrela exclusiva: um biscoito amanteigado doce, incrivelmente leve e crocante, coberto parcialmente com chocolate nobre selecionado. Cada mordida traz o contraste perfeito entre o derreter da massa amanteigada e o sabor aveludado do chocolate.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 text-xs sm:text-sm font-label-md text-berry-glaze">
              <div className="flex items-center gap-2 bg-petal-pink/60 p-2.5 rounded-lg border border-warm-dust/20">
                <Heart className="w-4 h-4 shrink-0" />
                <span>Manteiga Pura</span>
              </div>
              <div className="flex items-center gap-2 bg-petal-pink/60 p-2.5 rounded-lg border border-warm-dust/20">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Chocolate Nobre</span>
              </div>
            </div>
          </div>

          <a
            href={INSTAGRAM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-berry-glaze text-flour-white font-label-md px-6 py-4 rounded-xl hover:bg-primary active:scale-95 transition-all shadow-[0_4px_14px_rgba(132,13,15,0.2)] flex items-center justify-center gap-2 text-base sm:text-lg group/btn"
          >
            <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            <span>Peça o Seu no Direct</span>
          </a>
        </div>
      </div>

      {/* Presentation Options Grid */}
      <div className="max-w-5xl mx-auto">
        <h3 className="font-headline-md text-2xl md:text-3xl text-primary-container font-bold text-center mb-8">
          Escolha como Deseja Receber
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pote de Vidro */}
          <div className="bg-flour-white rounded-2xl card-shadow overflow-hidden border border-warm-dust/20 flex flex-col justify-between group hover:border-warm-dust/50 transition-all duration-300">
            <div>
              <div className="w-full h-64 relative overflow-hidden">
                <Image
                  src="/biscoito_no_pote.jpg"
                  alt="Biscoitos amanteigados Mima no pote de vidro hermético"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-petal-pink text-berry-glaze text-xs font-label-md px-3 py-1 rounded-full border border-warm-dust/20 shadow-sm flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5" />
                  <span>Embalagem Pote de Vidro</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-headline-sm text-2xl text-primary-container font-bold mb-2">
                  Pote Hermético Mima
                </h4>
                <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed">
                  Ideal para presentear ou ter sempre em casa. Mantém o biscoito amanteigado com chocolate super crocante e com aroma de recém-assado por semanas.
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
              <a
                href={INSTAGRAM_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-petal-pink text-berry-glaze hover:bg-berry-glaze hover:text-flour-white font-label-md px-5 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base font-bold border border-warm-dust/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pedir no Pote via Direct</span>
              </a>
            </div>
          </div>

          {/* Fornada do Dia */}
          <div className="bg-flour-white rounded-2xl card-shadow overflow-hidden border border-warm-dust/20 flex flex-col justify-between group hover:border-warm-dust/50 transition-all duration-300">
            <div>
              <div className="w-full h-64 relative overflow-hidden">
                <Image
                  src="/biscoito_na_forma.jpg"
                  alt="Fornada de biscoitos amanteigados Mima na forma"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-petal-pink text-berry-glaze text-xs font-label-md px-3 py-1 rounded-full border border-warm-dust/20 shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fornada Fresca do Dia</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-headline-sm text-2xl text-primary-container font-bold mb-2">
                  Pacote Afetivo Fresquinho
                </h4>
                <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed">
                  Biscoitos amanteigados assados diariamente em pequenas quantidades, embalados com laço e carinho para chegar perfeitos na sua casa.
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
              <a
                href={INSTAGRAM_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-petal-pink text-berry-glaze hover:bg-berry-glaze hover:text-flour-white font-label-md px-5 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base font-bold border border-warm-dust/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pedir Fornada Fresca</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
