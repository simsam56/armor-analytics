'use client';

import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  actionPhoto?: string;
  actionAlt?: string;
  linkedin?: string;
}

const TEAM: TeamMember[] = [
  {
    name: 'Simon Hingant',
    role: 'Data Scientist — Fondateur',
    bio: 'Ingénieur génie des systèmes industriels. 7 ans en industrie. Architecture des solutions et stratégie data.',
    photo: '/simon.png',
    actionPhoto: '/simon-ordinateur.jpg',
    actionAlt: 'Simon Hingant présentant un tableau de bord data à un client',
    linkedin: 'https://www.linkedin.com/in/simonhingant/',
  },
  {
    name: 'Rémy',
    role: 'Data Engineer',
    bio: 'Conception des pipelines de données et des connecteurs entre vos outils. Architectures robustes et maintenables.',
    photo: '/remy.png',
    actionPhoto: '/remy-atelier.jpg',
    actionAlt: 'Rémy avec une tablette dans un atelier de production industrielle',
  },
  {
    name: 'Camille',
    role: 'Cybersécurité & Infrastructure',
    bio: 'Sécurisation des flux de données, hébergement en France, conformité RGPD. NDA et confidentialité.',
    photo: '/camille.png',
    actionPhoto: '/camille-atelier.jpg',
    actionAlt: 'Camille échangeant avec un responsable de production en atelier',
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="text-center group">
      <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 mb-5">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover rounded-2xl ring-2 ring-breton-navy/10 group-hover:ring-breton-accent/30 transition-all duration-300"
          sizes="(max-width: 640px) 144px, 176px"
        />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
      <p className="text-sm font-medium text-breton-accent">{member.role}</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 text-xs text-slate-400 hover:text-breton-accent transition-colors"
        >
          <Linkedin className="h-3.5 w-3.5" />
          LinkedIn
        </a>
      )}
    </div>
  );
}

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            L&apos;équipe
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Les experts derrière balise-ia
          </h2>
          <p className="mt-4 text-slate-600">
            Pas de commerciaux, pas de juniors. Vous travaillez directement avec les profils seniors
            qui réalisent le projet.
          </p>
        </div>

        {/* Photos terrain — l'équipe en action */}
        <div className="mb-16 grid grid-cols-3 gap-3 max-w-4xl mx-auto">
          {TEAM.map((member) =>
            member.actionPhoto ? (
              <div key={member.name} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={member.actionPhoto}
                  alt={member.actionAlt || `${member.name} en intervention`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 300px"
                />
              </div>
            ) : null
          )}
        </div>

        {/* Cartes membres */}
        <motion.div
          ref={ref}
          className="grid gap-10 sm:grid-cols-3 max-w-4xl mx-auto"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {TEAM.map((member) => (
            <motion.div key={member.name} variants={prefersReducedMotion ? {} : fadeInUp}>
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
