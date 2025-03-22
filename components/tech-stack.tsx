import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechStack() {
  return (
    <Card className="bg-secondary/50 border-accent backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-mono text-foreground">
          Principais Tecnologias
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2 text-foreground">💡 Front-end</h4>
          <p className="text-foreground/70">
            React, Next.js, Vue, Nuxt, React Native, Astro, Sass
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-foreground">⚙️ Back-end</h4>
          <p className="text-foreground/70">
            Node.js, Express, NestJS, Laravel, Rust
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-foreground">🛢 Banco de Dados</h4>
          <p className="text-foreground/70">PostgreSQL, MySQL, MongoDB</p>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-foreground">
            📡 Outras Ferramentas
          </h4>
          <p className="text-foreground/70">Tauri, Prisma, TypeORM, Docker</p>
        </div>
      </CardContent>
    </Card>
  );
}
