const services = [
  {
    title: "Brand Strategy",
    body: "Positioning, messaging, and naming built on research instead of guesswork.",
  },
  {
    title: "Visual Identity",
    body: "Logo systems, type, color, and guidelines your team can actually apply.",
  },
  {
    title: "Web & Product",
    body: "Marketing sites and product surfaces designed and shipped end to end.",
  },
  {
    title: "Content & Campaigns",
    body: "Launch assets, social systems, and campaign creative that stay on brand.",
  },
];

const stats = [
  { value: "120+", label: "Brands launched" },
  { value: "14", label: "Industries served" },
  { value: "4.9/5", label: "Client rating" },
];

const work = [
  { name: "Northline Logistics", tag: "Rebrand" },
  { name: "Cadence Health", tag: "Identity + Web" },
  { name: "Orbit Fintech", tag: "Product brand" },
];

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "20px 32px",
          borderBottom: "1px solid var(--line)",
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          <strong style={{ fontSize: 18, letterSpacing: "-0.02em" }}>Brandzy</strong>
        </div>
        <nav style={{ display: "flex", gap: 28, fontSize: 15, color: "var(--muted)" }}>
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#work">
            Work
          </a>
          <a className="nav-link" href="#process">
            Process
          </a>
        </nav>
        <a
          className="btn-primary"
          href="#contact"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Start a project
        </a>
      </header>

      <main style={{ flex: 1 }}>
        <section
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "96px 32px 72px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            Independent brand studio
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 760,
            }}
          >
            Brands that are clear, distinct, and built to scale.
          </h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, color: "var(--muted)", maxWidth: 620 }}>
            We work with founders and marketing teams to define positioning, design
            identity systems, and ship the websites that carry them.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              className="btn-primary"
              href="#contact"
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Book an intro call
            </a>
            <a
              className="btn-ghost"
              href="#work"
              style={{
                border: "1px solid var(--line)",
                padding: "14px 24px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              See selected work
            </a>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginTop: 24 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <strong style={{ fontSize: 28, letterSpacing: "-0.02em" }}>{s.value}</strong>
                <span style={{ fontSize: 14, color: "var(--muted)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--line)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "72px 32px", display: "flex", flexDirection: "column", gap: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h2 style={{ margin: 0, fontSize: 34, letterSpacing: "-0.02em" }}>What we do</h2>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 17, maxWidth: 560 }}>
                Four practices, one team. Engage them together or pick the piece you need.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              {services.map((s) => (
                <div
                  key={s.title}
                  className="card"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: 16,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: 18 }}>{s.title}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: 15, lineHeight: 1.6 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" style={{ maxWidth: 1080, margin: "0 auto", padding: "72px 32px", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ margin: 0, fontSize: 34, letterSpacing: "-0.02em" }}>Selected work</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {work.map((w) => (
              <article
                key={w.name}
                className="card"
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: 160, background: "var(--bg-soft)" }} />
                <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600 }}>{w.tag}</span>
                  <strong style={{ fontSize: 17 }}>{w.name}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--line)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "72px 32px", display: "flex", flexDirection: "column", gap: 24 }}>
            <h2 style={{ margin: 0, fontSize: 34, letterSpacing: "-0.02em" }}>How engagements run</h2>
            <ol
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                counterReset: "step",
              }}
            >
              {["Discover", "Define", "Design", "Deliver"].map((step, i) => (
                <li
                  key={step}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: 16,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>
                    Step {i + 1}
                  </span>
                  <strong style={{ fontSize: 18 }}>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="contact"
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "80px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 34, letterSpacing: "-0.02em" }}>
            Have a launch or rebrand coming up?
          </h2>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 17, maxWidth: 560, lineHeight: 1.6 }}>
            Tell us about the project and we will come back with scope, timeline, and a
            fixed price within two business days.
          </p>
          <a
            className="btn-primary"
            href="mailto:hello@brandzy.studio"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            hello@brandzy.studio
          </a>
        </section>
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--line)",
          padding: "24px 32px",
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 14,
          color: "var(--muted)",
        }}
      >
        <span>© {new Date().getFullYear()} Brandzy Studio</span>
        <span>Remote · Worldwide</span>
      </footer>
    </div>
  );
}
