interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="bg-breton-navy -mt-16 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight whitespace-pre-line">
            {title}
          </h1>
          {subtitle && <p className="mt-6 text-lg text-white/70 leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
