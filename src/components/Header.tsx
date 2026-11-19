import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Navigation } from "./Navigation";

export interface HeaderProps {
  /**
   * Ім'я або назва бренду.
   */
  brandName: string;
  /**
   * Аватар біля імені. Імпортуй картинку з теки `assets`.
   */
  avatar: StaticImageData;
  /**
   * Куди веде клік по бренду.
   * @default "#top"
   */
  brandHref?: string;
  /**
   * `id` активного пункту меню.
   */
  activeId?: string;
  /**
   * Кнопки праворуч (наприклад, LinkedIn і Resume). На вузькому екрані
   * ховаються, лишається бренд і кнопка меню.
   */
  actions?: ReactNode;
}

/**
 * Шапка сайту: бренд (аватар і ім'я), навігація, кнопки дій. Липка,
 * з ефектом матового скла (`bg-canvas` з прозорістю й `backdrop-blur-glass`).
 */
export function Header({
  brandName,
  avatar,
  brandHref = "#top",
  activeId,
  actions,
}: HeaderProps) {
  return (
    <header className="sticky top-4 z-10 mx-4 mt-4 md:mx-auto md:w-max md:max-w-full">
      <div className="flex items-center justify-between gap-6 rounded-card border border-line bg-canvas/60 px-3 py-2 backdrop-blur-glass md:justify-start">
        <a
          href={brandHref}
          className="flex items-center gap-3 rounded-control font-display text-label text-ink outline-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Image
            src={avatar}
            alt=""
            className="aspect-avatar h-8 w-8 rounded-control object-cover"
          />
          <span className="hidden sm:inline">{brandName}</span>
        </a>
        <Navigation activeId={activeId} />
        {actions ? (
          <div className="hidden items-center gap-2 md:flex">{actions}</div>
        ) : null}
      </div>
    </header>
  );
}
