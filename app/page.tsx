import Link from "next/link";

import ParticleAnimation from "@/components/particle-animation";

import { ArrowRight } from "lucide-react";
import TerminalText from "@/components/terminal-text";

export default function Home() {
  return (
    <main className="min-h-dvh">
      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 md:py-32 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <ParticleAnimation />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-mono mb-4">
              <TerminalText text="Desenvolvedor Full Stack" typingSpeed={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-foreground">
              Criador de Soluções Digitais
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70">
              Transformando ideias em código de alto desempenho.
            </p>
            <div className="pt-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                🚀 Explore meus projetos
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Code snippet decoration */}
          <div className="absolute top-20 right-5 hidden lg:block">
            <div className="bg-secondary/50 backdrop-blur-sm border border-accent rounded-lg p-4 font-mono text-sm text-foreground shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-foreground/50terminal-text.tsx">terminal</span>
              </div>
              <div>
                <span className="text-primary">const</span>{" "}
                <span className="text-yellow-400">developer</span> = {"{"}
              </div>
              <div className="ml-4">
                <span className="text-zinc-300">name</span>:{" "}
                <span className="text-green-400">'Douglas Maia'</span>,
              </div>
              <div className="ml-4">
                <span className="text-zinc-300">skills</span>: [
                <span className="text-green-400">'Full Stack'</span>,{" "}
                <span className="text-green-400">'React'</span>,{" "}
                <span className="text-green-400">'Node.js'</span>],
              </div>
              <div className="ml-4">
                <span className="text-zinc-300">passion</span>:{" "}
                <span className="text-green-400">'Building amazing apps'</span>
              </div>
              <div>{"}"};</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>
    </main>
  );
}
