import Navbar from "@/pages/layout/navbar"
import Footer from "@/pages/layout/footer"
export default function PageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Navbar />
        {children}
        <Footer/>
      </>
    )
  }
  