"use client";

import { useEffect, useId, useRef, useState } from "react";

export interface NavigationItem {
  /** Стабільний ідентифікатор пункту; за ним визначається активний. */
  id: string;
  /** Текст пункту. */
  label: string;
  /** Адреса або якір, куди веде пункт. */
  href: string;
}

export interface NavigationProps {
  /**
   * Пункти меню. За замовчуванням: Work, Process, About, Contact.
   */
  items?: NavigationItem[];
  /**
   * `id` активного пункту (поточний розділ або сторінка).
   * Порожнє значення означає, що активного пункту немає.
   */
  activeId?: string;
}

const defaultItems: NavigationItem[] = [
  { id: "work", label: "Work", href: "#work" },
  { id: "process", label: "Process", href: "#process" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const focusRing =
  "outline-ink focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Навігація сайту. На широкому екрані пункти стоять у ряд. На вузькому
 * меню згортається в кнопку; відкрите меню лежить поверх контенту й не
 * зсуває сторінку. Закривається клавішею Escape, кліком поза меню або
 * вибором пункту.
 */
export function Navigation({
  items = defaultItems,
  activeId = "",
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const listClasses = [
    open
      ? "absolute right-0 top-full z-10 mt-2 flex w-max flex-col gap-2 rounded-card border border-line bg-canvas p-3"
      : "hidden",
    "md:static md:mt-0 md:flex md:w-auto md:flex-row md:gap-2 md:rounded-none md:border-0 md:bg-transparent md:p-0",
  ].join(" ");

  return (
    <nav ref={rootRef} aria-label="Main" className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className={`rounded-control border border-ink-muted bg-canvas px-4 py-3 font-display text-label text-ink transition-colors hover:border-accent hover:bg-accent md:hidden ${focusRing}`}
      >
        {open ? "Close" : "Menu"}
      </button>

      <ul id={listId} className={listClasses}>
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block rounded-control px-4 py-3 font-display text-label transition-colors md:py-2 ${focusRing} ${
                  active
                    ? "bg-ink text-accent"
                    : "text-ink-muted hover:text-accent-deep"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
