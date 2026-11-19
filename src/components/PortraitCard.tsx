import Image from "next/image";
import type { StaticImageData } from "next/image";

export interface PortraitCardProps {
  /**
   * Портрет. Імпортуй картинку з теки `assets`.
   */
  image: StaticImageData;
  /**
   * Alt-текст портрета.
   */
  alt: string;
  /**
   * Ім'я на плашці внизу.
   */
  name: string;
  /**
   * Роль під іменем.
   */
  role: string;
}

/**
 * Картка з портретом: фото за пропорцією `aspect-portrait`, нахил
 * `tilt-card`, плашка з іменем і роллю з ефектом матового скла.
 * Кути `rounded-card`. Навколо потрібен запас місця: нахилена картка
 * виступає за свою рамку.
 */
export function PortraitCard({ image, alt, name, role }: PortraitCardProps) {
  return (
    <figure className="tilt-card relative aspect-portrait w-full overflow-hidden rounded-card border border-line bg-surface">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover object-top"
      />
      <figcaption className="absolute inset-x-3 bottom-3 flex flex-col gap-2 rounded-card border border-line bg-canvas/60 px-4 py-3 backdrop-blur-glass">
        <span className="font-display text-heading text-ink">{name}</span>
        <span className="font-text text-caption text-ink-muted">{role}</span>
      </figcaption>
    </figure>
  );
}
