import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Rendu réel"
          title="Du clair"
          highlight="au très foncé"
          text="Chaque film change l'ambiance de l'habitacle : lumière, chaleur et intimité. Voici l'écart entre les teintes."
        />

        <div className="grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-5">
            <figure className="overflow-hidden rounded-3xl border border-white/[0.08] bg-coal">
              <Image
                src="/images/teintes-nuancier.avif"
                alt="Nuancier de films teintés, du plus foncé au plus clair, devant un coucher de soleil"
                width={1500}
                height={768}
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="flex items-center justify-between px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/45 sm:px-8">
                <span>Très foncé</span>
                <span className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent mx-4" />
                <span>Clair</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={100}>
            <figure className="h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-coal">
              <Image
                src="/images/teinte-berline-grise.avif"
                alt="Berline grise avec vitres arrière teintées"
                width={1500}
                height={728}
                sizes="(min-width: 1024px) 720px, 100vw"
                className="h-auto w-full"
              />
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={200}>
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/[0.08] bg-coal p-6 sm:p-8">
              <Image
                src="/images/teinte-berline-blanche.avif"
                alt="Berline blanche avec film teinté sur les vitres arrière et la lunette"
                width={660}
                height={318}
                sizes="(min-width: 1024px) 420px, 90vw"
                className="mx-auto h-auto w-full max-w-md"
              />
              <figcaption className="mt-6">
                <p className="font-semibold text-white">Lunette et vitres arrière</p>
                <p className="mt-1 text-sm text-white/50">
                  Découpe sur mesure : le film épouse la forme de chaque vitre.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
