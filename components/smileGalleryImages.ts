export const SMILE_GALLERY_IMAGES = Array.from({ length: 11 }, (_, index) => ({
  src: `/smile gallery/${index + 1}.png`,
  alt: `Smile Gallery ${index + 1}`,
}))

export const SMILE_GALLERY_PREVIEW_IMAGES = SMILE_GALLERY_IMAGES.slice(0, 3)
