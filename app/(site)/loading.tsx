export default function Loading() {
  return (
    <div className="container-page pt-40 md:pt-48">
      <div className="h-4 w-32 animate-pulse rounded-full bg-muted" />
      <div className="mt-6 h-12 w-3/4 animate-pulse rounded-lg bg-muted" />
      <div className="mt-4 h-4 w-1/2 animate-pulse rounded-full bg-muted" />
    </div>
  );
}
