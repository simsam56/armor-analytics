const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

/**
 * Rate limiting utility — in-memory par défaut.
 *
 * Pour le rate limiting distribué (multi-instances Vercel), installer les packages Upstash :
 *   npm install @upstash/ratelimit @upstash/redis
 * Puis configurer UPSTASH_REDIS_REST_URL et UPSTASH_REDIS_REST_TOKEN dans les env vars Vercel.
 * Décommenter le bloc Upstash ci-dessous et commenter le fallback in-memory.
 */
export async function isRateLimited(
  ip: string,
  limit = 5,
  windowMs = 15 * 60 * 1000
): Promise<boolean> {
  // --- Upstash Redis (décommenter après npm install @upstash/ratelimit @upstash/redis) ---
  // if (process.env.UPSTASH_REDIS_REST_URL) {
  //   const { Ratelimit } = await import('@upstash/ratelimit');
  //   const { Redis } = await import('@upstash/redis');
  //   const redis = new Redis({
  //     url: process.env.UPSTASH_REDIS_REST_URL!,
  //     token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  //   });
  //   const ratelimit = new Ratelimit({
  //     redis,
  //     limiter: Ratelimit.slidingWindow(limit, `${windowMs}ms`),
  //   });
  //   const { success } = await ratelimit.limit(ip);
  //   return !success;
  // }

  // Fallback : in-memory rate limiting (suffisant pour une seule instance)
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  entry.count++;
  return entry.count > limit;
}
