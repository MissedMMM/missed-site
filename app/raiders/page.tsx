import TopNav from "@/components/TopNav";

export default function Page() {
  return (
    <main>
      <TopNav />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-xs tracking-[0.45em] uppercase text-[color:var(--muted)]">MISSED</div>
        <h1 className="mt-3 text-3xl font-semibold">Coming Soon</h1>
        <p className="mt-3 text-[color:var(--muted)]">This section is being built.</p>
      </div>
    </main>
  );
}

