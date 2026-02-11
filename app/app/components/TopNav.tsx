import Link from "next/link";
import WalletButton from "./WalletButton";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-sm tracking-[0.22em] uppercase text-[color:var(--muted)] hover:text-white transition">
    {label}
  </Link>
);

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#C9A227]/20 bg-[#0B0B0B]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold tracking-[0.35em] uppercase">MISSED</Link>
          <nav className="hidden md:flex items-center gap-5">
            <NavLink href="/hq" label="HQ" />
            <NavLink href="/mmm" label="$MMM" />
            <NavLink href="/usdm" label="$USDM" />
            <NavLink href="/raiders" label="Raiders" />
            <NavLink href="/nft" label="NFTs" />
          </nav>
        </div>
        <WalletButton />
      </div>
    </header>
  );
}
