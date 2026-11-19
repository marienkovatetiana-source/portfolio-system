export interface ReviewCardProps {
  /**
   * Текст відгуку: одне-два речення.
   */
  quote: string;
  /**
   * Ім'я автора відгуку.
   */
  name: string;
  /**
   * Роль автора: посада й компанія чи тип бізнесу.
   */
  role: string;
}

/**
 * Картка відгуку замовника: текст, ім'я й роль. Не клікабельна.
 * Заливка `surface`, межа `line`, кути `rounded-card`.
 */
export function ReviewCard({ quote, name, role }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between gap-6 rounded-card border border-line bg-surface p-6">
      <blockquote className="font-text text-body text-ink">{quote}</blockquote>
      <figcaption className="flex flex-col gap-2">
        <span className="font-display text-label text-ink">{name}</span>
        <span className="font-text text-caption text-ink-muted">{role}</span>
      </figcaption>
    </figure>
  );
}
