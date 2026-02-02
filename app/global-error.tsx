"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#040010" }}>
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "400px",
              padding: "20px",
              color: "white",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Something went wrong
            </h2>

            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
              Please refresh the page or try again later.
            </p>

            <button
              onClick={() => (window.location.href = "/")}
              style={{
                background: "#8133F1",
                color: "white",
                border: "none",
                borderRadius: "9999px",
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
