import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "KUIKUIZI Daily Archive",
  description: "记录葵葵子的每一天",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* 导航栏 */}
        <nav className="sticky top-0 z-[9999] bg-white px-3 py-5 shadow-sm md:px-8">
          <div className="flex justify-center gap-4 md:gap-8">
            <Link
              href="/"
              className="whitespace-nowrap font-bold text-[#3F2D22]"
            >
              首页
            </Link>
            <Link
              href="/daily"
              className="whitespace-nowrap font-bold text-[#3F2D22]"
            >
              每日记录
            </Link>
            <Link
              href="/dance"
              className="whitespace-nowrap font-bold text-[#3F2D22]"
            >
              舞蹈记录
            </Link>
            <Link
              href="/colors"
              className="whitespace-nowrap font-bold text-[#3F2D22]"
            >
              色彩档案
            </Link>
          </div>
        </nav>
        {/* 页面内容 */}
        {children}
        {/* 页脚 */}
        <footer className="mt-auto bg-[#FFF9EE] py-10 text-center text-[#5A4636]">
          <p className="text-lg font-bold">
            🌻 KUIKUIZI Daily Archive
          </p >
          <div className="mx-auto mt-6 max-w-md px-6">
            <p className="leading-relaxed">
              用心记录每一个关于葵葵子的瞬间，
              <br />
              收藏那些闪闪发光的日子。
            </p >
            <p className="mt-5 font-bold">
              —— NiyaraZ
            </p >
          </div>
          <p className="mt-8 text-xs opacity-50">
            Created by NiyaraZ
            <br />
            A little archive filled with love for KUIKUIZI 🌻
            <br />
            © 2026 KUIKUIZI Daily Archive
          </p >
        </footer>
      </body>
    </html>
  );
}
