const tips = [
  {
    title: "Safety on set",
    items: [
      "Confirm boundaries, safe words, and aftercare needs upfront.",
      "Know your coordinator or advocate and how to reach them fast.",
      "Request breaks and check-ins without apology.",
    ],
  },
  {
    title: "Health & care",
    items: [
      "Schedule regular screenings and store records securely.",
      "Hydrate, stretch, and plan recovery time between shoots.",
      "Choose protection that matches your comfort level.",
    ],
  },
  {
    title: "Digital safety",
    items: [
      "Separate personal and work identities when you need to.",
      "Turn on two-factor authentication everywhere you can.",
      "Keep a trusted contact for emergencies or doxxing.",
    ],
  },
  {
    title: "Community support",
    body:
      "You are not alone. Build peer circles, share knowledge, and celebrate your craft. " +
      "Your work is valid, your boundaries matter, and your well-being comes first.",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">Safe Set</div>
        <div className="hero">
          <p className="eyebrow">Solidarity & safety hub</p>
          <h1>Safety, dignity, and clarity for porn performers.</h1>
          <p className="lead">
            This space exists to affirm that adult performance is legitimate work.
            We offer practical steps, consent-first tips, and resources so performers
            feel protected and respected.
          </p>
        </div>
      </header>

      <main className="main">
        <section className="grid">
          {tips.map((tip) => (
            <article className="card" key={tip.title}>
              <h2>{tip.title}</h2>
              {tip.items ? (
                <ul>
                  {tip.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{tip.body}</p>
              )}
            </article>
          ))}
        </section>

        <section className="cta">
          You deserve safety, respect, and pride in your work.
        </section>
      </main>

      <footer className="footer">
        <span>Confidential resources • Consent-first practices • Performer-led guidance</span>
        <span>Reach out to a trusted advocate or organization for personalized support.</span>
      </footer>
    </div>
  );
}
