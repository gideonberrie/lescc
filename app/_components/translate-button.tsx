"use client";

import { useState } from "react";

const LANGUAGES = ["English", "Español", "Français", "中文", "العربية"];

export default function TranslateButton() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(LANGUAGES[0]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full border border-black/[.08] px-4 py-2 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M3 5c0 5.5 3.5 9 8 10M9 5c-1 6-4 9-7 10.5M15 20l3.5-8 3.5 8M16.5 17h4"
          />
        </svg>
        {language}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-10 mt-2 w-40 overflow-hidden rounded-lg border border-black/[.08] bg-white py-1 shadow-lg dark:border-white/[.145] dark:bg-zinc-900"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                role="option"
                aria-selected={lang === language}
                onClick={() => {
                  setLanguage(lang);
                  setOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm hover:bg-black/[.04] dark:hover:bg-white/[.06]"
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
