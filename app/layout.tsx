import "./globals.css"
import { ReactNode } from "react"
import localFont from "next/font/local"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

import { ThemeProvider } from "./providers"

export const fontSans = localFont({
  src: "../fonts/haskoy.ttf",
  variable: "--font-sans",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://www.nextjs.design`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "HVAC/R Directory - Discover the Top People in HVAC/R",
  description:
    "Explore a curated directory of HVAC/R pros. Find resources for sales, marketing and more!",
  keywords:
    "HVAC/R, Refrigeration, Heating, Cooling, Air Conditioner, Furnace, Gas Technician",
  structuredData: {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "HVAC/R Directory",
    url: "https://www.getgrowjoegroup.com",
    description:
      "A free directory of awesome people",
  },
  socialMediaTags: {
    "og:title": "HVAC/R Directory - Discover the top people in HVAC/R",
    "og:description":
      "Explore a curated directory of free web development tools for designers and engineers. Find resources for JavaScript, Tailwind CSS, and more!",
    "twitter:card": "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} font-sans  `}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className="bg-[#FAFAFA] dark:bg-background  text-foreground flex flex-col justify-center items-center w-full pt-13">
              <div className=" w-full ">{children}</div>
            </main>
          </TooltipProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
