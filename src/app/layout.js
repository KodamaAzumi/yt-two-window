import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const NotoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-Noto-Sans-JP",
});

export const metadata = {
  title: "YouTube Two Windows",
  description: "YouTubeの動画を二窓するときに使用する",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>{children}</body>
    </html>
  );
}
