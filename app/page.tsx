"use client";

import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

export default function App() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={[{name: "Home", link: "/"}]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
