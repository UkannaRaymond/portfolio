import { Badge } from "@/components/ui/badge";

export function TechStack({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {tech.map((t) => (
        <Badge key={t} variant="secondary">
          {t}
        </Badge>
      ))}
    </div>
  );
}
