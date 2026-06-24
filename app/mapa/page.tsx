"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const MAPY = [
  {
    rok: "1772",
    tytul: "I rozbiór",
    src: "/mapa-1772.png",
    opis: "Rosja, Prusy i Austria podpisują traktat rozbiorowy w Petersburgu. Polska traci ok. 211 tys. km² i 4–5 mln ludności. Prusy biorą Pomorze, Rosja — wschód, Austria — Galicję.",
  },
  {
    rok: "1772–1792",
    tytul: "Po I rozbiorze",
    src: "/mapa-1772-1792.png",
    opis: "Przez 20 lat Polska funkcjonuje jako okrojone państwo pod silnym wpływem Rosji. W 1791 roku uchwalona zostaje Konstytucja 3 Maja — pierwsza w Europie nowoczesna ustawa zasadnicza. To ostatnia próba ratowania Rzeczypospolitej.",
  },
  {
    rok: "1792–1795",
    tytul: "Po II rozbiorze",
    src: "/mapa-1792-1795.png",
    opis: "Po II rozbiorze (1793) Polska kurczy się do zaledwie 215 tys. km². Targowica i rosyjska interwencja unicestwiają Konstytucję 3 Maja. W 1794 roku wybucha powstanie kościuszkowskie — ostatnia desperacka próba obrony niepodległości.",
  },
  {
    rok: "1795",
    tytul: "III rozbiór",
    src: null,
    opis: "Po klęsce powstania kościuszkowskiego Polska znika z mapy Europy. Rosja, Prusy i Austria dzielą między siebie resztę terytorium. Powróci dopiero w 1918 roku.",
  },
]

export default function MapaPage() {
  const [aktywny, setAktywny] = useState(0)

  const mapa = MAPY[aktywny]

  return (
    <div className="min-h-screen bg-[#1a1008] text-amber-100">

      <nav className="border-b border-stone-800 px-8 py-4">
        <Link href="/" className="text-stone-500 hover:text-amber-400 text-sm transition-colors">
          ← Powrót
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="mb-8">
          <p className="text-amber-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Zmiany terytorialne
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl font-bold text-amber-100">
            Mapa rozbiorów Polski
          </h1>
        </div>

        {/* Przyciski wyboru roku */}
        <div className="flex gap-3 mb-6">
          {MAPY.map((m, i) => (
            <button
              key={m.rok}
              onClick={() => setAktywny(i)}
              className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                aktywny === i
                  ? "bg-amber-700 border-amber-600 text-amber-100"
                  : "bg-stone-900 border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"
              }`}
            >
              {m.rok} — {m.tytul}
            </button>
          ))}
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 mb-6">
          {mapa.src ? (
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={mapa.src}
                alt={`Mapa Polski po ${mapa.tytul === "I rozbiór" ? "pierwszym" : mapa.tytul === "II rozbiór" ? "drugim" : "trzecim"} rozbiorze ${mapa.rok}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          ) : (
            // Placeholder gdy zdjęcie jeszcze nie dodane
            <div className="flex items-center justify-center h-80 text-stone-600">
              <div className="text-center">
                <div className="text-5xl mb-4">🗺</div>
                <p className="text-sm">Mapa {mapa.rok} — wkrótce</p>
              </div>
            </div>
          )}
        </div>

        {/* Opis */}
        <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-[family-name:var(--font-lora)] text-3xl font-bold text-amber-500">
              {mapa.rok}
            </span>
            <span className="text-stone-400 font-medium">{mapa.tytul}</span>
          </div>
          <p className="text-stone-300 leading-relaxed">{mapa.opis}</p>
        </div>

      </div>
    </div>
  )
}
