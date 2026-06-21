import Image from 'next/image';
import logoHanuman from '@/assets/logo-hanuman.webp';
import { cn } from '@/lib/utils';

/**
 * RAM NAAM wordmark with the flying Hanuman Ji medallion.
 * The illustration sits on a warm cream disc so its white backdrop reads
 * as a glowing devotional medallion inside the gold ring.
 */
export function Logo({
  className,
  size = 46,
  showWordmark = true,
}: {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span
        className="relative grid shrink-0 place-items-center overflow-hidden rounded-full ring-2 ring-gold/60 shadow-glow"
        style={{
          width: size,
          height: size,
          background:
            'radial-gradient(circle at 50% 38%, #fff8e7 0%, #ffe9c7 70%, #f5d9a6 100%)',
        }}
        aria-hidden="true"
      >
        <Image
          src={logoHanuman}
          alt=""
          width={size}
          height={size}
          className="h-full w-full scale-110 object-contain"
          unoptimized
          priority
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-hindi text-xl font-medium text-foreground">
            राम नाम
          </span>
          <span className="font-display text-[0.6rem] font-bold uppercase tracking-[0.28em] text-gold">
            RamNaam
          </span>
        </span>
      )}
    </div>
  );
}
