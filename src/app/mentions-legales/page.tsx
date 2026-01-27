import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et informations juridiques du site Balise Data.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegalPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Mentions légales</h1>

        <div className="mt-12 prose prose-gray max-w-none">
          <h2>Éditeur du site</h2>
          <p>
            <strong>{SITE_CONFIG.name}</strong>
            <br />
            Email : {SITE_CONFIG.email}
            <br />
            Localisation : {SITE_CONFIG.location.region}, France
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723, États-Unis
            <br />
            Site web : vercel.com
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
            est la propriété exclusive d&apos;{SITE_CONFIG.name}, à l&apos;exception des marques,
            logos ou contenus appartenant à d&apos;autres sociétés partenaires ou auteurs.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou
            publication de ces différents éléments est strictement interdite sans l&apos;accord
            exprès par écrit d&apos;{SITE_CONFIG.name}.
          </p>

          <h2>Protection des données personnelles</h2>
          <p>
            Les informations recueillies via le formulaire de contact sont enregistrées dans un
            fichier informatisé par {SITE_CONFIG.name} pour la gestion de la relation client et le
            suivi des demandes.
          </p>
          <p>
            Elles sont conservées pendant 3 ans et sont destinées uniquement à {SITE_CONFIG.name}.
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez
            exercer votre droit d&apos;accès aux données vous concernant et les faire rectifier en
            nous contactant à : {SITE_CONFIG.email}
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site peut utiliser des cookies à des fins de mesure d&apos;audience et
            d&apos;amélioration de l&apos;expérience utilisateur. Vous pouvez configurer votre
            navigateur pour refuser les cookies.
          </p>

          <h2>Limitation de responsabilité</h2>
          <p>
            {SITE_CONFIG.name} ne pourra être tenu responsable des dommages directs ou indirects
            causés au matériel de l&apos;utilisateur lors de l&apos;accès au site, et résultant soit
            de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications techniques
            requises, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
          </p>
          <p>
            {SITE_CONFIG.name} ne pourra également être tenu responsable des dommages indirects
            consécutifs à l&apos;utilisation du site.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les
            tribunaux français seront seuls compétents.
          </p>
        </div>
      </div>
    </section>
  );
}
