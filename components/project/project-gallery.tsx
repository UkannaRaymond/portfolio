import Image from "next/image";

export function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="relative aspect-16/10 overflow-hidden rounded-xl border border-border"
        >
          <Image
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
