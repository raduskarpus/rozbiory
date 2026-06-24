"use client"

import { useEffect, useState } from "react"

type Statystyki = {
  total: number
  dzis: number
  miesiac: number
}

export default function LicznikOdwiedzin() {
  const [statystyki, setStatystyki] = useState<Statystyki | null>(null)

  useEffect(() => {
    // useEffect uruchamia się raz po załadowaniu strony w przeglądarce
    // Wywołujemy API które:
    //   1. Zlicza tę wizytę w bazie danych
    //   2. Zwraca aktualne statystyki
    fetch("/api/visit", { method: "POST" })
      .then((res) => res.json())
      .then((dane) => setStatystyki(dane))
      .catch(() => {}) // błąd sieci — po cichu ignorujemy
  }, []) // [] = uruchom tylko raz (nie za każdym re-renderem)

  // Dopóki dane nie wróciły — nic nie pokazuj
  if (!statystyki) return null

  return (
    <div className="mt-8 pt-6 border-t border-stone-800">
      <p className="text-stone-600 text-xs uppercase tracking-widest mb-3">
        Odwiedziny
      </p>
      <div className="flex gap-6">
        <div className="text-center">
          <div className="font-[family-name:var(--font-lora)] text-2xl font-bold text-amber-700">
            {statystyki.dzis.toLocaleString("pl-PL")}
          </div>
          <div className="text-stone-600 text-xs mt-1">dziś</div>
        </div>
        <div className="w-px bg-stone-800" />
        <div className="text-center">
          <div className="font-[family-name:var(--font-lora)] text-2xl font-bold text-amber-700">
            {statystyki.miesiac.toLocaleString("pl-PL")}
          </div>
          <div className="text-stone-600 text-xs mt-1">ten miesiąc</div>
        </div>
        <div className="w-px bg-stone-800" />
        <div className="text-center">
          <div className="font-[family-name:var(--font-lora)] text-2xl font-bold text-amber-700">
            {statystyki.total.toLocaleString("pl-PL")}
          </div>
          <div className="text-stone-600 text-xs mt-1">łącznie</div>
        </div>
      </div>
    </div>
  )
}
