import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Altertec AI - AI Transformation for SMEs",
  description:
    "Strategy. Automation. Results. Altertec AI helps SMEs achieve measurable transformation through automation and AI solutions that cut costs and drive growth.",
  generator: "v0.app",
  keywords: "AI transformation, SME automation, AI consulting, business automation, AI solutions",
  authors: [{ name: "Altertec AI" }],
  openGraph: {
    title: "Altertec AI - AI Transformation for SMEs",
    description: "Strategy. Automation. Results. Transform your business with AI.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
