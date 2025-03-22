"use client";

import type React from "react";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="border-accent backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="text-center py-8 space-y-4">
            <div className="text-4xl">✅</div>
            <h3 className="text-xl font-medium font-mono text-foreground">
              Mensagem enviada!
            </h3>
            <p className="text-zinc-400">
              Obrigado pelo contato. Responderei o mais breve possível.
            </p>
            <Button
              variant="secondary"
              onClick={() => setIsSubmitted(false)}
              className="hover:bg-primary hover:text-primary-foreground mt-4 cursor-pointer"
            >
              Enviar outra mensagem
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-accent backdrop-blur-sm">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Seu nome"
              required
              className="bg-secondary border-accent text-foreground/70 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/70">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="bg-secondary/50 border-accent text-foreground/70 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/70">
              Mensagem
            </Label>
            <Textarea
              id="message"
              placeholder="Descreva seu projeto ou deixe sua mensagem..."
              rows={5}
              required
              className="bg-secondary/50 border-accent text-foreground/70 focus:border-primary focus:ring-primary"
            />
          </div>
          <Button
            type="submit"
            variant="default"
            className="w-full cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                Enviando...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                Enviar mensagem
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
