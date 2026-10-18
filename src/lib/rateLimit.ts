/**
 * Minimal in-memory rate limiter.
 *
 * Good enough to stop a script from hammering the contact form on a
 * single server instance. It resets on redeploy and does NOT work across
 * multiple serverless instances, so if this site grows real traffic,
 * swap this for a shared store like Upstash Redis (a few lines of change —
 * this function's signature stays the same).
 */

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, { count: number; windowStart: number }>();

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const entry = hits.get(identifier);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(identifier, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}
