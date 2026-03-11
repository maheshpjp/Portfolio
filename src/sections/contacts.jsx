import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
function Contacts() {
  const ContactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maheshkumarprajapati518@gmail.com",
      href: "mailto:maheshkumarprajapati518@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8708891964",
      href: "tel:+918708891964",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Panipat, India",
      href: "https://www.google.com/maps/place/Panipat,+Haryana,+India",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Email service is not configured properly.");
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-25 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="terminal-pill inline-flex rounded-md px-4 py-2 text-[11px] animate-fade-in">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's collaborate{" "}
            <span className="font-serif italic font-normal text-foreground">
              and build something amazing.
            </span>{" "}
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Whether it’s a project, collaboration, or just a conversation about
            technology, feel free to reach out. I'm always happy to connect.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="section-frame data-card p-8 rounded-3xl animate-fade-in animation-delay-300">
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div className="data-header">
                <span className="flex items-center gap-3">
                  <span className="data-dot" />
                  <span>Contact</span>
                </span>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="terminal-input w-full px-4 py-3 rounded-md outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="terminal-input w-full px-4 py-3 rounded-md outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="terminal-input w-full px-4 py-3 rounded-md outline-none transition-all resize-none"
                  rows="5"
                />
              </div>
              <Button
                className="w-full"
                size="lg"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
          {/*contact info*/}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="data-card rounded-3xl p-8">
              <div className="data-header">
                <span className="flex items-center gap-3">
                  <span className="data-dot" />
                  <span>Information</span>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-secondary-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {ContactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-md hover:bg-surface transition-colors group border border-primary/10"
                  >
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="data-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium uppercase tracking-[0.18em] text-secondary-foreground text-[11px]">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
