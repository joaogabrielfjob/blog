import { Outlet } from "@tanstack/react-router";
import { Header } from "./header";
import { ScrollToTop } from "./scroll-to-top";

export function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-prose pb-4">
        <Outlet />
        <ScrollToTop />
      </main>
    </>
  );
}
