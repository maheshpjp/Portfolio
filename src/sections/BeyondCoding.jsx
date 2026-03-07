import React from "react";
import {Rocket} from "lucide-react";
function BeyondCoding() {
  const beyondCoding = [
    {
      name: "Technical Executive — Cisco ThingQbator, RGIPT",
      date: "Apr 2024 – Apr 2025",
      description:
        "Worked as part of the technical team, contributing to innovation initiatives and supporting student-led tech development.",
    },
    {
      name: "Outreach Executive — Urjotsav, RGIPT Tech Fest",
      date: "Oct 2024 – Nov 2024",
      description:
        "Handled outreach activities and coordinated with teams to promote and manage the annual technical fest.",
    },
    {
      name: "Meshmerize — IIT Bombay TechFest",
      date: "2024",
      description:
        "1st Runner-Up, securing 2nd place among 2000+ participating teams in a national-level tech competition.",
    },
  ];
  return (
    <section id="beyondCoding" className="py-25 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-nedium tracking-wider uppercase animate-fade-in">
            ACTIVITIES & ACHIEVEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Beyond{" "}
            <span className="font-serif italic font-normal text-white">
               the Code
            </span>{" "}
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Experiences, leadership roles, and achievements that shaped my journey beyond development.
          </p>
        </div>
        <div>
          <div>
            <div>
              {beyondCoding.map((item, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 mb-8 animate-fade-in" style={{animationDelay: `${(idx+1)*100}ms`}}>
                  <div className="flex items-center gap-4 mb-2">
                    <Rocket className="text-primary w-6 h-6" />
                    <h3 className="text-xl font-bold text-secondary-foreground">{item.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.date}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeyondCoding;
