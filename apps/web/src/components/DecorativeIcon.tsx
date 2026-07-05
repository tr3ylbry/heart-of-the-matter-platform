import type { LessonIcon } from "@/data/lessons";

type DecorativeIconProps = {
  icon: LessonIcon;
};

export function DecorativeIcon({ icon }: DecorativeIconProps) {
  if (icon === "piano") {
    return (
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-12 w-12">
        <path d="M14 16h36v26H14z" fill="currentColor" opacity="0.92" />
        <path d="M18 42h6v9h-6zm22 0h6v9h-6z" fill="currentColor" />
        <path
          d="M18 22h28v8H18zm0 12h28"
          fill="none"
          stroke="#fff7e7"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    );
  }

  if (icon === "voice") {
    return (
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-12 w-12">
        <rect x="25" y="9" width="14" height="29" rx="7" fill="currentColor" />
        <path
          d="M18 30c0 9 6 15 14 15s14-6 14-15M32 45v9m-9 0h18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
      </svg>
    );
  }

  if (icon === "guitar" || icon === "bass") {
    return (
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-12 w-12">
        <path
          d="M21 46c-6-4-6-13 1-16 2-1 5-1 8 1l20-20 4 4-20 20c2 3 2 6 1 8-3 7-12 7-16 1z"
          fill="currentColor"
        />
        <path
          d="M31 34 53 12m-9 7 7 7"
          fill="none"
          stroke="#fff7e7"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (icon === "drums") {
    return (
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-12 w-12">
        <ellipse cx="32" cy="28" rx="18" ry="8" fill="currentColor" />
        <path
          d="M14 28v16c0 4 8 8 18 8s18-4 18-8V28"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="m16 13 14 11m18-11L34 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-12 w-12">
      <path
        d="M18 12h23l7 7v33H18z"
        fill="currentColor"
        opacity="0.92"
      />
      <path d="M41 12v9h9" fill="#fff7e7" />
      <path
        d="M25 28h16M25 36h16M25 44h10"
        fill="none"
        stroke="#fff7e7"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}
