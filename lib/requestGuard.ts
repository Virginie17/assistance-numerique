import { createHash } from "node:crypto";
// Best-effort per-instance protection. A shared deployment firewall is still needed
// to enforce a global limit across serverless instances.
const windows = new Map<string, { count: number; expires: number }>();
export function isRateLimited(request: Request, scope: string, limit = 5) {
  const now = Date.now();
  for (const [key, value] of windows)
    if (value.expires <= now) windows.delete(key);
  const ip =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (!ip) return false;
  const key = createHash("sha256").update(`${scope}:${ip}`).digest("hex");
  const item = windows.get(key) || { count: 0, expires: now + 600_000 };
  item.count++;
  windows.set(key, item);
  return item.count > limit;
}
