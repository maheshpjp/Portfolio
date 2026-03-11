import React from "react";
import Button from "../components/Button";
import { ArrowRight, Download, Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
function Hero() {
  const skills = [
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Docker',
    'Redis',
    'mySQL',
    'AWS',
    'C/C++',
    'Git',
    'Figma',
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-10">
      {/*background image*/}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-20 saturate-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/85 to-background" />
      </div>
      {/*green dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-primary)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/*content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/*left*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="terminal-pill inline-flex items-center gap-2 px-4 py-2 rounded-md text-[11px]">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Student at Rajiv Gandhi Institute Of Petroleum Technology
              </span>
            </div>
            {/*headline*/}
            <div className="section-frame glass-strong p-6 md:p-8 space-y-5 animate-fade-in animation-delay-100">
              <div className="data-header">
                <span className="flex items-center gap-3">
                  <span className="data-dot" />
                  <span>Hero</span>
                </span>
                <span className="text-primary">Portfolio</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight glow-text">
                A learner today,
                <br />
                building{" "}
                <span className="text-primary glow-text">software</span>
                <br />
                <span className="font-serif italic font-normal text-foreground">
                  for tomorrow.
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200 leading-8">
              Hi, I’m Mahesh Kumar Prajapati — a Computer Science and Design student at RGIPT and an aspiring developer passionate about web development and building scalable applications.
              </p>
            </div>
            {/*cta buttons*/}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="#contact">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton className="ml-4" href="https://drive.google.com/file/d/1elL6ap5NUYimFEalD0jm7xlCDOvcA5c8/view?usp=drive_link">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/*social icons*/}
            <div className="data-card rounded-md px-5 py-4 flex items-center justify-between gap-4 animate-fade-in animation-delay-400">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Follow Me:</span>
              {[{icon: Github, href:"https://github.com/maheshpjp"},
                {icon: Linkedin, href:"https://www.linkedin.com/in/mahesh-kumar-prajapati-190721281/"},
                {icon: Instagram, href:"https://www.instagram.com/mahesh_pjp/"}
              ].map((social,idx)=>(
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-md glass hover:bg-primary/15 hover:text-primary transition-all duration-300">
                  {<social.icon className="w-5 h-5"/>}
                </a>
              ))}
            </div>
          </div>
          {/*right*/}
          <div className="relative top-[5px] animate-fade-in animation-delay-300">
            {/*profile*/}
            <div className="relative max-w-xl mx-auto pt-0">
              <div className="absolute -top-16 left-3 right-3 sm:left-auto sm:right-4 sm:w-[235px] z-20 data-card rounded-md px-3 sm:px-4 py-3 sm:py-3">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"/>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-secondary-foreground">Open to Opportunities</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/16 via-transparent to-primary/8 blur-2xl animate-pulse"/>
              <div className="section-frame relative data-card rounded-[1.75rem] p-4 glow-border">
                <div className="data-header px-2 pt-2">
                  <span className="flex items-center gap-3">
                    <span className="data-dot" />
                    <span>Profile</span>
                  </span>
                  <span className="text-primary">Mahesh Kumar Prajapati</span>
                </div>
                <div className="image-panel rounded-[1.3rem] overflow-hidden border border-primary/15">
                  <img src="/profile-photo.png" alt="Mahesh Kumar Prajapati" className="w-full aspect-[4/5.4] object-cover rounded-[1.3rem]" />
                </div>
                {/*floating badge*/}
                <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:bottom-4 sm:w-[235px] z-20 data-card rounded-md px-3 sm:px-4 py-2.5 sm:py-3 animate-float animation-delay-500">
                  <div className="text-[12px] sm:text-sm font-semibold uppercase tracking-[0.1em] text-primary leading-5">Ex. React Native Developer Intern</div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1">At ProdigalAI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*skills*/}
              <div className="mt-20 animate-fade-in animation-delay-600">
                <div className="section-frame data-card rounded-2xl px-6 py-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">Stack I Work With</p>
                <div className="relative overflow-hidden">
                  <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill,idx)=>(
                      <div key={idx} className="flex-shrink-0 px-8 py-4">
                        <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.18em] text-muted-foreground/55 hover:text-primary transition-colors">{skill}</span>
                        </div>
                    ))}
                  </div>
                </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                <span className="text-[11px] uppercase tracking-[0.22em]">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
                </a>
              </div>
      </div>
    </section>
  );
}

export default Hero;
