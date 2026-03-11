import React from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Developer",
      description:
        "I have experience in building web applications using React, Node.js, and MongoDB.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "I enjoy solving complex problems and finding efficient solutions.",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description:
        "I am quick to learn new technologies and adapt to changing environments.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "I collaborate effectively with others and contribute to a positive team dynamic.",
    },
  ];
  return (
    <section id="about" className="py-25 px-6 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/*left*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
            <span className="terminal-pill inline-flex rounded-md px-4 py-2 text-[11px]">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Solving problems with logic,
            <span className="font-serif italic font-normal text-foreground"> building solutions with code</span>
          </h2>
          <div className="section-frame glass-strong p-6 md:p-8 space-y-4 text-muted-foreground animate-fade-in animation-delay-200 leading-8">
            <p>
              I am a passionate software developer who enjoys building software and turning ideas into working applications. I like solving problems through code and understanding how different parts of a system work together. Working on projects helps me learn new concepts and improve the way I design and build applications.
            </p>
            <p>
              I am always trying to improve my skills by exploring new technologies and building things that challenge me. My goal is to grow as a software developer and contribute to building useful and scalable products that people can rely on.
            </p>
          </div>
          <div className="data-card rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <div className="data-header">
              <span className="flex items-center gap-3">
                <span className="data-dot" />
                <span>Mission</span>
              </span>
            </div>
            <p className="text-lg font-medium italic text-foreground">
              "My mission is to solve real-world problems by learning and building scalable and reliable software"
            </p>
          </div>
        </div>
        {/*right*/}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item,idx) => (
            <div key={idx} className="data-card rounded-2xl p-6 animate-fade-in" style={{animationDelay:`${(idx+1)*100}ms` }}>
              <div className="data-header">
                <span className="flex items-center gap-3">
                  <span className="data-dot" />
                  <span>{item.title}</span>
                </span>
              </div>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary"/></div>
              <h3 className="text-lg font-semibold mb-2 text-secondary-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>  
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
