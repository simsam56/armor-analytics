'use client';

import Image from 'next/image';

const CLIENT_LOGOS = [
  { name: 'acsystème', src: '/acsysteme.png', width: 140 },
  { name: 'Bretagne Matériaux', src: '/bretagne materiaux.png', width: 160 },
  { name: 'Citédia', src: '/citedia.jpeg', width: 120 },
  { name: 'Neotoa', src: '/neotoa.svg', width: 120 },
  { name: 'Alticome', src: '/alticome.svg', width: 130 },
];

export function LogoCarousel() {
  // Double les logos pour l'effet de boucle infinie
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 bg-white border-b border-[#E2E8E5] overflow-hidden">
      <div className="container-content mb-8">
        <p className="text-center text-sm font-medium text-[#64756C] uppercase tracking-wide">
          Ils nous font confiance en Bretagne
        </p>
      </div>

      {/* Carrousel animé */}
      <div className="relative">
        {/* Gradient fade gauche */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Gradient fade droite */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Container du carrousel */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={`Logo ${logo.name}`}
                width={logo.width}
                height={50}
                className="object-contain max-h-12"
                unoptimized={logo.src.endsWith('.svg')}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container-content mt-6">
        <p className="text-center text-xs text-[#94A39B] italic">
          PME et organisations accompagnées en Bretagne
        </p>
      </div>
    </section>
  );
}
