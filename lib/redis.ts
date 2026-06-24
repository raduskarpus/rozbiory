import { Redis } from "@upstash/redis"

// Redis.fromEnv() czyta automatycznie zmienne środowiskowe:
// UPSTASH_REDIS_REST_URL i UPSTASH_REDIS_REST_TOKEN
// Ustawiamy je w Vercelu (Settings → Environment Variables)

let redis: Redis | null = null

function getRedis(): Redis | null {
  // Jeśli brak zmiennych środowiskowych — zwróć null (nie crashuj)
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  if (!redis) {
    redis = Redis.fromEnv()
  }
  return redis
}

// Klucze w bazie danych:
// "wizyty:total"        → łączna liczba od zawsze
// "wizyty:dzien:2026-06-24" → liczba dzisiaj
// "wizyty:miesiac:2026-06"  → liczba w tym miesiącu

export async function zliczWizyteIZwroc() {
  const r = getRedis()
  if (!r) return null

  const teraz = new Date()
  // Klucze oparte na dacie — zerują się automatycznie przez TTL
  const dzienKlucz = `wizyty:dzien:${teraz.toISOString().split("T")[0]}`
  const miesiacKlucz = `wizyty:miesiac:${teraz.toISOString().substring(0, 7)}`

  // incr() zwiększa wartość o 1 i zwraca nową wartość
  // Promise.all() wykonuje wszystkie trzy operacje równocześnie (szybciej)
  const [total, dzis, miesiac] = await Promise.all([
    r.incr("wizyty:total"),
    r.incr(dzienKlucz),
    r.incr(miesiacKlucz),
  ])

  // Ustaw wygaśnięcie kluczy dziennych i miesięcznych (żeby baza się nie zapychała)
  // 90 dni dla kluczy dziennych, 400 dni dla miesięcznych
  await Promise.all([
    r.expire(dzienKlucz, 60 * 60 * 24 * 90),
    r.expire(miesiacKlucz, 60 * 60 * 24 * 400),
  ])

  return { total, dzis, miesiac }
}
