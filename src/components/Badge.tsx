import type { ReactNode } from "react";

export interface BadgeProps {
  /**
   * Текст бейджа.
   */
  children: ReactNode;
  /**
   * HTML-елемент: `p` для звичайної мітки, `h2` коли бейдж є назвою секції.
   * Вигляд однаковий.
   * @default "p"
   */
  as?: "p" | "h2" | "span";
}

/**
 * Бейдж: мітка-«пігулка» з лаймовою крапкою. Для назв секцій і коротких
 * позначок. Один вигляд для всіх місць, де він зустрічається.
 */
export function Badge({ children, as: Tag = "p" }: BadgeProps) {
  return (
    <Tag className="inline-flex w-fit items-center gap-2 rounded-control border border-line bg-canvas py-2 pl-3 pr-4 font-display text-label text-ink">
      <span
        aria-hidden="true"
        className="h-3 w-3 flex-none rounded-control border border-line bg-accent"
      />
      {children}
    </Tag>
  );
}
