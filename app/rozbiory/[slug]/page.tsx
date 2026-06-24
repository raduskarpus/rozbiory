import Link from "next/link";

// Dane każdego rozbioru - tutaj trzymamy treść
const dane: Record<string, {
  numer: string;
  rok: string;
  tytul: string;
  zajawka: string;
  tresc: string[];
}> = {
  pierwszy: {
    numer: "I",
    rok: "1772",
    tytul: "Pierwszy rozbiór Polski",
    zajawka: "5 sierpnia 1772 roku Rosja, Prusy i Austria podpisały w Petersburgu traktat, który odebrał Polsce około 30% terytorium i ponad 35% ludności.",
    tresc: [
      "Rzeczpospolita Obojga Narodów wchodziła w drugą połowę XVIII wieku osłabiona wewnętrznie. Liberum veto paraliżowało sejm, magnaci przedkładali własne interesy nad dobro państwa, a sąsiednie mocarstwa coraz śmielej ingerowały w wewnętrzne sprawy kraju.",
      "Bezpośrednim pretekstem do rozbioru stał się spór o dysydentów — czyli różnowierców (protestantów i prawosławnych) — których prawa polityczne chciała zagwarantować Rosja. Sejm Repninowski z 1767 roku, zwołany pod presją rosyjskiego ambasadora Nikołaja Repnina, uchwalił prawa dysydentów i potwierdził nienaruszalność konstytucji z wolną elekcją i liberum veto.",
      "W odpowiedzi zawiązała się Konfederacja Barska (1768–1772) — zbrojny ruch szlachty, który miał bronić niezależności Rzeczypospolitej i katolicyzmu. Mimo heroicznej walki, konfederaci ponieśli klęskę. Fryderyk II Wielki pruski wykorzystał zamieszanie i zaproponował Rosji oraz Austrii podział polskich ziem.",
      "5 sierpnia 1772 roku podpisano traktat rozbiorowy. Prusy zajęły Pomorze Gdańskie bez Gdańska i Warmię. Rosja wzięła wschodnie tereny Litwy i Białorusi. Austria zagarnęła Galicję z Lwowem. Polska straciła około 211 tysięcy km² i 4–5 milionów mieszkańców.",
    ],
  },
  drugi: {
    numer: "II",
    rok: "1793",
    tytul: "Drugi rozbiór Polski",
    zajawka: "Konstytucja 3 Maja 1791 roku dała nadzieję na odrodzenie państwa. Rosja i Prusy odpowiedziały kolejnym rozbiorem, pozostawiając Polskę jako marionetkowe państewko.",
    tresc: [
      "Uchwalona 3 maja 1791 roku Konstytucja była rewolucyjna na skalę europejską — druga na świecie po amerykańskiej. Znosiła liberum veto, wzmacniała władzę wykonawczą i dawała mieszczanom prawa polityczne. Polska zaczynała się podnosić.",
      "Rosja zareagowała natychmiast. Katarzyna II, zajęta wojną z Turcją, poczekała na jej zakończenie. W maju 1792 roku do Polski wkroczyła armia rosyjska. Część magnatów zawiązała Konfederację Targowicką — rzekomo w obronie starych wolności, w rzeczywistości jako narzędzie rosyjskiej polityki.",
      "Król Stanisław August Poniatowski, widząc beznadziejność sytuacji militarnej, przystąpił do targowicy i nakazał zaprzestanie walki. To była jego największa i najbardziej kontrowersyjna decyzja. Generałowie, którzy walczyli — w tym młody Tadeusz Kościuszko — byli wściekli.",
      "W styczniu 1793 roku Rosja i Prusy podpisały traktat II rozbioru. Prusy wzięły Wielkopolskę z Gdańskiem i Toruniem. Rosja zagarnęła ogromne połacie wschodnie. Polska skurczyła się do zaledwie 215 tysięcy km² — mniej niż jedna trzecia pierwotnego obszaru.",
    ],
  },
  trzeci: {
    numer: "III",
    rok: "1795",
    tytul: "Trzeci rozbiór Polski",
    zajawka: "Po klęsce powstania kościuszkowskiego Polska zniknęła z mapy Europy na 123 lata. 25 listopada 1795 roku król Stanisław August abdykował.",
    tresc: [
      "Drugi rozbiór wywołał desperację. W marcu 1794 roku w Krakowie Tadeusz Kościuszko ogłosił Akt Powstania i objął najwyższe dowództwo. Pod Racławicami kosynierzy — chłopi uzbrojeni w kosy — pokonali rosyjską artylerię. Polska zawrzała nadzieją.",
      "Powstanie ogarnęło cały kraj. W Warszawie lud wypędził rosyjski garnizon. Na Litwie walczył Jakub Jasiński. Ale siły były zbyt nierówne. Jesienią 1794 roku połączone armie Rosji i Prus zaczęły miażdżyć powstańców. Pod Maciejowicami Kościuszko został ranny i wzięty do niewoli. Podobno rzekł wtedy: 'Finis Poloniae' — koniec Polski.",
      "10 listopada 1794 roku generał Suworow szturmem zdobył Pragę — prawobrzeżne przedmieście Warszawy. Rzeź ludności cywilnej złamała opór stolicy. Powstanie upadło.",
      "24 października 1795 roku Rosja, Prusy i Austria podpisały traktat III rozbioru, dzieląc między siebie resztki Rzeczypospolitej. 25 listopada Stanisław August Poniatowski abdykował w Grodnie. Polska zniknęła z mapy Europy. Miała wrócić dopiero w 1918 roku — po 123 latach.",
    ],
  },
};

