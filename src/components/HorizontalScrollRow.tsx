import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type HorizontalScrollRowProps = {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
};

export function HorizontalScrollRow({ children, className = "", ariaLabel }: HorizontalScrollRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const row = rowRef.current;

    if (!row) {
      return;
    }

    setCanScrollLeft(row.scrollLeft > 8);
    setCanScrollRight(row.scrollLeft + row.clientWidth < row.scrollWidth - 8);
  };

  useEffect(() => {
    updateScrollState();

    const row = rowRef.current;

    if (!row) {
      return undefined;
    }

    row.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      row.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [children]);

  const scrollByDirection = (direction: -1 | 1) => {
    const row = rowRef.current;

    if (!row) {
      return;
    }

    row.scrollBy({ left: row.clientWidth * 0.75 * direction, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={rowRef} className={className}>
        {children}
      </div>
      {canScrollLeft ? (
        <button
          type="button"
          onClick={() => scrollByDirection(-1)}
          className="absolute left-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#101010]/85 text-zinc-100 shadow-2xl shadow-black/40 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/35"
          aria-label={ariaLabel.replace("right", "left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      ) : null}
      {canScrollRight ? (
        <button
          type="button"
          onClick={() => scrollByDirection(1)}
          className="absolute right-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#101010]/85 text-zinc-100 shadow-2xl shadow-black/40 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/35"
          aria-label={ariaLabel}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  );
}
