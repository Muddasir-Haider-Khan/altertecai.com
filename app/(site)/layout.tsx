import Navigation from "@/components/site/navigation"
import Footer from "@/components/site/footer"
import { Toaster } from "sonner"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </>
  )
}
