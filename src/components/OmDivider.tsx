import { cn } from '@/lib/utils';

/** A thin gold rule with a centered ॐ medallion — separates sacred sections. */
export function OmDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex items-center justify-center gap-4 py-2', className)}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50 sm:w-24" />
      <span className="grid size-10 place-items-center rounded-full border border-gold/40 font-hindi text-lg text-gold animate-om-breathe">
        ॐ
      </span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50 sm:w-24" />
    </div>
  );
}
