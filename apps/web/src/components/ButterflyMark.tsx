import Image from "next/image";

type ButterflyMarkProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

const sizeMap = {
  sm: "h-11 w-11",
  md: "h-14 w-14",
  lg: "h-20 w-20",
};

export function ButterflyMark({
  size = "md",
  showText = true,
}: ButterflyMarkProps) {
  return (
    <div className="flex items-center gap-3">
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
        <div className="leading-none">
          <p className="font-serif text-lg font-black uppercase tracking-[0.08em] text-[var(--ink)] sm:text-xl">
            Heart of the Matter
          </p>
          <p className="mt-1 text-xs font-black uppercase tracking-[0.24em] text-[var(--ink)]">
            School of Music
          </p>
        </div>
      ) : null}
    </div>
  );
}
