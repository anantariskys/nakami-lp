"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * The static shell renders without a year (Cache Components would otherwise
 * freeze it at build time); the client fills in the current one.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span>{year}</span>;
}
