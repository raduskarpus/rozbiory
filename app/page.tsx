import Image from "next/image";
import Link from "next/link";

const rozbiory = [
  { numer: "I",   rok: "1772", slug: "pierwszy" },
  { numer: "II",  rok: "1793", slug: "drugi" },
  { numer: "III", rok: "1795", slug: "trzeci" },
];

export default function Home() {
  return (
    // h-screen = pełna wysokość okna przeglądarki
    // flex = układamy dzieci obok siebie (lewa i prawa kolumna)
    <div className="flex h-screen">

      {/* ===== LEWA KOLUMNA ===== */}
      {/* flex-1 = zajmij tyle miejsca ile zostanie po prawej kolumnie */}
      <div className="flex flex-1 flex-col justify-between bg-[#1a1008] px-14 py-16">

        {/* Górna część: tytuł */}
        <div>
          <p className="text-amber-600 text-xs font-semibold uppercase tracking-[0.3em] mb-8">
            Rzeczpospolita Obojga Narodów
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-7xl font-bold text-amber-100 leading-none whitespace-nowrap">
            Rozbiory
          </h1>
          <p className="text-stone-500 text-sm mt-6 leading-relaxed max-w-xs">
            Trzy akty rozbiorów. Historia końca państwa,
            które przez wieki kształtowało Europę Środkową.
          </p>
        </div>

        {/* Dolna część: cyfry rzymskie jako linki */}
        <div className="flex flex-col gap-2">
          <p className="text-stone-600 text-xs uppercase tracking-widest mb-4">
            Wybierz rozbiór
          </p>

          {rozbiory.map((r) => (
            // Link to komponent Next.js do nawigacji między stronami
            // href="/rozbiory/pierwszy" itd.
            <Link
              key={r.slug}
              href={`/rozbiory/${r.slug}`}
              className="group flex items-center gap-5 py-4 border-t border-stone-800 hover:border-amber-700 transition-colors"
            >
              {/* Cyfra rzymska */}
              <span className="font-[family-name:var(--font-lora)] text-4xl font-bold text-stone-700 group-hover:text-amber-500 transition-colors w-16">
                {r.numer}
              </span>

              {/* Rok */}
              <span className="text-stone-500 text-sm group-hover:text-stone-300 transition-colors">
                {r.rok}
              </span>

              {/* Strzałka pojawiająca się na hover */}
              <span className="ml-auto text-stone-700 group-hover:text-amber-500 transition-all group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Link do mapy */}
        <Link
          href="/mapa"
          className="group flex items-center gap-3 mt-6 pt-6 border-t border-stone-800 text-stone-500 hover:text-amber-400 transition-colors text-sm"
        >
          <span className="text-lg">🗺</span>
          <span>Mapa zmian terytorialnych 1733–1795</span>
          <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
        </Link>

      </div>

      {/* ===== PRAWA KOLUMNA - obraz ===== */}
      {/* relative = potrzebne żeby Image z fill działało */}
      {/* w-[55%] = obraz zajmuje 55% szerokości */}
      <div className="relative w-[55%]">
        <Image
          src="/krol2.png"
          alt="Stanisław August Poniatowski - ostatni król Polski"
          fill
          // sizes mówi przeglądarce jak duży będzie obraz w zależności od ekranu
          // "55vw" = 55% szerokości okna (tyle zajmuje prawa kolumna)
          sizes="55vw"
          className="object-cover object-top"
          priority
        />
        {/* Gradient zaciemniający lewą krawędź obrazu - płynne przejście */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008] via-transparent to-transparent" />

        {/* Podpis na obrazie */}
        <div className="absolute bottom-6 right-6 text-right">
          <p className="text-white/60 text-xs">
            Stanisław August Poniatowski
          </p>
          <p className="text-white/40 text-xs">
            Ostatni król Polski, 1764–1795
          </p>
        </div>
      </div>

    </div>
  );
}
