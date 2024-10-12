import { Badge } from "@/components/ui/badge";

export function SpecTitle({ title }: { title: string }) {
  return (
    <h1 className="flex items-center gap-2 text-4xl">
      <span>{title}</span>
      <Badge variant="secondary">In Progress</Badge>
    </h1>
  );
}
