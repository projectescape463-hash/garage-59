const base = import.meta.env.BASE_URL

export const IMG = {
  hero: `${base}images/hero.jpg`,
  workshop: `${base}images/workshop.jpg`,
  detail: `${base}images/detail.jpg`,
  gallery: [
    `${base}images/gallery-1.jpg`,
    `${base}images/gallery-2.jpg`,
    `${base}images/gallery-3.jpg`,
    `${base}images/gallery-4.jpg`,
    `${base}images/gallery-5.jpg`,
  ] as const,
}