// params - Next.js automatycznie przekazuje parametry z URL
// np. dla /rozbiory/pierwszy: params.slug = "pierwszy"
export default async function RozbiórPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rozbior = dane[slug];

  // Jeśli ktoś wejdzie na nieistniejący adres
  if (!rozbior) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-stone-500">Nie znaleziono rozbioru.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1008]">

      {/* Górny pasek nawigacyjny */}
      <nav className="border-b border-stone-800 px-8 py-4">
        <Link
          href="/"
          className="text-stone-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2"
        >
          ← Powrót do strony głównej
        </Link>
      </nav>

      <article className="max-w-2xl mx-auto px-8 py-16">

        {/* Nagłówek artykułu */}
        <header className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            {/* Duża cyfra rzymska */}
            <span className="font-[family-name:var(--font-lora)] text-8xl font-bold text-amber-700 leading-none">
              {rozbior.numer}
            </span>
            <span className="text-stone-500 text-2xl">{rozbior.rok}</span>
          </div>

          <h1 className="font-[family-name:var(--font-lora)] text-4xl font-bold text-amber-100 mb-6 leading-tight">
            {rozbior.tytul}
          </h1>

          {/* Zajawka - pogrubiony wstęp */}
          <p className="text-amber-200/70 text-lg leading-relaxed border-l-2 border-amber-700 pl-6">
            {rozbior.zajawka}
          </p>
        </header>

        {/* Treść artykułu */}
        <div className="space-y-6">
          {rozbior.tresc.map((akapit, i) => (
            <p key={i} className="text-stone-400 leading-8 text-base">
              {akapit}
            </p>
          ))}
        </div>

        {/* Nawigacja między rozbiorami */}
        <div className="mt-16 pt-8 border-t border-stone-800">
          <p className="text-stone-600 text-xs uppercase tracking-widest mb-4">
            Inne rozbiory
          </p>
          <div className="flex gap-4">
            {["pierwszy", "drugi", "trzeci"].filter((s) => s !== slug).map((s) => (
              <Link
                key={s}
                href={`/rozbiory/${s}`}
                className="px-4 py-2 border border-stone-700 text-stone-400 text-sm rounded hover:border-amber-700 hover:text-amber-400 transition-colors capitalize"
              >
                {dane[s].numer} · {dane[s].rok}
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
}
