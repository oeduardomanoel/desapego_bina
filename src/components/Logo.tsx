// Versão em SVG inspirada no logo do flyer. Quando tiver o arquivo vetorial oficial,
// é só trocar este componente por um <Image src="/logo.svg" />.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 78 64" className={className} aria-hidden>
      <g transform="translate(36 0)">
        <rect x="-12" y="4" width="10" height="44" rx="5" fill="var(--color-coral)" />
        <circle cx="5" cy="36" r="12" fill="none" stroke="var(--color-coral)" strokeWidth="10" />
      </g>
      {/* folhinhas */}
      <path d="M17 36c-4-6-11-7-16-4 3 5 10 7 16 4Z" fill="var(--color-mustard)" />
      <path d="M17 36c-2 6-8 10-14 9 1-6 7-10 14-9Z" fill="var(--color-teal)" />
      <path d="M58 36c4-6 11-7 16-4-3 5-10 7-16 4Z" fill="var(--color-teal)" transform="translate(3 0)" />
      <path d="M58 36c2 6 8 10 14 9-1-6-7-10-14-9Z" fill="var(--color-mustard)" transform="translate(3 0)" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-auto" />
      <span className="flex flex-col leading-[0.95] text-coral">
        <span className="text-[0.95rem] font-light tracking-tight">desapego</span>
        <span className="text-[0.95rem] tracking-tight">
          <span className="font-light">da </span>
          <span className="font-extrabold">bina</span>
        </span>
      </span>
    </span>
  );
}
