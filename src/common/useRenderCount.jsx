import { useRef, useEffect } from "react";

// Tracks and returns the current render count
export function useRenderCount(name = "Component") {
  const rawRef = useRef(0);

  // rawRef is incremented on *every* render
  rawRef.current += 1;

  // In dev+StrictMode each logical render is done twice,
  // so present half the number there.
  const isDev = process.env.NODE_ENV !== "production";
  const logical = isDev ? Math.ceil(rawRef.current / 2) : rawRef.current;

  useEffect(() => {
    console.log(`${name} rendered ${logical} times`);
  });

  return logical; // <── show this in the DOM
}
