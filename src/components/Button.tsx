"use client";

import Link from "next/link";
import { useId } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

interface ButtonBaseProps {
  /**
   * Вигляд кнопки.
   * `primary` — основна дія, заливка `accent`.
   * `secondary` — другорядна дія, без заливки, межа `ink-muted`.
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

// Working states: default + hover.
const enabled: Record<ButtonVariant, string> = {
  primary:
    "cursor-pointer border-accent bg-accent text-ink hover:border-ink hover:bg-ink hover:text-accent",
  secondary:
    "cursor-pointer border-ink-muted bg-canvas text-ink hover:border-accent hover:bg-accent",
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
    className,
    children,
  } = props;
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);

  const classes = [
    base,
    sizes[size],
    disabled ? disabledStyle : enabled[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  let control;
  if (props.href) {
    const {
      variant: _v,
      size: _s,
      disabled: _d,
      disabledReason: _r,
      className: _c,
      children: _ch,
      href,
      onClick,
      ...rest
    } = props;
    void [_v, _s, _d, _r, _c, _ch];
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
        {children}
      </Link>
    );
  } else {
    const {
      variant: _v,
      size: _s,
      disabled: _d,
      disabledReason: _r,
      className: _c,
      children: _ch,
      href: _h,
      onClick,
      type = "button",
      ...rest
    } = props as ButtonAsButton;
    void [_v, _s, _d, _r, _c, _ch, _h];
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
        {children}
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
