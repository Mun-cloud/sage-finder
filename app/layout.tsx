import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나의 철학자 찾기",
  description:
    "간단한 질문에 답하고 당신의 내면과 가장 닮은 철학자를 찾아보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
