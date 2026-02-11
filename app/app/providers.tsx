"use client";

import * as React from "react";
import "@rainbow-me/rainbowkit/styles.css";

import { WagmiProvider } from "wagmi";
import { polygon } from "wagmi/chains";
import { getDefaultConfig, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
if (!projectId) throw new Error("Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID");

const config = getDefaultConfig({
  appName: "MISSED",
  projectId,
  chains: [polygon],
  ssr: true
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#C9A227",
            accentColorForeground: "#0B0B0B",
            borderRadius: "small"
          })}
          modalSize="compact"
          initialChain={polygon}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
