import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export function ViewLayout() {
  return (
    <section className="max-w-7xl mx-auto px-5 min-h-dvh flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
