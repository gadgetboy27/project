import React from "react";
import { Battery, Menu } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
  { id: "booking", label: "Book Now", isButton: true },
];

export function Header() {
  const activeSection = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Battery className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold">Electrified Garage</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label, isButton }) =>
              isButton ? (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    activeSection === "contact"
                      ? "bg-blue-600 text-white"
                      : "bg-green-600 text-white"
                  } hover:bg-blue-700`}
                >
                  {label}
                </a>
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeSection === id
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {label}
                </a>
              )
            )}
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
