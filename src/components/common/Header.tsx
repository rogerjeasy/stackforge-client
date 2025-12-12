"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/generators", label: "Generators" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
              >
                <path d="M7 12L11 8L15 12L11 16L7 12Z" fill="white" opacity="0.9" />
                <path d="M11 8L15 12L17 10L13 6L11 8Z" fill="white" opacity="0.7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">
                ProjectGen
              </span>
              <span className="text-xs text-gray-500 leading-tight">
                Professional Scaffolding
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[15px] font-medium transition-colors duration-200 cursor-pointer pb-1 group",
                  isActiveLink(link.href)
                    ? "text-[#FF6B35]"
                    : "text-gray-700 hover:text-[#FF6B35]"
                )}
              >
                {link.label}
                {/* Active underline */}
                {isActiveLink(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF6B35] rounded-full" />
                )}
                {/* Hover underline for non-active links */}
                {!isActiveLink(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF6B35] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              onClick={() => window.open("https://github.com", "_blank")}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-700 text-[15px] font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 cursor-pointer h-11"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </Button>

            <Link href="/generators">
              <Button
                className="flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-xl text-white text-[15px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer border-0 h-11"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle lg:hidden p-2 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            style={{ top: "80px", zIndex: 9998 }}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div
            className="mobile-menu fixed left-0 right-0 bg-white lg:hidden overflow-y-auto shadow-lg"
            style={{ 
              top: "80px",
              maxHeight: "calc(100vh - 80px)",
              zIndex: 9999 
            }}
          >
            {/* Navigation Links */}
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer",
                    isActiveLink(link.href)
                      ? "bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 text-[#FF6B35]"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="px-4 py-4 border-t border-gray-200 space-y-3">
              <Button
                variant="outline"
                onClick={() => {
                  window.open("https://github.com", "_blank");
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 cursor-pointer"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </Button>

              <Link href="/generators" className="block">
                <Button
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-xl text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-0"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}