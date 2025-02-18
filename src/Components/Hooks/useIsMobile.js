import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

const useIsMobile = (breakpoint = MOBILE_BREAKPOINT) => {
  const mediaQuery = `(max-width: ${breakpoint - 1}px)`;

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(mediaQuery).matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const listener = (event) => {
      setIsMobile(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [mediaQuery]);

  return isMobile;
};

export default useIsMobile;
