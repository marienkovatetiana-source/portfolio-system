"use client";

import Link from "next/link";
import { useId } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "soft";
type ButtonSize = "md" | "lg";

interface ButtonBaseProps {
  /**
   * Вигляд кнопки.
   * `primary` — основна дія, заливка `accent`.
   * `secondary` — другорядна дія, без заливки, межа `ink-muted`.
   * `ghost` — тільки текст, без межі й заливки; для третьорядних дій (LinkedIn).
   * `soft` — на «підложці» `surface` з м'якою тінню; для дій у шапці (Resume).
   * @default "primary"
   */
  variant?: ButtonVariant;
  /**
   * Розмір: `md` — звичайний, `lg` — великий.
   * @default "md"
   */
  size?: ButtonSize;
  /**
   * Вимкнена кнопка. Це `aria-disabled`, а не атрибут `disabled`:
   * кнопка лишається у фокусі, але натискання нічого не робить.
   * @default false
   */
  disabled?: boolean;
  /**
   * Пояснення під вимкненою кнопкою, чому вона недоступна.
   * Зв'язується з кнопкою через `aria-describedby`.
   * Показується тільки коли `disabled` увімкнено.
   */
  disabledReason?: string;
  /**
   * Кругла іконка-стрілка праворуч від тексту. Стрілка повертається на 45°
   * при hover і focus. Для основних дій на кшталт «View work».
   * @default false
   */
  arrow?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
    /** Без `href` це звичайна кнопка. */
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    /**
     * Адреса: з `href` кнопка стає посиланням (`<a>`) з тим самим виглядом.
     * Для переходу на сторінку чи якір, а не для дії.
     */
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-control border font-display text-button " +
  "transition-colors outline-ink focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

// With the arrow icon the right padding is smaller: the round icon sits close
// to the edge of the pill.
const sizesWithArrow: Record<ButtonSize, string> = {
  md: "py-2 pl-6 pr-2",
  lg: "py-3 pl-8 pr-3",
};

// Round icon: inverted colors of the button; the button swaps on hover, so does the icon.
const arrowStyle: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-accent group-hover:bg-accent group-hover:text-ink",
  secondary: "bg-ink text-accent",
  ghost: "bg-ink text-accent",
  soft: "bg-ink text-accent",
};
const arrowDisabledStyle = "bg-line text-ink-muted";

function ArrowIcon({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-8 w-8 flex-none place-items-center rounded-control transition-colors ${className}`}
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
  );
}

// Working states: default + hover.
const enabled: Record<ButtonVariant, string> = {
  primary:
    "cursor-pointer border-accent bg-accent text-ink hover:border-ink hover:bg-ink hover:text-accent",
  secondary:
    "cursor-pointer border-ink-muted bg-canvas text-ink hover:border-accent hover:bg-accent",
  ghost:
    "cursor-pointer border-transparent bg-transparent text-ink-muted hover:border-accent hover:bg-accent hover:text-ink hover:shadow-soft",
  soft:
    "cursor-pointer border-surface bg-surface text-ink shadow-soft hover:border-accent hover:bg-accent",
};

// Disabled: no hover change, muted text that still stays readable.
const disabledStyle =
  "cursor-not-allowed border-line bg-surface text-ink-muted";

/**
 * Кнопка дизайн-системи. Основна й другорядна, два розміри.
 * З `href` це посилання з виглядом кнопки.
 * Кути завжди `rounded-control`. Усі кольори, розміри тексту й відступи
 * беруться з токенів `@theme`.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    disabled = false,
    disabledReason,
    arrow = false,
    className,
    children,
  } = props;
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);

  const classes = [
    "group",
    base,
    arrow ? `${sizesWithArrow[size]} gap-3` : sizes[size],
    disabled ? disabledStyle : enabled[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {arrow ? (
        <ArrowIcon className={disabled ? arrowDisabledStyle : arrowStyle[variant]} />
      ) : null}
    </>
  );

  let control;
  if (props.href) {
    const {
      variant: _v,
      size: _s,
      disabled: _d,
      disabledReason: _r,
      arrow: _a,
      className: _c,
      children: _ch,
      href,
      onClick,
      ...rest
    } = props;
    void [_v, _s, _d, _r, _a, _c, _ch];
    control = (
      <Link
        {...rest}
        href={href}
        aria-disabled={disabled || undefined}
        aria-describedby={showReason ? reasonId : rest["aria-describedby"]}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          if (disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        className={classes}
      >
        {content}
      </Link>
    );
  } else {
    const {
      variant: _v,
      size: _s,
      disabled: _d,
      disabledReason: _r,
      arrow: _a,
      className: _c,
      children: _ch,
      href: _h,
      onClick,
      type = "button",
      ...rest
    } = props as ButtonAsButton;
    void [_v, _s, _d, _r, _a, _c, _ch, _h];
    control = (
      <button
        {...rest}
        type={type}
        aria-disabled={disabled || undefined}
        aria-describedby={showReason ? reasonId : rest["aria-describedby"]}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          if (disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        className={classes}
      >
        {content}
      </button>
    );
  }

  return (
    <div className="inline-flex flex-col items-start gap-2">
      {control}
      {showReason ? (
        <p id={reasonId} className="font-text text-caption text-ink-muted">
          {disabledReason}
        </p>
      ) : null}
    </div>
  );
}
