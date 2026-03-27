'use client';

import { VideoBackground } from '@/components/ui/video-background';

export function CoastalBand() {
  return (
    <VideoBackground
      src="/videos/drone-plage-bretonne.mp4"
      poster="/videos/poster-plage.jpg"
      overlayClassName="bg-breton-navy/50"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold text-white/70 uppercase tracking-[0.15em] mb-4">
          Littoral breton
        </p>
        <p className="font-serif text-[26px] sm:text-[36px] leading-[1.25] text-white tracking-[-0.02em]">
          Ancrés sur le terrain, au plus près de vos enjeux.
        </p>
      </div>
    </VideoBackground>
  );
}
