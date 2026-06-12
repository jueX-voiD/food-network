import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-fn-bg z-10 fixed top-0">
      <div className="max-w-[1200px] mx-auto px-5 py-[30px] flex justify-between items-center">
        <Link to="/">
          <img
            src="./site-logo.png"
            alt="Food Networks"
            className="h-[60px] md:h-[75px] w-auto mix-blend-darken"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-16">
          <div className="flex items-center gap-14">
            <Link to="/" className="text-20 text-fn-dark uppercase">
              Home
            </Link>
            <Link to="/about" className="text-20 text-fn-dark uppercase">
              About
            </Link>
          </div>
        </nav>
        <button
          className="md:hidden p-2 text-fn-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-fn-bg border-fn-dark/10 px-6 py-4 flex flex-col gap-4 absolute w-full">
          <Link
            to="/"
            className="text-18 text-fn-dark text-center uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-18 text-fn-dark text-center uppercase"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
