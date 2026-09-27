import type { CSSProperties } from "react";
import Pricing from "./Pricing";
import { wrap, panel, btnPrimary, btnGhost, eyebrow } from "./ui";


function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: 9,
          background: "var(--grad)",
          display: "inline-block",
        }}
      />
      <strong style={{ fontSize: 18, letterSpacing: "-0.02em" }}>Brandzy</strong>
    </div>
  );
}

export function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        borderBottom: "1px solid var(--line)",
        background: "rgba(11,10,18,0.82)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          ...wrap,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          height: 68,
        }}
      >
        <a href="/">
          <Logo />
        </a>
        <nav
          style={{
            display: "flex",
            gap: 26,
            fontSize: 15,
            color: "var(--muted)",
          }}
        >
          <a className="nav-link" href="/#features">
            Features
          </a>
          <a className="nav-link" href="/#product">
            Product
          </a>
          <a className="nav-link" href="/#compare">
            Compare
          </a>
          <a className="nav-link" href="/pricing">
            Pricing
          </a>
        </nav>
        <a
          className="btn-primary"
          href="/pricing"
          style={{ ...btnPrimary, padding: "10px 18px", fontSize: 15 }}
        >
          Start free
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", marginTop: 8 }}>
      <div
        style={{
          ...wrap,
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          padding: "28px 24px",
          fontSize: 14,
          color: "var(--muted)",
        }}
      >
        <Logo />
        <span>The deal and payment OS for independent creators.</span>
        <span>© {new Date().getFullYear()} Brandzy</span>
      </div>
    </footer>
  );
}

/* ---------- hero mockup ---------- */

const recentDeals = [
  { brand: "Oatly", amount: "$4,200", stage: "Contracted", tone: "violet" },
  { brand: "Notion", amount: "$2,800", stage: "Negotiating", tone: "muted" },
  { brand: "Gymshark", amount: "$6,500", stage: "Paid", tone: "green" },
  { brand: "Athletic Greens", amount: "$3,150", stage: "Contracted", tone: "violet" },
];

