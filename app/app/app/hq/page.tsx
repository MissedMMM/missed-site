"use client";

import TopNav from "@/components/TopNav";
import { polygon } from "wagmi/chains";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

export default function HQ() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  return (
    <main>
      <TopNav />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-xs tracking-[0.45em] uppercase text-[color:var(--muted)]">Raider HQ</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Command the Colony</h1>

        {!isConnected ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-[#121212] p-6">
            <div className="text-lg font-semibold">Connect your wallet</div>
            <p className="mt-2 text-[color:var(--muted)]">MISSED runs on Polygon. Connect to access Raider HQ.</p>
          </div>
        ) : chainId !== polygon.id ? (
          <div className="mt-6 rounded-xl border border-[#C9A227]/20 bg-[#121212] p-6">
            <div className="text-lg font-semibold">Polygon Required</div>
            <p className="mt-2 text-[color:var(--muted)]">Switch to Polygon to continue.</p>
            <button
              className="mt-4 rounded-md bg-[#C9A227] px-4 py-2 font-semibold text-black"
              onClick={() => switchChain({ chainId: polygon.id })}
            >
              Switch to Polygon
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Panel title="Tier Ladder" subtitle="1× → 500×" />
            <Panel title="Pair Scanner" subtitle="15-min refresh" />
            <Panel title="Strike Mode" subtitle="Elite only" />
            <div className="md:col-span-2">
              <Panel title="Trade Feed" subtitle="Trash reports" tall />
            </div>
            <div className="md:col-span-1">
              <Panel title="Emergency Stop" subtitle="Global pause" danger />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function Panel({ title, subtitle, tall, danger }: { title: string; subtitle: string; tall?: boolean; danger?: boolean; }) {
  return (
    <div className={["rounded-xl border bg-[#121212] p-6", danger ? "border-red-500/30" : "border-[#C9A227]/20"].join(" ")}>
      <div className="text-xs tracking-[0.35em] uppercase text-[color:var(--muted)]">{subtitle}</div>
      <div className="mt-2 text-xl font-semibold">{title}</div>
      <div className={["mt-4 rounded bg-black/30", tall ? "h-64" : "h-32"].join(" ")} />
      {danger ? (
        <button className="mt-4 w-full rounded-md bg-red-500 px-4 py-2 font-semibold text-white">
          PAUSE ALL
        </button>
      ) : null}
    </div>
  );
}
