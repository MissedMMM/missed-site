import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "MISSED",
  description: "Power in Motion."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
