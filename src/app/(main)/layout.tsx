import Navbar from "@/pages/layout/navbar"

export default function PageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Navbar />
        {children}
      </>
    )
  }
  