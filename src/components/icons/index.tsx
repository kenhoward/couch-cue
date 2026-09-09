import type { ComponentProps, ReactNode } from "react";

export type IconProps = ComponentProps<"svg"> & {
  title?: string;
};

function IconSvg({ children, title, ...props }: IconProps & { children: ReactNode }) {
  const accessible = title || props["aria-label"];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={accessible ? undefined : true}
      role={accessible ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function CouchCueLogo(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M7 4V8M11 4V8M15 4V8M19 4V8M3 8H21" />
      <circle cx="12" cy="14" r="2.5" fill="currentColor" />
    </IconSvg>
  );
}

export function CastIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M2 17.5C4.5 17.5 6.5 19.5 6.5 22" />
      <path d="M2 13.5C6.7 13.5 10.5 17.3 10.5 22" />
      <path d="M2 9.5C9 9.5 14.5 15 14.5 22" />
      <path d="M2 6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H17" />
    </IconSvg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path
        d="M13 2L4.5 13H11.5L10 22L19.5 10H12.5L13 2Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </IconSvg>
  );
}

export function BookmarkIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path
        d="M6 3.5C6 2.67 6.67 2 7.5 2H16.5C17.33 2 18 2.67 18 3.5V22L12 17.5L6 22V3.5Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </IconSvg>
  );
}

export function BookmarkPlusIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path
        d="M6 3.5C6 2.67 6.67 2 7.5 2H16.5C17.33 2 18 2.67 18 3.5V22L12 17.5L6 22V3.5Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M12 7V13M9 10H15" />
    </IconSvg>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 6H12M16 6H20M12 4V8M10 12H20M4 12H6M6 10V14M4 18H14M18 18H20M14 16V20" />
    </IconSvg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path
        d="M3 10.5L12 3.5L21 10.5V19.5C21 20.33 20.33 21 19.5 21H14.5V15H9.5V21H4.5C3.67 21 3 20.33 3 19.5V10.5Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </IconSvg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12L10.8 14.3L15.5 9.5" />
    </IconSvg>
  );
}

export function CardDeckIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="10" y="5.5" width="10" height="14.5" rx="2.5" />
      <rect
        x="4.5"
        y="3.25"
        width="11.5"
        height="17.5"
        rx="2.5"
        fill="var(--card-deck-surface, #fff)"
        transform="rotate(-15 10.25 12)"
      />
    </IconSvg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L20.5 20.5" />
    </IconSvg>
  );
}

export function AddMovieIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 13.5V17C4 18.66 5.34 20 7 20H13C14.66 20 16 18.66 16 17V13.5" />
      <path d="M16 14.5L20.5 12V18L16 15.5" />
      <path d="M6 7.5C4.62 7.5 3.5 8.62 3.5 10C3.5 11.38 4.62 12.5 6 12.5H12C13.38 12.5 14.5 11.38 14.5 10C14.5 8.62 13.38 7.5 12 7.5H6Z" />
      <circle cx="6.5" cy="10" r="1" fill="currentColor" />
      <circle cx="11.5" cy="10" r="1" fill="currentColor" />
      <path d="M19 2.5V8.5M16 5.5H22" strokeWidth="2" />
    </IconSvg>
  );
}
