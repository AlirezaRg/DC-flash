import Image from "next/image";

// Codeiish Lab wordmark logo.
export default function CodeiishMark({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/codeiish-logo.png"
      alt="Codeiish Lab"
      width={48}
      height={48}
      className={`${className} rounded-full object-cover`}
      priority
    />
  );
}
