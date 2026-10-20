/**
 * Runs `cb` once the main thread is idle (or after `timeout` ms at the
 * latest), keeping non-critical animation setup out of the hydration window.
 * Returns a cancel function, suitable as an effect cleanup.
 */
export function afterIdle(cb: () => void, timeout = 800): () => void {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(cb, { timeout });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(cb, 120);
  return () => window.clearTimeout(id);
}
