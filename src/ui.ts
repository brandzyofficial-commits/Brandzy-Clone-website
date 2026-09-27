import type { CSSProperties } from "react";

export const wrap: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 24px",
  width: "100%",
};

export const btnPrimary: CSSProperties = {
  background: "var(--grad)",
  color: "#fff",
  padding: "14px 24px",
  borderRadius: 12,
  fontSize: 16,
  fontWeight: 600,
  display: "inline-block",
};

export const btnGhost: CSSProperties = {
  border: "1px solid var(--line-2)",
  background: "var(--panel)",
  color: "var(--text)",
  padding: "14px 24px",
  borderRadius: 12,
  fontSize: 16,
  fontWeight: 600,
  display: "inline-block",
};

export const panel: CSSProperties = {
  background: "var(--panel)",
  border: "1px solid var(--line)",
  borderRadius: 18,
};

export const eyebrow: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--muted)",
};
