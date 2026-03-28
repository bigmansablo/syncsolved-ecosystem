import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-bg/80 backdrop-blur-xl border-white/10 py-4" : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-accent" />
            <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest hidden sm:inline-block">LOGO</span>
          </div>
          <span className="font-heading text-xl font-extrabold tracking-tighter uppercase">SYNCSOLVED</span>
        </Link>

        <div className="hidden md:flex items-center gap-12 font-mono text-[10px] tracking-[0.2em] uppercase text-white">
          <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
          <Link to="/research" className="hover:text-accent transition-colors">Research</Link>
          <Link to="/process" className="hover:text-accent transition-colors">Process</Link>
          <a 
            href="https://velocity.syncsolved.com" 
            className="text-accent hover:text-white transition-colors"
          >
            [ VELOCITY_PROTOCOL ]
          </a>
        </div>
      </div>
    </nav>
  );
}
