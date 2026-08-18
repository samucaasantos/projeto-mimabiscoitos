# 🍪 Mima Artisanal Cookies — Landing Page

Landing Page moderna, responsiva e de altíssima performance para a **Mima Artisanal Cookies** em Salvador, BA. Desenvolvida em **Next.js 15**, **TypeScript**, **Tailwind CSS v4** e **Google Fonts**.

---

## 🎨 Sistema de Design & Identidade Visual

O design system da Mima baseia-se no conceito de **"Calor Artesanal"** (*Artisanal Warmth*), combinando a elegância de uma confeitaria gourmet boutique com o aconchego de receitas de família.

### 🏛️ Pilares da Marca
- **Qualidade Feita à Mão:** Tipografia clássica de alto contraste e acabamentos delicados.
- **Aconchego & Calidez:** Paleta sensorial de tons amanteigados, rosas suaves e vermelho amora refinado.
- **Simplicidade Premium:** Interface fluida e limpa, destacando a fotografia gastronômica.

### 🎨 Paleta de Cores
- **Berry Glaze (`#840d0f`):** Vermelho amora profundo para identidade, títulos principais e ações primárias (*CTAs*).
- **Petal Pink (`#fae4ec`):** Tom rosa suave utilizado como fundo principal para garantir aconchego visual.
- **Flour White (`#ffffff`):** Branco puro utilizado em cards para destacar o produto com alto contraste.
- **Warm Dust (`#b8696c`):** Rosa queimado para bordas sutis, detalhes secundários e acentos.
- **On-Surface (`#241919`):** Cinza-cacau escuro para textos de corpo, garantindo leitura suave sem a rigidez do preto puro.

### ✍️ Tipografia
- **Títulos & Headlines:** `EB Garamond` (Serif) — Estilo editorial clássico, que reflete sofisticação e tradição artesanal.
- **Corpo & Rótulos:** `Be Vietnam Pro` (Sans-Serif) — Forma geométrica limpa e legível para navegação e descrições.

### 📐 Formas, Animações e Sombras
- **Raio de Borda:** `0.5rem` (8px) para botões e `1rem` (16px) para cards e imagens.
- **Sombras Difusas:** Elevações suaves com tonalidade leve em `Berry Glaze` (10% de opacidade).
- **Navegação Interativa:** Menu desktop com indicador animado via pseudo-elemento no `hover`.

---

## 🍪 Produto Exclusivo: Biscoito Amanteigado Mima

A Mima trabalha exclusivamente com a sua receita mestre:
- **Descrição:** Biscoito amanteigado doce, incrivelmente crocante e delicado, coberto parcialmente com chocolate nobre derretido.
- **Apresentações:**
  1. **Pote Hermético de Vidro:** Preserva a crocância e o aroma inconfundível por semanas.
  2. **Pacote Afetivo da Fornada Fresca:** Assado diariamente em pequenas quantidades para ser entregue quentinho.

---

## 📂 Estrutura do Projeto

```text
projeto-mima/
├── public/                     # Ativos públicos (Imagens JPG e Logos SVG)
│   ├── biscoito_com_calda.jpg # Biscoito Amanteigado Mima
│   ├── biscoito_na_forma.jpg   # Fornada do Dia na Forma
│   ├── biscoito_no_pote.jpg    # Pote de Vidro Hermético
│   └── MIMA-1.svg              # Marca oficial Mima
├── src/
│   ├── app/
│   │   ├── globals.css         # Configuração de temas e tokens Tailwind v4
│   │   ├── layout.tsx          # Meta/SEO, OpenGraph, JSON-LD e Fontes Google
│   │   └── page.tsx            # Página principal montada com componentes
│   └── components/
│       ├── Header.tsx          # Cabeçalho com nav animado e drawer mobile
│       ├── Hero.tsx            # Seção Hero com CTA e badges
│       ├── HistorySection.tsx  # História da marca e valores
│       ├── ProductsSection.tsx # Apresentação do Biscoito Amanteigado Mima
│       ├── TestimonialsSection.tsx # Depoimentos de clientes
│       ├── CtaSection.tsx      # Chamada final para pedido
│       ├── Footer.tsx          # Rodapé completo com horários e localização
│       └── icons/
│           └── InstagramIcon.tsx # Ícone SVG otimizado do Instagram
├── .gitignore                  # Arquivo de exclusão do Git (inclui temp_app e .next)
├── eslint.config.mjs           # Configuração ESLint Flat
├── next.config.ts              # Configuração Next.js
├── package.json                # Dependências do projeto
├── postcss.config.mjs          # Configuração PostCSS
└── tsconfig.json               # Configuração TypeScript
```

---

## ⚡ SEO & Otimizações de Desempenho

- **JSON-LD Structured Data:** Inclusão de marcadores para motores de busca (`schema.org/Bakery`).
- **Otimização de Imagens:** Componentes `<Image>` com tamanho responsivo, `priority` para o Hero e `loading="lazy"` para os demais.
- **Performance:** 100% de páginas pré-renderizadas estaticamente (*Prerendered Static Content*).

---

## 🔗 Links Globais de Redirecionamento

- **Perfil no Instagram:** [https://www.instagram.com/biscoitosmima/](https://www.instagram.com/biscoitosmima/)
- **Direct do Instagram:** [https://www.instagram.com/direct/t/17849015700317148/](https://www.instagram.com/direct/t/17849015700317148/)

---

## 🚀 Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Iniciar ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Iniciar servidor de produção
npm run start
```
