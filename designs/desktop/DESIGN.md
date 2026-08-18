---
name: Mima Artisanal
colors:
  surface: '#fff8f7'
  surface-dim: '#ead5d5'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#ffe9e8'
  surface-container-high: '#f9e3e3'
  surface-container-highest: '#f3dedd'
  on-surface: '#241919'
  on-surface-variant: '#59413e'
  inverse-surface: '#3a2d2d'
  inverse-on-surface: '#ffedec'
  outline: '#8d706d'
  outline-variant: '#e0bfbb'
  surface-tint: '#af2f29'
  primary: '#5e0004'
  on-primary: '#ffffff'
  primary-container: '#840d0f'
  on-primary-container: '#ff8c80'
  inverse-primary: '#ffb4ab'
  secondary: '#90494c'
  on-secondary: '#ffffff'
  secondary-container: '#fda3a6'
  on-secondary-container: '#79363a'
  tertiary: '#34272d'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b3d43'
  on-tertiary-container: '#bba8af'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#8d1514'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b4'
  on-secondary-fixed: '#3b070e'
  on-secondary-fixed-variant: '#743236'
  tertiary-fixed: '#f3dde5'
  tertiary-fixed-dim: '#d6c1c9'
  on-tertiary-fixed: '#24181e'
  on-tertiary-fixed-variant: '#514349'
  background: '#fff8f7'
  on-background: '#241919'
  surface-variant: '#f3dedd'
  flour-white: '#ffffff'
  berry-glaze: '#840d0f'
  petal-pink: '#fae4ec'
  warm-dust: '#b8696c'
typography:
  headline-xl:
    fontFamily: ebGaramond
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: ebGaramond
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: beVietnamPro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: beVietnamPro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: beVietnamPro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system for Mima is built on the concept of "Artisanal Warmth." It bridges the gap between a high-end boutique and a cozy, neighborhood bakery. The personality is intimate, sophisticated, and deeply sensory—evoking the smell of fresh butter and the tactile joy of hand-wrapped treats.

The visual style is **Modern Minimalism with a Tactile edge**. We prioritize generous whitespace and a "soft-focus" aesthetic to let the product photography feel lush and appetizing. The design avoids harsh technicality in favor of fluid lines and organic harmony, ensuring every interaction feels as considered as a handmade cookie.

**Key Brand Pillars:**
- **Handcrafted Quality:** Reflected through high-contrast serif typography and unique icon accents.
- **Inviting Warmth:** Achieved through a palette of "tasty" pinks and deep berry tones.
- **Premium Simplicity:** A refined, uncluttered interface that signals exclusivity and care.

## Colors

The palette is derived from natural ingredients: deep berries, soft dough, and dusting sugars.

- **Primary (Berry Glaze):** A deep, sophisticated red used for brand identity, primary actions, and critical headings. It provides the "premium" anchor for the brand.
- **Secondary (Warm Dust):** A muted, earthy rose used for secondary buttons, icons, and supportive accents.
- **Tertiary (Petal Pink):** The primary surface tint. It replaces harsh whites in large containers to maintain a "warm" environmental feel.
- **Neutral:** A warm, desaturated cocoa-gray used for body text to ensure readability without the starkness of pure black.

**Application Note:** Use `flour-white` sparingly for high-contrast moments or inside "card" elements to make them pop against `petal-pink` backgrounds.

## Typography

The typographic pairing emphasizes the "Artisanal" narrative. 

**Headline Font:** *EB Garamond* provides a classical, editorial feel. Its high-contrast strokes and elegant serifs mimic the sophisticated "mima" logotype. Use this for all emotive storytelling and major section headings.

**Body & Label Font:** *Be Vietnam Pro* offers a contemporary, friendly counterpoint. Its clean, geometric forms ensure high legibility for menus and product descriptions while maintaining a soft, approachable character.

**Usage Guidance:**
- Maintain a tight kerning for large headlines to emphasize the "bespoke" feel.
- Use `label-md` with slight letter spacing and uppercase styling for categories or price tags to provide a structured, organized look.

## Layout & Spacing

The layout philosophy is **Fluid & Airy**. We use a 12-column grid for desktop with wide margins to center the eye on product photography.

**Spacing Rhythm:**
- A base 8px unit governs all measurements.
- **Vertical Rhythm:** Use generous `stack-lg` (48px) between different product categories to allow the design to "breathe."
- **Mobile Adaptivity:** On mobile, margins reduce to 16px, and multi-column product grids reflow to a single, high-impact vertical list with large, edge-to-edge imagery.

Elements should never feel crowded; if in doubt, increase the whitespace to enhance the premium feel of the brand.

## Elevation & Depth

We avoid heavy, technical shadows. Depth is achieved through **Tonal Layering** and **Soft Ambient Glows**.

- **Surface Strategy:** Use `petal-pink` as the base canvas. Components like cards and modals should use `flour-white` to create a natural, "raised" appearance without needing dark shadows.
- **Shadows:** When necessary (e.g., a floating "Add to Cart" button), use a very diffused, low-opacity shadow tinted with `berry-glaze` (e.g., 10% opacity) rather than pure black. This maintains the warm, color-rich environment.
- **Soft Outlines:** For input fields and secondary containers, use a 1px border in `warm-dust` at 30% opacity to provide structure without creating "hard" edges.

## Shapes

The shape language is "Softly Organic." We avoid sharp corners to maintain the friendly, "sweet" brand persona, but we also avoid full "pill" shapes to keep the aesthetic refined and editorial.

- **Primary Radius:** 0.5rem (8px). This is applied to buttons, cards, and input fields.
- **Large Components:** Images and large promotional banners use 1rem (16px) to emphasize the soft, artisanal quality.
- **Iconography:** Use the "four-pointed sparkle" from the brand identity as a recurring decorative motif—placed as a floating accent near product titles or as a bullet point in lists.

## Components

- **Buttons:** Primary buttons are solid `berry-glaze` with `flour-white` text and 8px rounded corners. Secondary buttons use a `warm-dust` ghost-style border.
- **Cards:** Product cards should have a `flour-white` background, a very subtle `berry-glaze` tinted shadow, and 16px rounded corners. Images inside should be slightly inset to feel like they are "held" by the card.
- **Input Fields:** Use a 1px border of `warm-dust` (50% opacity). When focused, the border becomes `berry-glaze` with a soft 4px outer glow of the same color.
- **Chips/Tags:** For flavors (e.g., "Sea Salt," "Dark Choc"), use `petal-pink` backgrounds with `primary` colored text in the `label-md` style.
- **Checkboxes/Radios:** These should be custom-styled to use the `berry-glaze` color for the "selected" state, avoiding default system blues.
- **Lists:** Use the "four-pointed sparkle" icon as the list bullet to reinforce the brand identity in product details.