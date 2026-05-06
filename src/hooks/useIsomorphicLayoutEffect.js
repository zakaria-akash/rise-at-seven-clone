import { useEffect, useLayoutEffect } from "react";

// `useIsomorphicLayoutEffect` resolves to `useLayoutEffect` on the client
// and `useEffect` on the server so code that reads layout won't crash
// during SSR. Use this for animations that must run after DOM paint.
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
