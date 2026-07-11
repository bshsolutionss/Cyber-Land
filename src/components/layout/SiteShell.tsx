"use client";

import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import CartDrawer from "./CartDrawer";
import SearchDrawer from "./SearchDrawer";
import LiveDemoFab from "./LiveDemoFab";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="MainContent" className="min-h-[50vh]">
        {children}
      </main>
      <Footer />
      <MobileMenu />
      <CartDrawer />
      <SearchDrawer />
      <LiveDemoFab />
    </>
  );
}
