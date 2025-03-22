import Image from "next/image";

import ParticleAnimation from "@/components/particle-animation";

import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-accent py-12 px-4 relative overflow-hidden">
      {/* Particle animation in footer */}
      <div className="absolute inset-0 z-0">
        <ParticleAnimation density={70} speed={0.3} opacity={0.4} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-accent">
                <Image
                  src="https://github.com/DouglasMai4.png"
                  alt="Douglas Maia"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold font-mono text-foreground">
                Douglas<span className="text-primary">.dev</span>
              </h3>
            </div>
            <p className="text-foreground/70 max-w-md">
              Desenvolvedor Full Stack especializado em criar soluções modernas,
              performáticas e escaláveis para web e mobile.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-bold mb-4 font-mono text-foreground">
              Conecte-se
            </h3>
            <div className="flex space-x-4">
              <a
                href="mailto:contato@douglasmaia.dev.br"
                aria-label="Email"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/DouglasMai4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/douglasmai4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-accent mt-8 pt-8 text-center text-sm text-foreground/50">
          <p>
            © {new Date().getFullYear()} Douglas Maia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
