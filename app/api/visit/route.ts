import { NextResponse } from "next/server"
import { zliczWizyteIZwroc } from "@/lib/redis"

// Ten plik to API endpoint — działa na serwerze, nie w przeglądarce
// Dostępny pod adresem: /api/visit
// Metoda POST — wywołujemy ją gdy ktoś wejdzie na stronę

export async function POST() {
  const wynik = await zliczWizyteIZwroc()

  if (!wynik) {
    // Brak konfiguracji Redis — zwróć zera (strona nadal działa)
    return NextResponse.json({ total: 0, dzis: 0, miesiac: 0 })
  }

  return NextResponse.json(wynik)
}
