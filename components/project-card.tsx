"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { GitlabIcon as GitHub } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  icon: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  icon,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`h-full flex flex-col bg-secondary/50 border-accent backdrop-blur-sm transition-all duration-300 ${
          isHovered ? "border-primary/50 shadow-lg shadow-primary/10" : ""
        }`}
      >
        <CardHeader>
          <div className="text-3xl mb-2">{icon}</div>
          <CardTitle className="text-xl font-mono text-foreground">
            📌 {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base mb-4 text-foreground">
            {description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-secondary/50 text-zinc-300 border-accent hover:bg-accent"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="secondary"
            className="w-full hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <GitHub className="h-4 w-4" />
              Ver no GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
