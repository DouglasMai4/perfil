import Link from "next/link";

import ParticleAnimation from "@/components/particle-animation";

import { ArrowRight } from "lucide-react";
import TerminalText from "@/components/terminal-text";
import Image from "next/image";
import TechStack from "@/components/tech-stack";
import ProjectCard from "@/components/project-card";

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
                <span className="ml-2 text-foreground/50terminal-text.tsx">
                  terminal
                </span>
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

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-mono mb-4">
            Sobre
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-foreground">
            👋 Olá, sou Douglas Maia!
          </h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <div className="hidden md:block relative">
                    <Image
                      src="https://github.com/DouglasMai4.png"
                      alt="Douglas Maia"
                      width={500}
                      height={500}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
                <p className="text-lg text-foreground">
                  Sou um desenvolvedor full stack apaixonado por tecnologia e
                  inovação. Com experiência em desenvolvimento web e mobile,
                  minha missão é criar soluções modernas, performáticas e
                  escaláveis. Minha trajetória inclui desde desenvolvimento de
                  aplicações empresariais até a criação de ferramentas
                  inteligentes para automação e comunicação.
                </p>
              </div>
              <div className="bg-secondary/50 border border-accent p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 font-mono text-foreground">
                  🚀 Fundador da{" "}
                  <Link
                    href="https://kingdomsoftwares.com.br"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Kingdom Softwares
                  </Link>
                </h3>
                <p className="text-foreground">
                  Uma software house focada em modernidade e performance.
                </p>
              </div>
            </div>
            <div>
              <TechStack />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-mono mb-4">
            Projetos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-foreground">Meus trabalhos recentes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="CRM Inteligente"
              description="Uma plataforma completa para gestão de clientes, integração com WhatsApp e automação de vendas."
              technologies={["NestJS", "TypeORM", "React", "PostgreSQL"]}
              githubUrl="https://github.com/DouglasMai4/crm-inteligente"
              icon="💼"
            />
            <ProjectCard
              title="Disparador de Mensagens WhatsApp"
              description="Ferramenta para envio em massa de mensagens no WhatsApp via API, com suporte a múltiplas sessões."
              technologies={["NestJS", "Baileys", "Prisma", "Docker"]}
              githubUrl="https://github.com/DouglasMai4/whatsapp-sender"
              icon="💬"
            />
            <ProjectCard
              title="Chatbot Inteligente"
              description="Assistente virtual baseado em IA para automação de atendimento e suporte ao cliente."
              technologies={["NestJS", "Ollama (Gemma 2)", "PostgreSQL"]}
              githubUrl="https://github.com/DouglasMai4/chatbot-ia"
              icon="🤖"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
