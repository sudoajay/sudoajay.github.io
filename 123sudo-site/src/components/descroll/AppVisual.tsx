import Image from "next/image";

export function AppIcon({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/descroll/app-logo.webp"
      alt="deScroll app icon"
      width={512}
      height={512}
      priority
      className={`rounded-[22%] border border-white/15 bg-black shadow-2xl shadow-black/40 ${className}`}
    />
  );
}

export function AppScreenshot({
  number,
  alt,
  priority = false,
  className = "",
}: {
  number: number;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={`/descroll/on_boarding_${number}.webp`}
      alt={alt}
      width={446}
      height={881}
      priority={priority}
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}
