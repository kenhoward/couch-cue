"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType, ReactNode } from "react";
import {
  AddMovieIcon,
  BookmarkIcon,
  CardDeckIcon,
  CouchCueLogo,
  HomeIcon,
  SearchIcon,
  SlidersIcon,
  type IconProps,
} from "@/components/icons";

type NavigationItem = {
  href: "/" | "/filter" | "/decide" | "/watchlist";
  label: string;
  Icon: ComponentType<IconProps>;
};

const navigationItems: readonly NavigationItem[] = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/filter", label: "Filter", Icon: SlidersIcon },
  { href: "/decide", label: "Decide", Icon: CardDeckIcon },
  { href: "/watchlist", label: "Watchlist", Icon: BookmarkIcon },
];

function Header() {
  return (
    <header className="app-header">
      <Link className="app-header__brand" href="/" aria-label="Couch Cue home">
        <span className="app-header__logo">
          <CouchCueLogo aria-hidden="true" />
        </span>
        <span className="app-header__wordmark">CouchCue</span>
      </Link>

      <div className="app-header__actions">
        <button className="app-header__search" type="button" aria-label="Search">
          <SearchIcon aria-hidden="true" />
        </button>
        <Link className="app-header__swipe" href="/decide">
          <CardDeckIcon aria-hidden="true" />
          <span>Swipe</span>
        </Link>
      </div>
    </header>
  );
}

function BottomNavItem({ href, label, Icon, isActive }: NavigationItem & { isActive: boolean }) {
  return (
    <Link
      className="bottom-nav__item"
      data-active={isActive || undefined}
      href={href}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}

function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      <div className="bottom-nav__items">
        {navigationItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return <BottomNavItem key={item.href} {...item} isActive={isActive} />;
        })}
      </div>
    </nav>
  );
}

function FloatingAddButton() {
  return (
    <Link className="floating-add-button" href="/add" aria-label="Add title">
      <AddMovieIcon aria-hidden="true" />
    </Link>
  );
}

export function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">{children}</main>
      <BottomNav />
      <FloatingAddButton />
    </div>
  );
}
