import React, { useState, useEffect, useCallback } from "react";

const SECTIONS = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "experience", label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "contact",    label: "Contact" },
];

const SectionNav = () => {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(false);

  /* ── Detect active section ── */
  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.25, rootMargin: "-5% 0px -5% 0px" }
      );
      obs.observe(el);
      return obs;
    }).filter(Boolean);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Show nav only after hero ── */
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  /* ── Keyboard navigation ── */
  const getIdx = useCallback(
    () => SECTIONS.findIndex((s) => s.id === active),
    [active]
  );

  useEffect(() => {
    const onKey = (e) => {
      const idx = getIdx();
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        const next = SECTIONS[idx + 1];
        if (next) {
          e.preventDefault();
          document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth" });
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        const prev = SECTIONS[idx - 1];
        if (prev) {
          e.preventDefault();
          document.getElementById(prev.id)?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [getIdx]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
      }`}
    >
      {SECTIONS.map(({ id, label }, i) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Go to ${label}`}
            className="group relative flex items-center justify-end gap-2.5"
          >
            {/* Tooltip label */}
            <span
              className={`pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap border shadow-md
                transition-all duration-200
                ${isActive
                  ? "opacity-100 translate-x-0 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 border-indigo-300 dark:border-indigo-700"
                  : "opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                }`}
            >
              {label}
            </span>

            {/* Line connector (except last) */}
            {i < SECTIONS.length - 1 && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 w-px h-4 bg-slate-300 dark:bg-slate-700" />
            )}

            {/* Dot */}
            <span
              className={`block rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "w-3.5 h-3.5 bg-gradient-to-br from-indigo-500 to-violet-500 border-transparent shadow-[0_0_10px_rgba(99,102,241,0.55)]"
                  : "w-2.5 h-2.5 bg-transparent border-slate-400 dark:border-slate-600 group-hover:border-indigo-400 group-hover:scale-110"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

export default SectionNav;
