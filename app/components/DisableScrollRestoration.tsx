"use client";

import { useEffect } from "react";

const DisableScrollRestoration = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const { history } = window;
    const original = history.scrollRestoration;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    return () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = original;
      }
    };
  }, []);

  return null;
};

export default DisableScrollRestoration;
