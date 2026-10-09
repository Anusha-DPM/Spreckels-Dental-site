'use client'

import Image from 'next/image'

type BlogImageProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
}

function isOptimizableRemoteUrl(src: string) {
  if (!src.startsWith('http')) return true

  try {
    const hostname = new URL(src).hostname
    return (
      hostname === 'res.cloudinary.com' ||
      hostname.endsWith('firebasestorage.googleapis.com') ||
      hostname.endsWith('googleapis.com') ||
      hostname.endsWith('firebaseapp.com') ||
      hostname.endsWith('appspot.com') ||
      hostname.endsWith('firebasestorage.app')
    )
  } catch {
    return false
  }
}

export default function BlogImage({
  src,
  alt,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 66vw',
  fill = false,
  width,
  height,
}: BlogImageProps) {
  const unoptimized = !isOptimizableRemoteUrl(src)

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
        quality={80}
        unoptimized={unoptimized}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 640}
      height={height ?? 360}
      className={className}
      sizes={sizes}
      priority={priority}
      quality={80}
      unoptimized={unoptimized}
    />
  )
}
