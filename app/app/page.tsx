import TopNav from "@/components/TopNav";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <TopNav />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C9A227]/20 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <div className="text-xs tracking-[0.45em] uppercase text-[color:var(--muted)]">Power in Motion</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[0.18em] uppercase">MISSED</h1>

          <p className="mt-5 max-w-xl text-[color:var(--muted)] leading-relaxed">
            <span className="text-white">MMM</span> powers growth.{" "}
            <span className="text-white">Raccoon Raiders</span> execute.{" "}
            <span className="text-white">USDM</span> moves the world—food, drivers, daily utility.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/hq" className="rounded-md bg-[#C9A227] px-5 py-3 font-semibold text-black">ENTER HQ</Link>
            <Link href="/raiders" className="rounded-md border border-[#C9A227]/40 px-5 py-3 font-semibold text-white hover:border-[#C9A227]/70 transition">
              Raccoon Raiders
            </Link>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs tracking-[0.3em] uppercase text-[color:var(--muted)]">
            RACCOON RAIDERS NFTs <span className="text-white/70">SOON</span>
          </div>
        </div>
      </section>
    </main>
  );
}
