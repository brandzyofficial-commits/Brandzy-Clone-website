import { wrap, panel, btnPrimary, btnGhost, eyebrow } from "./ui";

const plans = [
  {
    name: "Starter",
    price: "$0",
    note: "Free forever",
    blurb: "For creators closing their first few deals.",
    features: [
      "Up to 5 active deals",
      "Deal pipeline",
      "2 invoices per month",
      "Basic media kit link",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    note: "per month",
    blurb: "For creators with a steady sponsorship pipeline.",
    features: [
      "Unlimited deals and invoices",
      "Client CRM and rate history",
      "Deliverables tracking",
      "Automatic payment reminders",
      "Custom media kit link",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Studio",
    price: "$49",
    note: "per month",
    blurb: "For creators working with a manager or small team.",
    features: [
      "Everything in Pro",
      "Up to 5 seats",
      "Manager and assistant roles",
      "Contract templates",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <>
      <section style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}>
        <div
          style={{
            ...wrap,
            padding: "72px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span style={eyebrow}>Pricing</span>
          <h1 style={{ margin: 0, fontSize: "clamp(32px, 4.6vw, 52px)", letterSpacing: "-0.03em", maxWidth: 680 }}>
            Flat monthly pricing.{" "}
            <span className="grad-text">0% of your earnings, ever.</span>
          </h1>
          <p style={{ margin: 0, fontSize: 18, color: "var(--muted)", maxWidth: 520, lineHeight: 1.6 }}>
            No commission on brand deals, no payout fees, no card required to
            start. Cancel whenever.
          </p>
        </div>
      </section>

      <section>
        <div
          style={{
            ...wrap,
            padding: "56px 24px 72px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            alignItems: "start",
          }}
        >
          {plans.map((p) => (
            <div
              key={p.name}
              className="card"
              style={{
                ...panel,
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                borderColor: p.highlight ? "var(--violet)" : "var(--line)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <strong style={{ fontSize: 17 }}>{p.name}</strong>
                {p.highlight && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "rgba(124,92,255,0.16)",
                      color: "#b9a6ff",
                    }}
                  >
                    Most popular
                  </span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em" }}>{p.price}</span>
                <span style={{ fontSize: 14, color: "var(--muted)" }}>{p.note}</span>
              </div>
              <p style={{ margin: 0, fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>{p.blurb}</p>
              <a
                className={p.highlight ? "btn-primary" : "btn-ghost"}
                href="/pricing"
                style={{ ...(p.highlight ? btnPrimary : btnGhost), textAlign: "center" }}
              >
                {p.cta}
              </a>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, borderTop: "1px solid var(--line)", paddingTop: 18 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--grad)", flexShrink: 0 }} />
                    <span style={{ fontSize: 15 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
        <div
          style={{
            ...wrap,
            padding: "64px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "clamp(26px, 3.4vw, 36px)", letterSpacing: "-0.02em", maxWidth: 560 }}>
            Still deciding? Start on the free plan.
          </h2>
          <a className="btn-primary" href="/pricing" style={{ ...btnPrimary, padding: "16px 32px", fontSize: 17 }}>
            Start free
          </a>
          <span style={{ fontSize: 14, color: "var(--muted)" }}>
            No card required · Works in your browser
          </span>
        </div>
      </section>
    </>
  );
}
