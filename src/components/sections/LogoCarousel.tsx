'use client';

import Image from 'next/image';

const CLIENT_LOGOS = [
  { name: 'Sonoco', src: '/logos/sonoco.png', width: 130 },
  { name: 'Saunier Duval', src: '/logos/saunier-duval.png', width: 140 },
  { name: 'acsystème', src: '/logos/acsysteme.png', width: 130 },
  { name: 'Neotoa', src: '/logos/neotoa.svg', width: 110 },
  { name: 'Alticome', src: '/logos/alticome.svg', width: 120 },
  { name: 'SFCMM', src: '/logos/sfcmm.png', width: 100 },
  { name: 'Bretagne Matériaux', src: '/logos/bretagne-materiaux.png', width: 140 },
  { name: 'Citédia', src: '/logos/citedia.jpeg', width: 110 },
  { name: 'Omega Systèmes', src: '/logos/omega-systemes.jpeg', width: 120 },
  { name: 'Sogea Atlantique BTP', src: '/logos/sogea-atlantique-btp.jpeg', width: 130 },
  { name: 'Vives Eaux', src: '/logos/vives-eaux.png', width: 110 },
];

export function LogoCarousel() {
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
        Ils nous font confiance
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={`Logo ${logo.name}`}
                width={logo.width}
                height={48}
                className="object-contain max-h-10"
                unoptimized={logo.src.endsWith('.svg')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
