import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales | Balise Data',
  description: 'Mentions légales et informations juridiques du site Balise Data.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegalPage() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Spacer for fixed header */}
      <div className="h-[72px] sm:h-[104px]" />

      <main id="main-content">
        <section className="section-padding bg-white">
          <div className="container-content">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-[#1E2922] sm:text-4xl">
                Mentions légales
              </h1>

              <div className="mt-12 space-y-10">
                <article>
                  <h2 className="text-xl font-semibold text-[#1E2922] mb-4">
                    Éditeur du site
                  </h2>
                  <div className="text-[#64756C] leading-relaxed">
                    <p className="font-medium text-[#1E2922]">BALISE Data</p>
                    <p>Email : balisedata@gmail.com</p>
                    <p>Localisation : Lorient, Bretagne, France</p>
                  </div>
                </article>

                <article>
                  <h2 className="text-xl font-semibold text-[#1E2922] mb-4">
                    Hébergement
                  </h2>
                  <div className="text-[#64756C] leading-relaxed">
                    <p>Ce site est hébergé par Vercel Inc.</p>
                    <p>440 N Barranca Ave #4133</p>
                    <p>Covina, CA 91723, États-Unis</p>
                  </div>
                </article>

                <article>
                  <h2 className="text-xl font-semibold text-[#1E2922] mb-4">
                    Propriété intellectuelle
                  </h2>
                  <p className="text-[#64756C] leading-relaxed">
                    L&apos;ensemble du contenu de ce site (textes, images, logo) est la
                    propriété exclusive de BALISE Data. Toute reproduction est strictement
                    interdite sans accord écrit préalable.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-semibold text-[#1E2922] mb-4">
                    Protection des données personnelles
                  </h2>
                  <p className="text-[#64756C] leading-relaxed">
                    Les informations recueillies via le formulaire de contact sont destinées
                    uniquement à BALISE Data pour le traitement de votre demande. Ces données
                    sont conservées pendant 3 ans maximum. Conformément au Règlement Général
                    sur la Protection des Données (RGPD), vous pouvez exercer vos droits
                    d&apos;accès, de rectification et de suppression en nous contactant à :
                    balisedata@gmail.com
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-semibold text-[#1E2922] mb-4">
                    Cookies
                  </h2>
                  <p className="text-[#64756C] leading-relaxed">
                    Ce site n&apos;utilise pas de cookies de tracking ou de publicité.
                    Seuls des cookies techniques strictement nécessaires au fonctionnement
                    du site peuvent être utilisés.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-semibold text-[#1E2922] mb-4">
                    Droit applicable
                  </h2>
                  <p className="text-[#64756C] leading-relaxed">
                    Les présentes mentions légales sont soumises au droit français.
                    En cas de litige, les tribunaux français seront seuls compétents.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
