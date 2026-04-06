const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function isRateLimited(
  ip: string,
  limit = 5,
  windowMs = 15 * 60 * 1000
): Promise<boolean> {
  // If Upstash is configured, use it (dynamic import to avoid bundling when not used)
  if (process.env.UPSTASH_REDIS_REST_URL) {
    try {
      const ratelimitMod = '@upstash/ratelimit';
      const redisMod = '@upstash/redis';
      // Dynamic import with variable to prevent TypeScript from resolving at compile time
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { Ratelimit } = (await import(ratelimitMod)) as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { Redis } = (await import(redisMod)) as any;
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      });
      const ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(limit, `${windowMs}ms`),
      });
      const { success } = await ratelimit.limit(ip);
      return !success;
    } catch {
      // If Upstash packages are not installed, fall through to in-memory
      console.warn('Upstash packages not available, falling back to in-memory rate limiting');
    }
  }

  // Fallback: in-memory rate limiting
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  entry.count++;
  return entry.count > limit;
}