function Badge({ label, tone }: { label: string; tone: string }) {
  const map: Record<string, { bg: string; fg: string }> = {
    violet: { bg: "rgba(124,92,255,0.16)", fg: "#b9a6ff" },
    coral: { bg: "rgba(255,107,107,0.16)", fg: "#ff9d9d" },
    green: { bg: "rgba(52,199,123,0.16)", fg: "#6fe0a8" },
    muted: { bg: "rgba(164,161,184,0.14)", fg: "#bdbacd" },
  };
  const c = map[tone] ?? map.muted;
  return (
    <span
      style={{
        background: c.bg,
        color: c.fg,
        fontSize: 12,
        fontWeight: 600,
        padding: "4px 10px",
        borderRadius: 999,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function HeroMockup() {
  return (
    <div style={{ ...panel, padding: 20, display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Dashboard</span>
        <span style={{ fontSize: 12, color: "var(--muted)" }}>This quarter</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: "var(--panel-2)", border: "1px solid var(--line)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6 }}>Pipeline value</div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>$46,750</div>
        </div>
        <div style={{ background: "var(--panel-2)", border: "1px solid var(--line)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6 }}>Active deals</div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>11</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>Recent deals</div>
        {recentDeals.map((d) => (
          <div
            key={d.brand}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              background: "var(--panel-2)",
              border: "1px solid var(--line)",
              borderRadius: 12,
              padding: "12px 14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 8,
                  background: "var(--line-2)",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {d.brand}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>{d.amount}</span>
              <Badge label={d.stage} tone={d.tone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}>
      <div
        style={{
          ...wrap,
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
          <span
            style={{
              ...eyebrow,
              border: "1px solid var(--line-2)",
              borderRadius: 999,
              padding: "6px 12px",
              background: "var(--panel)",
            }}
          >
            The deal &amp; payment OS for creators
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 4.6vw, 54px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 560,
            }}
          >
            Run your creator business{" "}
            <span className="grad-text">like a business.</span>
          </h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, color: "var(--muted)", maxWidth: 520 }}>
            Track every brand deal, invoice, and client from one app. No more
            digging through DMs, rebuilding the same spreadsheet, or chasing
            payments you already earned.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn-primary" href="/pricing" style={btnPrimary}>
              Start free
            </a>
            <a className="btn-ghost" href="#product" style={btnGhost}>
              See what it does
            </a>
          </div>
          <span style={{ fontSize: 14, color: "var(--muted)" }}>
            Free to start · No card required · 0% of your earnings
          </span>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}

const proof = [
  "Beauty creators",
  "Fitness coaches",
  "Tech reviewers",
  "Food creators",
  "Podcasters",
  "Travel creators",
  "Newsletter writers",
  "Gaming streamers",
];

function SocialProof() {
  return (
    <section style={{ borderBottom: "1px solid var(--line)", padding: "36px 0", overflow: "hidden" }}>
      <div style={{ ...wrap, display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "baseline" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <strong style={{ fontSize: 26, letterSpacing: "-0.02em" }}>$120M+</strong>
            <span style={{ fontSize: 14, color: "var(--muted)" }}>Deal value tracked</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <strong style={{ fontSize: 26, letterSpacing: "-0.02em" }}>40,000+</strong>
            <span style={{ fontSize: 14, color: "var(--muted)" }}>Creators onboard</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <strong style={{ fontSize: 26, letterSpacing: "-0.02em" }}>18 days</strong>
            <span style={{ fontSize: 14, color: "var(--muted)" }}>Faster average payout</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 28 }}>
        <div className="marquee-track">
          {[...proof, ...proof].map((p, i) => (
            <span key={i} style={{ fontSize: 15, color: "var(--muted)", whiteSpace: "nowrap" }}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { title: "Deal pipeline", body: "Every sponsorship in one board, from first DM to paid." },
  { title: "Invoicing", body: "Generate an invoice from the deal you already logged." },
  { title: "Client CRM", body: "Contacts, rates, and history for every brand you work with." },
  { title: "Deliverables tracking", body: "Know what you owe, when it's due, and what shipped." },
  { title: "Media kit", body: "A shareable link with your live stats and past partners." },
  { title: "Smart reminders", body: "Automatic nudges on unpaid invoices and late approvals." },
];

function Features() {
  return (
    <section id="features" style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}>
      <div style={{ ...wrap, padding: "72px 24px", display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={eyebrow}>Everything in one place</span>
          <h2 style={{ margin: 0, fontSize: "clamp(28px, 3.6vw, 40px)", letterSpacing: "-0.02em", maxWidth: 620 }}>
            The six things creators keep rebuilding by hand.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {features.map((f) => (
            <div key={f.title} className="card" style={{ ...panel, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ width: 30, height: 30, borderRadius: 10, background: "var(--grad)", opacity: 0.9 }} />
              <h3 style={{ margin: 0, fontSize: 17 }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- product showcase mockups ---------- */

const pipeline = [
  {
    stage: "Negotiating",
    tone: "muted",
    total: "$9,300",
    deals: [
      { brand: "Notion", amount: "$2,800" },
      { brand: "Ridge Wallet", amount: "$3,500" },
      { brand: "Bose", amount: "$3,000" },
    ],
  },
  {
    stage: "Contracted",
    tone: "violet",
    total: "$13,850",
    deals: [
      { brand: "Oatly", amount: "$4,200" },
      { brand: "Athletic Greens", amount: "$3,150" },
      { brand: "Squarespace", amount: "$6,500" },
    ],
  },
  {
    stage: "Paid",
    tone: "green",
    total: "$11,900",
    deals: [
      { brand: "Gymshark", amount: "$6,500" },
      { brand: "Manscaped", amount: "$2,400" },
      { brand: "HelloFresh", amount: "$3,000" },
    ],
  },
];

function PipelineMock() {
  return (
    <div style={{ ...panel, padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Deal pipeline</span>
        <span style={{ fontSize: 12, color: "var(--muted)" }}>9 deals · $35,050 open</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 }}>
        {pipeline.map((col) => (
          <div key={col.stage} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <Badge label={col.stage} tone={col.tone} />
              <span style={{ fontSize: 12, color: "var(--muted)" }}>{col.total}</span>
            </div>
            {col.deals.map((d) => (
              <div
                key={d.brand}
                style={{
                  background: "var(--panel-2)",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: "12px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  minHeight: 66,
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {d.brand}
                </span>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{d.amount}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const invoices = [
  { brand: "Oatly", ref: "INV-0142", amount: "$4,200", status: "Sent", tone: "violet", due: "Due in 12 days" },
  { brand: "Ridge Wallet", ref: "INV-0139", amount: "$3,500", status: "Overdue", tone: "coral", due: "9 days late" },
  { brand: "Gymshark", ref: "INV-0137", amount: "$6,500", status: "Paid", tone: "green", due: "Paid Mar 4" },
  { brand: "HelloFresh", ref: "INV-0134", amount: "$3,000", status: "Paid", tone: "green", due: "Paid Feb 26" },
];

function InvoiceMock() {
  return (
    <div style={{ ...panel, padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Invoices</span>
        <span style={{ fontSize: 12, color: "var(--muted)" }}>$7,700 outstanding</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {invoices.map((inv) => (
          <div
            key={inv.ref}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              background: "var(--panel-2)",
              border: "1px solid var(--line)",
              borderRadius: 12,
              padding: "12px 14px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{inv.brand}</span>
              <span style={{ fontSize: 12, color: "var(--muted)" }}>
                {inv.ref} · {inv.due}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 14 }}>{inv.amount}</span>
              <Badge label={inv.status} tone={inv.tone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MediaKitMock() {
  const stats = [
    { label: "Followers", value: "184K" },
    { label: "Engagement", value: "5.8%" },
    { label: "Brand deals", value: "37" },
  ];
  return (
    <div style={{ ...panel, padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Media kit</span>
        <span style={{ fontSize: 12, color: "var(--muted)" }}>brandzy.co/maya-reyes</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 52, height: 52, borderRadius: 999, background: "var(--grad)", flexShrink: 0 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <strong style={{ fontSize: 18, letterSpacing: "-0.01em" }}>Maya Reyes</strong>
          <span style={{ fontSize: 13, color: "var(--muted)" }}>Fitness &amp; nutrition · @mayamoves</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "var(--panel-2)",
              border: "1px solid var(--line)",
              borderRadius: 12,
              padding: 14,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.value}</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{s.label}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{ fontSize: 12, color: "var(--muted)" }}>Past partners</span>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Gymshark", "Oatly", "Athletic Greens", "Lululemon"].map((b) => (
            <span
              key={b}
              style={{
                fontSize: 13,
                border: "1px solid var(--line)",
                borderRadius: 999,
                padding: "5px 12px",
                color: "var(--muted)",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const showcase = [
  {
    eyebrow: "Deal pipeline",
    title: "See every deal and what it's worth.",
    body: "Drag a deal from negotiating to contracted to paid. You always know what's live, what's stalled, and what's coming in.",
    mock: <PipelineMock />,
  },
  {
    eyebrow: "Invoicing",
    title: "Invoice in one click, then stop chasing.",
    body: "Brandzy builds the invoice from the deal you already logged, sends it, and flags anything overdue before it becomes a problem.",
    mock: <InvoiceMock />,
  },
  {
    eyebrow: "Media kit",
    title: "One link that closes the next deal.",
    body: "Your stats and past partners stay current automatically. Send the link instead of rebuilding a PDF for every pitch.",
    mock: <MediaKitMock />,
  },
];

function Showcase() {
  return (
    <section id="product" style={{ borderBottom: "1px solid var(--line)" }}>
      <div style={{ ...wrap, padding: "72px 24px", display: "flex", flexDirection: "column", gap: 64 }}>
        {showcase.map((s, i) => (
          <div
            key={s.title}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                order: i % 2 === 1 ? 2 : 0,
              }}
            >
              <span style={eyebrow}>{s.eyebrow}</span>
              <h3 style={{ margin: 0, fontSize: "clamp(24px, 3vw, 34px)", letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: "var(--muted)", maxWidth: 460 }}>{s.body}</p>
            </div>
            <div style={{ order: 1 }}>{s.mock}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- comparison ---------- */

const rows = [
  { label: "Deal stages", old: "A tab you forgot to update", neu: "Live pipeline, always current" },
  { label: "Auto-generated invoices", old: "Retyped from scratch", neu: "Built from the deal in one click" },
  { label: "Payment reminders", old: "You, awkwardly, in the DMs", neu: "Sent automatically on your terms" },
  { label: "Shareable media kit", old: "A stale PDF from last year", neu: "Live link with current stats" },
  { label: "Cut of your brand deal earnings", old: "Whatever the middleman takes", neu: "0% — flat subscription" },
];

function Compare() {
  const cell: CSSProperties = {
    padding: "16px 18px",
    fontSize: 15,
    borderTop: "1px solid var(--line)",
    verticalAlign: "top",
  };
  return (
    <section id="compare" style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}>
      <div style={{ ...wrap, padding: "72px 24px", display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={eyebrow}>The honest comparison</span>
          <h2 style={{ margin: 0, fontSize: "clamp(28px, 3.6vw, 40px)", letterSpacing: "-0.02em", maxWidth: 620 }}>
            DMs and spreadsheets vs. Brandzy.
          </h2>
        </div>
        <div style={{ ...panel, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620 }}>
            <thead>
              <tr>
                <th style={{ ...cell, borderTop: "none", textAlign: "left", fontSize: 13, color: "var(--muted)", fontWeight: 600 }} />
                <th style={{ ...cell, borderTop: "none", textAlign: "left", fontSize: 14, color: "var(--muted)" }}>
                  DMs + spreadsheets
                </th>
                <th style={{ ...cell, borderTop: "none", textAlign: "left", fontSize: 14 }}>
                  <span className="grad-text" style={{ fontWeight: 700 }}>
                    Brandzy
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <td style={{ ...cell, fontWeight: 600, width: "32%" }}>{r.label}</td>
                  <td style={{ ...cell, color: "var(--muted)" }}>{r.old}</td>
                  <td style={{ ...cell, background: "rgba(124,92,255,0.06)" }}>{r.neu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------- pricing teaser ---------- */

function PricingTeaser() {
  return (
    <section style={{ borderBottom: "1px solid var(--line)" }}>
      <div
        style={{
          ...wrap,
          padding: "72px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
          <span style={eyebrow}>Pricing</span>
          <h2 style={{ margin: 0, fontSize: "clamp(28px, 3.6vw, 40px)", letterSpacing: "-0.02em" }}>
            Free to start. <span className="grad-text">0% of your earnings, ever.</span>
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: "var(--muted)", maxWidth: 480 }}>
            Brandzy is a flat subscription, not a commission. We never take a
            percentage of a brand deal you closed. Start on the free plan and
            upgrade when your pipeline outgrows it.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn-primary" href="/pricing" style={btnPrimary}>
              Start free
            </a>
            <a className="btn-ghost" href="/pricing" style={btnGhost}>
              See full pricing
            </a>
          </div>
        </div>
        <div style={{ ...panel, padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            "Unlimited deals on every plan",
            "Invoices and reminders included",
            "Live media kit link",
            "No card required to start",
            "0% commission on brand deals",
          ].map((t) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--grad)", flexShrink: 0 }} />
              <span style={{ fontSize: 15 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section>
      <div
        style={{
          ...wrap,
          padding: "88px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "clamp(30px, 4.4vw, 48px)", letterSpacing: "-0.03em", maxWidth: 680 }}>
          Your next brand deal deserves better than a spreadsheet.
        </h2>
        <p style={{ margin: 0, fontSize: 18, color: "var(--muted)", maxWidth: 520, lineHeight: 1.6 }}>
          Set up your pipeline in a few minutes and send your first invoice today.
        </p>
        <a className="btn-primary" href="/pricing" style={{ ...btnPrimary, padding: "16px 32px", fontSize: 17 }}>
          Start free
        </a>
        <span style={{ fontSize: 14, color: "var(--muted)" }}>
          No card required · Works in your browser
        </span>
      </div>
    </section>
  );
}

/* ---------- app ---------- */

function Landing() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <Showcase />
      <Compare />
      <PricingTeaser />
      <FinalCta />
    </>
  );
}

export default function App() {
  const isPricing =
    typeof window !== "undefined" && window.location.pathname.startsWith("/pricing");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>{isPricing ? <Pricing /> : <Landing />}</main>
      <Footer />
    </div>
  );
}
