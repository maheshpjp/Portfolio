import React from "react";

function Experience() {
  const experiences = [
    {
      period: "june 2025 - august 2025",
      role: "React Native Developer Intern",
      company: "ProdigalAI",
      description:
        "Contributed to the development of a mobile application using React Native, implementing new features and optimizing performance. Collaborated with the design and backend teams to ensure seamless integration and a smooth user experience.",
      technologies: ["React Native", "JavaScript", "Git"],
      current: false,
    },
    {
    period: "Present",
    role: "Currently Learning & Building",
    company: "Self Development",
    description:
      "Currently expanding my knowledge in full-stack development, system design, and building real-world applications.",
    technologies: ["React", "Node.js", "DSA", "System Design"],
  },
  ];
  return (
    <section id="experience" className="py-25 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="terminal-pill inline-flex rounded-md px-4 py-2 text-[11px] animate-fade-in">
            Carrier Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Journey{" "}
            <span className="font-serif italic font-normal text-foreground">
              So Far
            </span>{" "}
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline showcasing my growth, learning, and experience as a
            developer.
          </p>
        </div>
        {/*timeline*/}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />
          {/*experiance*/}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping  opacity-75"/>)}
                </div>
                {/*content*/}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:col-start-2 md:text-left"}`}
                >
                  <div className="data-card p-6 rounded-2xl transition-all duration-500 hover:border-primary/40">
                    <div className="data-header">
                      <span className="flex items-center gap-3">
                        <span className="data-dot" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="text-primary">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mt-2 text-secondary-foreground">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx%2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, tectidx) => (
                        <span key={tectidx} className="px-3 py-1 bg-surface text-[11px] uppercase tracking-[0.14em] rounded-md text-muted-foreground border border-primary/10">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
