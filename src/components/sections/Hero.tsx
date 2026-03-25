interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="grain-texture relative bg-gradient-to-b from-breton-foam to-breton-sand -mt-16 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl lg:text-5xl leading-tight whitespace-pre-line">
            {title}
          </h1>
          {subtitle && <p className="mt-6 text-lg text-breton-slate leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
