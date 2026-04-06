import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Politique de confidentialit\u00e9',
  description:
    'Politique de confidentialit\u00e9 et protection des donn\u00e9es personnelles du site balise-ia.fr. Informations RGPD.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Politique de confidentialit&eacute;
        </h1>

        <div className="mt-12 prose prose-slate max-w-none">
          <p>
            Derni&egrave;re mise &agrave; jour : 6 avril 2026
          </p>
          <p>
            La pr&eacute;sente politique de confidentialit&eacute; d&eacute;crit comment{' '}
            <strong>{SITE_CONFIG.name}</strong> collecte, utilise et prot&egrave;ge vos donn&eacute;es
            personnelles lorsque vous utilisez le site{' '}
            <a href={SITE_CONFIG.url} className="text-breton-copper hover:underline">
              {SITE_CONFIG.url}
            </a>
            , conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des
            Donn&eacute;es (RGPD) et &agrave; la loi Informatique et Libert&eacute;s.
          </p>

          <h2>1. Responsable de traitement</h2>
          <p>
            Le responsable du traitement des donn&eacute;es personnelles est :
          </p>
          <ul>
            <li>
              <strong>Nom</strong> : {SITE_CONFIG.name}
            </li>
            <li>
              <strong>Localisation</strong> : {SITE_CONFIG.location.city},{' '}
              {SITE_CONFIG.location.region}, France
            </li>
            <li>
              <strong>Email</strong> :{' '}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-breton-copper hover:underline">
                {SITE_CONFIG.email}
              </a>
            </li>
          </ul>

          <h2>2. Donn&eacute;es collect&eacute;es</h2>
          <p>Nous collectons les donn&eacute;es suivantes selon les formulaires utilis&eacute;s :</p>
          <h3>Formulaire de contact</h3>
          <ul>
            <li>Nom et pr&eacute;nom</li>
            <li>Adresse email</li>
            <li>Nom de l&apos;entreprise</li>
            <li>Fonction</li>
            <li>Num&eacute;ro de t&eacute;l&eacute;phone</li>
            <li>Message</li>
          </ul>
          <h3>Quiz audit IA</h3>
          <ul>
            <li>Adresse email</li>
            <li>Nom de l&apos;entreprise</li>
            <li>R&eacute;ponses au questionnaire</li>
          </ul>
          <h3>Donn&eacute;es de navigation</h3>
          <ul>
            <li>
              Donn&eacute;es d&apos;audience anonymis&eacute;es via Google Analytics (si vous avez
              donn&eacute; votre consentement)
            </li>
            <li>Donn&eacute;es techniques de performance via Vercel Analytics</li>
          </ul>

          <h2>3. Finalit&eacute;s du traitement</h2>
          <p>Vos donn&eacute;es sont collect&eacute;es pour les finalit&eacute;s suivantes :</p>
          <ul>
            <li>R&eacute;pondre &agrave; vos demandes de contact ou de diagnostic</li>
            <li>Vous envoyer les r&eacute;sultats de votre audit IA par email</li>
            <li>
              Am&eacute;liorer le site et comprendre comment il est utilis&eacute; (mesure
              d&apos;audience)
            </li>
          </ul>

          <h2>4. Base l&eacute;gale</h2>
          <ul>
            <li>
              <strong>Int&eacute;r&ecirc;t l&eacute;gitime</strong> : pour le traitement des demandes
              de contact et d&apos;audit (article 6.1.f du RGPD)
            </li>
            <li>
              <strong>Consentement</strong> : pour le d&eacute;p&ocirc;t de cookies d&apos;analyse
              Google Analytics (article 6.1.a du RGPD)
            </li>
          </ul>

          <h2>5. Destinataires des donn&eacute;es</h2>
          <p>
            Vos donn&eacute;es sont destin&eacute;es uniquement &agrave; {SITE_CONFIG.name}. Elles ne
            sont jamais vendues ni c&eacute;d&eacute;es &agrave; des tiers &agrave; des fins
            commerciales.
          </p>
          <p>Les sous-traitants suivants peuvent acc&eacute;der &agrave; vos donn&eacute;es :</p>
          <ul>
            <li>
              <strong>Resend</strong> : envoi d&apos;emails transactionnels (confirmation de contact,
              r&eacute;sultats d&apos;audit)
            </li>
            <li>
              <strong>Vercel</strong> : h&eacute;bergement du site et analytics de performance
            </li>
            <li>
              <strong>Google Analytics</strong> : mesure d&apos;audience (uniquement si vous avez
              accept&eacute; les cookies)
            </li>
          </ul>

          <h2>6. Dur&eacute;e de conservation</h2>
          <ul>
            <li>
              <strong>Donn&eacute;es de contact et d&apos;audit</strong> : 3 ans &agrave; compter du
              dernier contact
            </li>
            <li>
              <strong>Cookies d&apos;analyse</strong> : 13 mois maximum
            </li>
          </ul>

          <h2>7. Vos droits</h2>
          <p>
            Conform&eacute;ment au RGPD, vous disposez des droits suivants sur vos donn&eacute;es
            personnelles :
          </p>
          <ul>
            <li>
              <strong>Droit d&apos;acc&egrave;s</strong> : obtenir la confirmation que vos
              donn&eacute;es sont trait&eacute;es et en obtenir une copie
            </li>
            <li>
              <strong>Droit de rectification</strong> : corriger des donn&eacute;es inexactes ou
              incompl&egrave;tes
            </li>
            <li>
              <strong>Droit de suppression</strong> : demander l&apos;effacement de vos
              donn&eacute;es
            </li>
            <li>
              <strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos
              donn&eacute;es
            </li>
            <li>
              <strong>Droit &agrave; la portabilit&eacute;</strong> : recevoir vos donn&eacute;es dans
              un format structur&eacute; et lisible
            </li>
            <li>
              <strong>Droit &agrave; la limitation</strong> : demander la suspension du traitement de
              vos donn&eacute;es
            </li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous &agrave; :{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-breton-copper hover:underline">
              {SITE_CONFIG.email}
            </a>
          </p>
          <p>
            Vous disposez &eacute;galement du droit d&apos;introduire une r&eacute;clamation
            aupr&egrave;s de la CNIL (Commission Nationale de l&apos;Informatique et des
            Libert&eacute;s) :{' '}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-breton-copper hover:underline"
            >
              www.cnil.fr
            </a>
          </p>

          <h2>8. Cookies</h2>
          <p>
            Ce site utilise le service <strong>Google Analytics</strong> (identifiant : G-FEZEF30YF9)
            pour mesurer l&apos;audience. Ce cookie est soumis &agrave; votre consentement
            pr&eacute;alable via la banni&egrave;re de cookies affich&eacute;e lors de votre
            premi&egrave;re visite.
          </p>
          <p>
            Le <strong>consent mode v2</strong> de Google est activ&eacute; : par d&eacute;faut, le
            stockage analytique est refus&eacute; (<code>analytics_storage: denied</code>). Il
            n&apos;est activ&eacute; que si vous cliquez sur &laquo;&nbsp;Accepter&nbsp;&raquo;.
          </p>
          <p>
            Vous pouvez &agrave; tout moment r&eacute;voquer votre consentement en supprimant les
            cookies de votre navigateur ou en utilisant la banni&egrave;re de cookies du site.
          </p>
          <p>
            <strong>Vercel Analytics</strong> est &eacute;galement utilis&eacute; pour mesurer les
            performances du site. Ce service ne d&eacute;pose pas de cookies et ne collecte pas de
            donn&eacute;es personnelles.
          </p>

          <h2>9. Transferts hors Union europ&eacute;enne</h2>
          <p>
            Certains de nos sous-traitants sont situ&eacute;s aux &Eacute;tats-Unis :
          </p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong> (h&eacute;bergement)
            </li>
            <li>
              <strong>Google LLC</strong> (analytics)
            </li>
            <li>
              <strong>Resend</strong> (envoi d&apos;emails)
            </li>
          </ul>
          <p>
            Ces transferts sont encadr&eacute;s par des clauses contractuelles types (CCT)
            approuv&eacute;es par la Commission europ&eacute;enne et/ou le EU-U.S. Data Privacy
            Framework, garantissant un niveau de protection ad&eacute;quat de vos donn&eacute;es.
          </p>

          <h2>10. Modifications</h2>
          <p>
            {SITE_CONFIG.name} se r&eacute;serve le droit de modifier la pr&eacute;sente politique de
            confidentialit&eacute; &agrave; tout moment. La date de derni&egrave;re mise &agrave; jour
            est indiqu&eacute;e en haut de cette page. Nous vous invitons &agrave; la consulter
            r&eacute;guli&egrave;rement.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative &agrave; cette politique ou &agrave; vos donn&eacute;es
            personnelles, contactez-nous &agrave; :{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-breton-copper hover:underline">
              {SITE_CONFIG.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
