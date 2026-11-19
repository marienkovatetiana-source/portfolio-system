import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

export interface WorkCardProps {
  /**
   * Назва роботи.
   */
  title: string;
  /**
   * Короткий опис: тип проєкту одним рядком.
   */
  description: string;
  /**
   * Обкладинка. Імпортуй картинку з теки `assets`, не з `public`.
   */
  cover: StaticImageData;
  /**
   * Alt-текст обкладинки. За замовчуванням порожній: обкладинка
   * декоративна, бо назва вже є в тексті посилання.
   * @default ""
   */
  coverAlt?: string;
  /**
   * Куди веде картка (сторінка кейсу).
   */
  href: string;
}

/**
 * Картка роботи: обкладинка, назва, короткий опис. Уся картка — одне
 * посилання. Кути `rounded-card`, обкладинка за пропорцією `aspect-cover`,
 * на обкладинці кругла іконка-стрілка (скло з `accent`, колір `accent-deep`).
 */
export function WorkCard({
  title,
  description,
  cover,
  coverAlt = "",
  href,
}: WorkCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-card border border-line bg-surface p-3 outline-ink transition-colors hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <div className="relative aspect-cover overflow-hidden rounded-card bg-line">
        <Image
          src={cover}
          alt={coverAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover object-top"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-3 grid h-8 w-8 place-items-center rounded-control border border-canvas/50 bg-accent/75 text-accent-deep backdrop-blur-glass transition-colors group-hover:bg-accent-deep/85 group-hover:text-accent group-focus-visible:bg-accent-deep/85 group-focus-visible:text-accent"
        >
          <svg
            viewBox="0 0 14 14"
            fill="none"
            className="h-4 w-4 transition-transform group-hover:rotate-45 group-focus-visible:rotate-45"
          >
            <path
              d="M4 10L10 4M10 4H5M10 4V9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h3 className="font-display text-heading text-ink group-hover:underline">
          {title}
        </h3>
        <p className="font-text text-body text-ink-muted">{description}</p>
      </div>
    </Link>
  );
}
