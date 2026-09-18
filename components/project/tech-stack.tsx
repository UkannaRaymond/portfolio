import { Badge } from "@/components/ui/badge";

export function TechStack({ tech, max = 5 }: { tech: string[]; max?: number }) {
  const visible = tech.slice(0, max);
  const remaining = tech.length - visible.length;

  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {visible.map((t) => (
        <Badge key={t} variant="secondary" className="text-xs">
          {t}
        </Badge>
      ))}
      {remaining > 0 && (
        <Badge variant="muted" className="text-xs">
          +{remaining}
        </Badge>
      )}
    </div>
  );
}
