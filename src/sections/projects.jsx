import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react'
function projects() {
  const projects = [
    {
      title: "movie ticket booking platform",
      description: "A movie ticket booking platform built using React, Node.js, and MongoDB. It allows users to browse movies, select seats, and make secure payments for their bookings.",
      image: "/movie-ticket.png",
      tags : ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "https://github.com/example/movie-booking"
    },
    {
      title: "Real-Time Chat with Call & Multi-User Whiteboard",
      description: "A real-time chat application with video call and multi-user whiteboard features, built using React, Socket.io, and WebRTC. It enables users to communicate seamlessly while collaborating on a shared whiteboard.",
      image: "/chat-app.png",
      tags : ["React", "Socket.io", "WebRTC"],
      link: "#",
      github: "https://github.com/example/chat-app"
    },
    {
      title: "weather+news dashboard",
      description: "A weather and news dashboard built using React and various APIs. It provides users with real-time weather updates and the latest news headlines in a visually appealing interface.",
      image: "/weather-news.png",
      tags : ["React", "APIs"],
      link: "#",
      github: "https://github.com/maheshpjp/weather-news-dashboard"
    },
    {
      title: "Advanced Soil Monitoring System ",
      description: "An advanced soil monitoring system built using IoT sensors and a web dashboard. It collects real-time data on soil moisture, temperature, and nutrient levels, providing farmers with actionable insights to optimize crop growth.",
      image: "/smart-irrigation.png",
      tags : ["IoT", "Web Dashboard"],
      link: "#",
      github: "https://github.com/maheshpjp/soil-monitoring"
    }
  ];
  return (
    <section id='projects' className='py-24 relative overflow-hidden'>
      {/*bg glow*/}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'/>
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'/>
      <div className='container mx-auto px-6 relative z-10'>
        {/*section header*/}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects 
            <span className="font-serif italic font-normal text-foreground"> I've Built</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            Here are some of the projects I’ve worked on while learning and building as a developer. These projects showcase my ability to design, develop, and solve real problem solving.
          </p>
        </div>
        {/*projects*/}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project,idx)=>(
            <div key={idx} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1' style={{animationDelay: `${(idx+1)*100}ms`}}>
              <div className='relative overflow-hidden aspect-video'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to transparent opacity-60'/>
                {/*links*/}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-text-primary-foreground transition-all'><ArrowUpRight className='w-5 h-5'/></a>
                  <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-text-primary-foreground transition-all'><Github className='w-5 h-5'/></a>
                </div>
              </div>
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                  <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all'/>
                </div>
                <p className='text-muted-foreground text-sm'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag,tagidx)=>(
                  <span key={tagidx} className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  )
}

export default projects