import Image from "next/image";

type ButterflyMarkProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

const sizeMap = {
  sm: "h-11 w-11",
  md: "h-12 w-12 sm:h-14 sm:w-14",
  lg: "h-20 w-20",
};

export function ButterflyMark({
  size = "md",
  showText = true,
}: ButterflyMarkProps) {
  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <div
        className={`${sizeMap[size]} relative shrink-0 overflow-hidden rounded-[35%] bg-[var(--paper)] shadow-[0_10px_30px_rgba(23,20,18,0.12)]`}
      >
        <Image
          src="/butterfly-logo.png"
          alt=""
          fill
          sizes="80px"
          className="object-cover"
          priority={size === "md"}
        />
      </div>
      {showText ? (
        <div className="min-w-0 leading-none">
          <p className="font-serif text-sm font-black uppercase tracking-[0.06em] text-[var(--ink)] sm:text-xl sm:tracking-[0.08em]">
            Heart of the Matter
          </p>
          <p className="mt-1 text-[0.6rem] font-black uppercase tracking-[0.18em] text-[var(--ink)] sm:text-xs sm:tracking-[0.24em]">
            School of Music
          </p>
        </div>
      ) : null}
    </div>
  );
}
