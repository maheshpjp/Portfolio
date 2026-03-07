import React from "react";
import Button from "../components/Button";
import { ArrowRight, Download, Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
function hero() {
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*background image*/}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/*green dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Student at Rajiv Gandhi Institute Of Petroleum Technology
              </span>
            </div>
            {/*headline*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                A learner today,
                <br />
                building{" "}
                <span className="text-primary glow-text">software</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  for tomorrow.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I’m Mahesh Kumar Prajapati — a Computer Science and Design student at RGIPT and an aspiring developer passionate about web development and building scalable applications.
              </p>
            </div>
            {/*cta buttons*/}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Button size="lg">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton className="ml-4">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/*social icons*/}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[{icon: Github, href:"https://github.com/maheshpjp"},
                {icon: Linkedin, href:"https://www.linkedin.com/in/mahesh-kumar-prajapati-190721281/"},
                {icon: Instagram, href:"https://www.instagram.com/mahesh_pjp/"}
              ].map((social,idx)=>(
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-primary/15 hover:text-primary transiton-all duration-300">
                  {<social.icon className="w-5 h-5"/>}
                </a>
              ))}
            </div>
          </div>
          {/*right*/}
          <div className="relative animate-fade-in animation-delay-300">
            {/*profile*/}
            <div className="reltive max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/profile-photo.png" alt="Mahesh Kumar Prajapati" className="w-full aspect-[4/5.4] object-cover rounded-2xl" />
                {/*floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                    <span className="text-sm font-md">Open to Opportunities</span>
                  </div>
                </div>
                {/*stats badge*/}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-y py-3 animate-float animation-delay-500">
                  <div className="text-1.5xl font-bold text-primary">Ex. React Native Developer Intern</div>
                  <div className="text-xs text-muted-foreground">At ProdigalAI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*skills*/}
              <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Stack I Work With</p>
                <div className="relative overflow-hidden">
                  <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill,idx)=>(
                      <div key={idx} className="flex-shrink-0 px-8 py-4">
                        <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
                </a>
              </div>
      </div>
    </section>
  );
}

export default hero;
