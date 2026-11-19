"use client";

import { useId } from "react";
import type { InputHTMLAttributes } from "react";

export interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "size"> {
  /**
   * Підпис поля. Завжди стоїть над полем.
   */
  label: string;
  /**
   * Стан помилки: межа поля стає `danger`, під полем з'являється
   * іконка й текст помилки.
   * @default false
   */
  error?: boolean;
  /**
   * Текст помилки під полем. Показується тільки коли `error` увімкнено.
   */
  errorText?: string;
}

/**
 * Текстове поле з підписом. Підпис над полем, текст помилки під ним.
 * Кути `rounded-control`, межа `ink-muted`. Кольори, текст і відступи
 * беруться з токенів `@theme`.
 */
export function FormField({
  label,
  error = false,
  errorText,
  disabled = false,
  className,
  type = "text",
  ...rest
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const showError = error && Boolean(errorText);

  const inputClasses = [
    "w-full rounded-control border bg-canvas px-4 py-3 font-text text-body text-ink",
    "placeholder:text-ink-muted transition-colors outline-ink",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    error ? "border-danger" : "border-ink-muted hover:border-ink",
    "disabled:cursor-not-allowed disabled:border-ink-muted disabled:bg-surface disabled:text-ink-muted disabled:hover:border-ink-muted",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={id}
        className={
          disabled
            ? "font-display text-label text-ink-muted"
            : "font-display text-label text-ink"
        }
      >
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type={type}
        disabled={disabled}
        aria-invalid={error || undefined}
        aria-describedby={showError ? errorId : rest["aria-describedby"]}
        className={inputClasses}
      />
      {showError ? (
        <p
          id={errorId}
          className="flex items-start gap-2 font-text text-caption text-danger"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-px h-4 w-4 flex-none"
          >
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M8 4.5v4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="8" cy="11.25" r="0.9" fill="currentColor" />
          </svg>
          <span>{errorText}</span>
        </p>
      ) : null}
    </div>
  );
}
