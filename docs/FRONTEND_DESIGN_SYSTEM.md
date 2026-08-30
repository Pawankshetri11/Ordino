# Ordino Frontend Design System

This guide keeps the product calm, modern, and consistent while the restaurant
MVP grows.

## Direction

- Use full-page layouts for major flows. Avoid page-sized floating cards.
- Keep operational screens quiet, scan-friendly, and fast to use.
- Orange is the brand action color, not the only color in the interface.
- Use original restaurant-focused illustration where a screen needs personality.
- Keep modules practical: one screen, one style file, reusable primitives, and
  separate business logic.

## Typography

Use Poppins with only these weights:

| Token | Font | Use |
| --- | --- | --- |
| `fonts.light` | Poppins 300 | Body copy, helper text, input values |
| `fonts.regular` | Poppins 400 | Titles, labels, links |
| `fonts.medium` | Poppins 500 | Brand name, primary actions, selected states |

Rules:

- Do not use weights 600 to 900.
- Use spacing and size for hierarchy instead of heavy font weight.
- Keep letter spacing at `0`.
- Body text should stay around 14 to 16 px with comfortable line height.

## Color Tokens

Tokens live in `frontend/src/theme/tokens.ts`.

| Token | Value | Use |
| --- | --- | --- |
| `brand` | `#FF6A1A` | Primary actions and brand accents |
| `brandPressed` | `#E9540C` | Pressed actions and orange links |
| `brandSoft` | `#FFF0E6` | Subtle icon backgrounds |
| `brandWash` | `#FFF8F3` | Warm secondary surfaces |
| `canvas` | `#FFFDFC` | Main app background |
| `surface` | `#FFFFFF` | Inputs and small elevated controls |
| `night` | `#111827` | Premium dark visual surfaces |
| `ink` | `#1C2535` | Primary text |
| `text` | `#3F4858` | Labels and secondary headings |
| `muted` | `#7A8290` | Helper text |
| `border` | `#E8E1DB` | Default borders |
| `danger` | `#B54747` | Validation errors |
| `success` | `#287A52` | Confirmed success states |

Rules:

- Use tokens in code instead of one-off hex values.
- Orange buttons use white text.
- Reserve red and green for semantic feedback.
- Pair the orange brand with neutral, navy, blue, and green accents so the UI
  does not become one-note.

## Shape And Spacing

- Base spacing rhythm: `4, 8, 12, 16, 24, 32, 48, 64`.
- Inputs and primary buttons should be at least 52 px tall.
- Default radius for controls is 8 px.
- Use soft shadows sparingly. Borders should do most of the separation.
- Avoid nesting cards inside cards.

## Auth Layout

- Desktop login uses a full-width split layout: visual story on the left, form on
  the right.
- Mobile login uses a compact visual header followed by the form.
- The form can have a readable internal width, but the page itself should not sit
  inside a container card.
- Registration does not appear on the auth page. New restaurants should be added
  later through onboarding/admin flows.

## Illustration

- Use semi-3D editorial restaurant characters with clean transparent PNG edges.
- Keep the palette connected to orange, cream, navy, and restrained accents.
- Do not embed UI text, logos, or essential instructions inside illustration.
- One strong illustration is enough for an auth or onboarding surface.

## Accessibility

- Interactive targets should be at least 44 by 44 px.
- Keep visible labels for inputs.
- Validation must use text, not only color.
- Decorative illustration must never carry essential instructions.
