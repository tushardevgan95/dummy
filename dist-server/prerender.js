import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import { ShoppingCart, Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, ShieldCheck, Zap, DollarSign, Truck, HeadphonesIcon, ArrowRight, Star, Cpu, Target, Leaf, CheckCircle2, Shield, Wrench, Clock, ThumbsUp, Calendar, User } from "lucide-react";
function Navbar() {
  return /* @__PURE__ */ jsxDEV("nav", { className: "bg-white shadow-sm sticky top-0 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between h-16 w-full", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex-shrink-0 flex items-center pr-4", children: /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-bold text-blue-600 tracking-tight", children: "buytech" }, void 0, false, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 12,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2 md:space-x-8 overflow-x-auto flex-grow justify-end whitespace-nowrap pl-2", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors", children: "Home" }, void 0, false, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/about-us", className: "text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors", children: "About Us" }, void 0, false, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/products", className: "text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors", children: "Products" }, void 0, false, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors", children: "Services" }, void 0, false, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors", children: "Blog" }, void 0, false, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/contact-us", className: "text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors", children: "Contact" }, void 0, false, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "text-gray-700 hover:text-blue-600", children: /* @__PURE__ */ jsxDEV(ShoppingCart, { className: "h-5 w-5" }, void 0, false, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/Navbar.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/Navbar.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function Footer() {
  return /* @__PURE__ */ jsxDEV("footer", { className: "bg-gray-900 text-gray-300", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-bold text-white tracking-tight mb-4 inline-block", children: "buytech" }, void 0, false, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 10,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400 mb-6", children: "Smart Appliances for Modern Living. Bringing innovation, performance, and reliability into every home." }, void 0, false, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Facebook" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 16,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Facebook, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 17,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 15,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Instagram" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 20,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Instagram, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 21,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 19,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "LinkedIn" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 24,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Linkedin, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 25,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "YouTube" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 28,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Youtube, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 29,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-white uppercase tracking-wider mb-4", children: "Quick Links" }, void 0, false, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/about-us", className: "hover:text-white transition-colors", children: "About Us" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 36,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/products", className: "hover:text-white transition-colors", children: "Products" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 37,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "hover:text-white transition-colors", children: "Services" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 38,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "hover:text-white transition-colors", children: "Blog" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 39,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact-us", className: "hover:text-white transition-colors", children: "Contact" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-white uppercase tracking-wider mb-4", children: "Support" }, void 0, false, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-white transition-colors", children: "FAQ" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 46,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-white transition-colors", children: "Shipping & Returns" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 47,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-white transition-colors", children: "Warranty Policy" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 48,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-white transition-colors", children: "Privacy Policy" }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 49,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-white uppercase tracking-wider mb-4", children: "Contact" }, void 0, false, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 56,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: [
              "Yamunanagar, Haryana",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "/app/applet/src/components/Footer.tsx",
                lineNumber: 57,
                columnNumber: 43
              }, this),
              "India"
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 57,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "h-5 w-5 text-gray-400 mr-2 flex-shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 60,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "+91 98765 43210" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 61,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Mail, { className: "h-5 w-5 text-gray-400 mr-2 flex-shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "support@buytech.com" }, void 0, false, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 65,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400", children: /* @__PURE__ */ jsxDEV("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " buytech. All rights reserved."
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/Footer.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function SEO({ title, description }) {
  const location = useLocation();
  const canonicalUrl = `https://buy-tech.netlify.app${location.pathname === "/" ? "" : location.pathname}`;
  return /* @__PURE__ */ jsxDEV(Helmet, { children: [
    /* @__PURE__ */ jsxDEV("title", { children: `${title} | Buytech` }, void 0, false, {
      fileName: "/app/applet/src/components/SEO.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { name: "description", content: description }, void 0, false, {
      fileName: "/app/applet/src/components/SEO.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonicalUrl }, void 0, false, {
      fileName: "/app/applet/src/components/SEO.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/SEO.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Home() {
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Buytech: Premium Smart Home Appliances & Electronics",
        description: "Discover top-rated smart home appliances at Buytech. From energy-efficient refrigerators to smart TVs, we offer the best in modern living technology."
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "relative bg-blue-900 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
          alt: "Modern Kitchen",
          className: "w-full h-full object-cover opacity-20",
          referrerPolicy: "no-referrer"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4", children: "Upgrade Your Lifestyle with Smart Home Appliances" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl font-light mb-4 max-w-2xl text-blue-100", children: "Smart Appliances for Modern Living." }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg mb-10 max-w-2xl text-blue-200", children: "At buytech, we bring innovation, performance, and reliability into every home. From energy-efficient kitchen appliances to advanced home entertainment systems, our products are designed to make life easier and smarter." }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/products", className: "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors", children: "Shop Now" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/about-us", className: "inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors", children: "Learn More" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-gray-900", children: "Why Choose Buytech for Your Appliances" }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm", children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "h-10 w-10 text-blue-600 mb-4" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-gray-900", children: "Premium Quality" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm", children: [
          /* @__PURE__ */ jsxDEV(Zap, { className: "h-10 w-10 text-yellow-500 mb-4" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-gray-900", children: "Energy Efficient" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm", children: [
          /* @__PURE__ */ jsxDEV(DollarSign, { className: "h-10 w-10 text-green-500 mb-4" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-gray-900", children: "Affordable Pricing" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm", children: [
          /* @__PURE__ */ jsxDEV(Truck, { className: "h-10 w-10 text-indigo-500 mb-4" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-gray-900", children: "Fast Delivery" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm sm:col-span-2 lg:col-span-1", children: [
          /* @__PURE__ */ jsxDEV(HeadphonesIcon, { className: "h-10 w-10 text-red-500 mb-4" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-gray-900", children: "24/7 Support" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-end mb-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-gray-900", children: "Featured Smart Appliances" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/products", className: "text-blue-600 hover:text-blue-800 font-medium flex items-center", children: [
          "View All ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-1 h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 80,
            columnNumber: 24
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-48 bg-gray-100 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop", alt: "Air Purifier", className: "max-h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply", referrerPolicy: "no-referrer" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 87,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex flex-col flex-grow", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Smart Air Purifier X5" }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 90,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 mb-4 line-clamp-2 flex-grow", children: "Breathe cleaner air with intelligent filtration and real-time air quality monitoring." }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mt-auto", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold text-blue-600", children: "$299" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors", children: "Add to Cart" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 94,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-48 bg-gray-100 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1926&auto=format&fit=crop", alt: "Refrigerator", className: "max-h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply", referrerPolicy: "no-referrer" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 101,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex flex-col flex-grow", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "UltraCool Refrigerator 450L" }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 104,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 mb-4 line-clamp-2 flex-grow", children: "Energy-saving refrigerator with smart temperature control and spacious storage." }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 105,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mt-auto", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold text-blue-600", children: "$899" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 107,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors", children: "Add to Cart" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 108,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 106,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-48 bg-gray-100 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop", alt: "Smart TV", className: "max-h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply", referrerPolicy: "no-referrer" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 115,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex flex-col flex-grow", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: 'Quantum Smart TV 55"' }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 118,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 mb-4 line-clamp-2 flex-grow", children: "Experience stunning 4K visuals and immersive sound powered by the latest smart technology." }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 119,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mt-auto", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold text-blue-600", children: "$699" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 121,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors", children: "Add to Cart" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 122,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 120,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-48 bg-gray-100 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2070&auto=format&fit=crop", alt: "Washing Machine", className: "max-h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply", referrerPolicy: "no-referrer" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 129,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex flex-col flex-grow", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "TurboWash Washing Machine" }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 mb-4 line-clamp-2 flex-grow", children: "High-performance washing machine with AI-powered fabric care." }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mt-auto", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold text-blue-600", children: "$549" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 135,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors", children: "Add to Cart" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 136,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-600 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-extrabold text-white mb-4", children: "Special Offer" }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-blue-100 max-w-2xl mx-auto mb-8", children: [
        "Get up to ",
        /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-yellow-300", children: "30% OFF" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 149,
          columnNumber: 23
        }, this),
        " on selected appliances this month. Shop now and upgrade your home with the latest technology."
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/products", className: "inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-300 shadow-lg transition-colors", children: "Shop the Sale" }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-center text-gray-900 mb-12", children: "Customer Reviews" }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex text-yellow-400 mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-5 w-5 fill-current" }, i, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 164,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-700 mb-6 italic flex-grow", children: '"Excellent product quality and fast delivery. Highly recommend buytech for home appliances!"' }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-gray-900", children: "— Sarah M." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex text-yellow-400 mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-5 w-5 fill-current" }, i, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 171,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-700 mb-6 italic flex-grow", children: '"The Smart TV exceeded my expectations. The picture quality is stunning and the interface is so smooth."' }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-gray-900", children: "— David R." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex text-yellow-400 mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-5 w-5 fill-current" }, i, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 178,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-700 mb-6 italic flex-grow", children: '"Outstanding customer support and warranty service. They really stand behind their products."' }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-gray-900", children: "— Emily K." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Home.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function About() {
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white pb-16", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "About Buytech | Smart Home Appliance Experts",
        description: "Learn about Buytech's mission to deliver innovative, energy-efficient smart home appliances that enhance your daily life and protect the environment."
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 7,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 py-16 md:py-24 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl", children: "About Buytech: Leading the Smart Home Appliance Revolution" }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4 max-w-2xl mx-auto text-xl text-gray-500", children: "Innovating your everyday home experience since 2015." }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Our Story" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-gray-700 mb-6 leading-relaxed", children: "Buytech was founded in 2015 with a mission to provide innovative electronic appliances that improve everyday life. Our commitment to quality, technology, and customer satisfaction has made us a trusted brand among households nationwide." }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-gray-900 mb-6 mt-10", children: "Our Vision" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-gray-700 leading-relaxed", children: "To become a leading provider of smart and sustainable home appliances worldwide." }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative h-96 rounded-2xl overflow-hidden shadow-xl", children: /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1549488344-c1fac1bf54ef?q=80&w=2070&auto=format&fit=crop", alt: "Buytech Headquarters", className: "w-full h-full object-cover", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 34,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-900 text-white py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold", children: "Our Mission" }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 bg-blue-800 rounded-xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-700 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl font-bold text-blue-200", children: "1" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-medium", children: "Deliver innovative products at competitive prices." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 bg-blue-800 rounded-xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-700 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl font-bold text-blue-200", children: "2" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-medium", children: "Promote energy-efficient technology." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 bg-blue-800 rounded-xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-700 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl font-bold text-blue-200", children: "3" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-medium", children: "Provide exceptional customer service." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 bg-blue-800 rounded-xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-700 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl font-bold text-blue-200", children: "4" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-medium", children: "Build long-lasting customer relationships." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-gray-900", children: "What We Offer" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-lg text-gray-600", children: "Our extensive product range includes:" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-4", children: ["Refrigerators", "Washing Machines", "Smart TVs", "Air Purifiers", "Microwave Ovens", "Water Purifiers", "Air Conditioners", "Kitchen Appliances"].map((item) => /* @__PURE__ */ jsxDEV("span", { className: "px-6 py-3 bg-gray-50 text-gray-800 rounded-full font-medium shadow-sm border border-gray-200", children: item }, item, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 74,
        columnNumber: 14
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 py-16 border border-gray-200 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-gray-900", children: "Our Core Values" }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center", children: [
          /* @__PURE__ */ jsxDEV(Cpu, { className: "h-12 w-12 mx-auto text-blue-600 mb-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: "Innovation" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "We continuously invest in research and development to bring you the best." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center", children: [
          /* @__PURE__ */ jsxDEV(Target, { className: "h-12 w-12 mx-auto text-indigo-600 mb-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: "Quality" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Every product undergoes rigorous quality testing to ensure reliability." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 95,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center", children: [
          /* @__PURE__ */ jsxDEV(Leaf, { className: "h-12 w-12 mx-auto text-green-500 mb-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: "Sustainability" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "We promote environmentally friendly technologies and manufacturing processes." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center", children: [
          /* @__PURE__ */ jsxDEV(HeadphonesIcon, { className: "h-12 w-12 mx-auto text-red-500 mb-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: "Customer Focus" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Customer satisfaction remains at the center of everything we do." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/About.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
const products = [
  {
    id: 1,
    name: 'Quantum Smart TV 55"',
    price: 699,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop",
    features: [
      "4K Ultra HD Display",
      "Voice Assistant Integration",
      "HDR10 Support",
      "Smart Streaming Apps",
      "Dolby Audio"
    ]
  },
  {
    id: 2,
    name: "UltraCool Refrigerator 450L",
    price: 899,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1926&auto=format&fit=crop",
    features: [
      "Inverter Technology",
      "Multi-Air Flow Cooling",
      "Smart Temperature Control",
      "Energy Efficient Design",
      "Spacious Storage Compartments"
    ]
  },
  {
    id: 3,
    name: "TurboWash Washing Machine",
    price: 549,
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2070&auto=format&fit=crop",
    features: [
      "AI Fabric Detection",
      "Quick Wash Mode",
      "Low Water Consumption",
      "Child Safety Lock",
      "Smart App Connectivity"
    ]
  },
  {
    id: 4,
    name: "PureAir X5 Air Purifier",
    price: 299,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop",
    features: [
      "HEPA Filtration",
      "Air Quality Sensor",
      "Silent Operation",
      "Smart Monitoring App",
      "Covers Large Rooms"
    ]
  },
  {
    id: 5,
    name: "HeatMaster Microwave Oven",
    price: 199,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=2076&auto=format&fit=crop",
    features: [
      "25L Capacity",
      "Digital Control Panel",
      "Auto Cooking Programs",
      "Defrost Function",
      "Energy Saving Mode"
    ]
  },
  {
    id: 6,
    name: "BrewMaster Smart Coffee Machine",
    price: 149,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2070&auto=format&fit=crop",
    features: [
      "App-Controlled Brewing",
      "Built-in Precision Grinder",
      "Customizable Timers",
      "Keep Warm Function",
      "Self-Cleaning Mode"
    ]
  },
  {
    id: 7,
    name: "CoolBreeze Smart Air Conditioner",
    price: 599,
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Wi-Fi Connectivity",
      "Energy Saving Inverter",
      "Voice Control Compatible",
      "Rapid Cooling Mode",
      "Air Purifying Filter"
    ]
  },
  {
    id: 8,
    name: "CleanSweep Robot Vacuum",
    price: 349,
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2070&auto=format&fit=crop",
    features: [
      "LiDAR Navigation Map",
      "Auto-Empty Station",
      "Multi-Floor Mapping",
      "App & Voice Control",
      "Pet Hair Extraction"
    ]
  }
];
function Products() {
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 min-h-screen pb-16", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Shop Smart Home Appliances | Buytech Products",
        description: "Browse Buytech's comprehensive catalog of smart home appliances, including advanced refrigerators, 4K smart TVs, robotic vacuums, and air purifiers."
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 114,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-white py-12 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-extrabold text-gray-900 tracking-tight", children: "Explore Our Premium Smart Home Appliances" }, void 0, false, {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-xl text-gray-500 max-w-2xl mx-auto", children: "Explore our premium range of smart home appliances designed to elevate your living space." }, void 0, false, {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Products.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Products.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: products.map((product) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row transition-shadow hover:shadow-md", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "md:w-2/5 p-6 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("img", { src: product.image, alt: product.name, className: "w-full h-48 object-contain mix-blend-multiply", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 130,
        columnNumber: 18
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 129,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 md:w-3/5 flex flex-col", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-gray-900 tracking-tight", children: product.name }, void 0, false, {
            fileName: "/app/applet/src/pages/Products.tsx",
            lineNumber: 134,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-black text-blue-600", children: [
            "$",
            product.price
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Products.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Products.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-6 flex-grow", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3", children: "Key Features" }, void 0, false, {
            fileName: "/app/applet/src/pages/Products.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: product.features.map((feature, idx) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/pages/Products.tsx",
              lineNumber: 142,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-gray-700 text-sm leading-tight pt-0.5", children: feature }, void 0, false, {
              fileName: "/app/applet/src/pages/Products.tsx",
              lineNumber: 143,
              columnNumber: 25
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/pages/Products.tsx",
            lineNumber: 141,
            columnNumber: 23
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/pages/Products.tsx",
            lineNumber: 139,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Products.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm", children: "Add to Cart" }, void 0, false, {
          fileName: "/app/applet/src/pages/Products.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this)
    ] }, product.id, true, {
      fileName: "/app/applet/src/pages/Products.tsx",
      lineNumber: 128,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/pages/Products.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Products.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-sm", children: /* @__PURE__ */ jsxDEV("div", { className: "mb-6 md:mb-0 md:mr-8 flex-grow", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center md:justify-start mb-4", children: [
        /* @__PURE__ */ jsxDEV(Shield, { className: "h-8 w-8 text-blue-600 mr-3" }, void 0, false, {
          fileName: "/app/applet/src/pages/Products.tsx",
          lineNumber: 161,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-blue-900", children: "Product Warranty & Guarantees" }, void 0, false, {
          fileName: "/app/applet/src/pages/Products.tsx",
          lineNumber: 162,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 160,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-blue-800 mb-4 text-lg", children: "All buytech products come with our signature commitment to quality:" }, void 0, false, {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 164,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("ul", { className: "flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8 text-blue-700 font-medium", children: [
        /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-5 w-5 mr-2" }, void 0, false, {
            fileName: "/app/applet/src/pages/Products.tsx",
            lineNumber: 166,
            columnNumber: 51
          }, this),
          " 2-Year Manufacturer Warranty"
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Products.tsx",
          lineNumber: 166,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-5 w-5 mr-2" }, void 0, false, {
            fileName: "/app/applet/src/pages/Products.tsx",
            lineNumber: 167,
            columnNumber: 51
          }, this),
          " Free Technical Support"
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Products.tsx",
          lineNumber: 167,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-5 w-5 mr-2" }, void 0, false, {
            fileName: "/app/applet/src/pages/Products.tsx",
            lineNumber: 168,
            columnNumber: 51
          }, this),
          " Easy Replacement Policy"
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Products.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Products.tsx",
        lineNumber: 165,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Products.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Products.tsx",
      lineNumber: 158,
      columnNumber: 10
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Products.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Products.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}
function Services() {
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white pb-16 min-h-screen", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Appliance Repair & Installation Services | Buytech",
        description: "Trust Buytech for expert smart appliance repair, free installation, and comprehensive maintenance agreements to keep your home running smoothly."
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/Services.tsx",
        lineNumber: 7,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 py-16 md:py-24 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl", children: "Professional Appliance Repair & Installation Services" }, void 0, false, {
        fileName: "/app/applet/src/pages/Services.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4 max-w-2xl mx-auto text-xl text-gray-500", children: "Expert installation, repair, and maintenance for your smart home appliances." }, void 0, false, {
        fileName: "/app/applet/src/pages/Services.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Services.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Services.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center", children: [
        /* @__PURE__ */ jsxDEV(Wrench, { className: "h-12 w-12 mx-auto text-blue-600 mb-6" }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 mb-3", children: "Professional Repair" }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Quick and reliable repairs for all major appliance brands with certified technicians." }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Services.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center", children: [
        /* @__PURE__ */ jsxDEV(Shield, { className: "h-12 w-12 mx-auto text-indigo-600 mb-6" }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 mb-3", children: "Extended Warranty" }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Protect your investment with our comprehensive extended warranty plans." }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Services.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center", children: [
        /* @__PURE__ */ jsxDEV(Clock, { className: "h-12 w-12 mx-auto text-green-500 mb-6" }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 mb-3", children: "Maintenance Agreements" }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Regular tune-ups and inspections to keep your appliances running efficiently." }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Services.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center", children: [
        /* @__PURE__ */ jsxDEV(ThumbsUp, { className: "h-12 w-12 mx-auto text-red-500 mb-6" }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 mb-3", children: "Free Installation" }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Complimentary professional installation on all premium appliance purchases." }, void 0, false, {
          fileName: "/app/applet/src/pages/Services.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Services.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Services.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Services.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Services.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
const articles = [
  {
    id: 1,
    title: "How Smart Appliances Are Transforming Modern Homes",
    excerpt: "Smart appliances provide convenience, energy efficiency, and enhanced user experiences. Learn how connected devices can simplify your daily routine and reduce electricity costs.",
    date: "Oct 12, 2026",
    author: "Tech Team",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Top 5 Energy-Saving Appliances for 2026",
    excerpt: "Discover appliances that help lower energy bills while maintaining exceptional performance and reliability in your everyday life.",
    date: "Sep 28, 2026",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1521656693074-0af32947e80f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Refrigerator Buying Guide",
    excerpt: "Choosing the right refrigerator depends on storage needs, energy ratings, and available kitchen space. This guide covers everything you need to know before purchasing.",
    date: "Sep 15, 2026",
    author: "Home Expert",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1926&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Benefits of Air Purifiers for Indoor Health",
    excerpt: "Air purifiers help remove dust, allergens, and harmful pollutants, creating a healthier indoor environment for your family.",
    date: "Aug 30, 2026",
    author: "Health Tips",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Smart TV Features Explained",
    excerpt: "Understand the latest smart TV technologies, including 4K resolution, HDR, voice control, and integrated streaming services.",
    date: "Aug 10, 2026",
    author: "Media Review",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop"
  }
];
function Blog() {
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 min-h-screen pb-16", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Smart Home Appliance Blog & Buying Guides | Buytech",
        description: "Stay updated with the Buytech blog. Read expert buying guides, smart home trends, and maintenance tips for your modern appliances."
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/Blog.tsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-white py-16 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-extrabold text-gray-900 tracking-tight", children: "Latest Insights, Trends, & Guides for Smart Appliances" }, void 0, false, {
        fileName: "/app/applet/src/pages/Blog.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-xl text-gray-500 max-w-2xl mx-auto", children: "Stay updated with the latest trends, tips, and guides on smart home appliances." }, void 0, false, {
        fileName: "/app/applet/src/pages/Blog.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Blog.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Blog.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: articles.map((article) => /* @__PURE__ */ jsxDEV("article", { className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsxDEV("img", { src: article.image, alt: article.title, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "/app/applet/src/pages/Blog.tsx",
        lineNumber: 67,
        columnNumber: 18
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Blog.tsx",
        lineNumber: 66,
        columnNumber: 16
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex flex-col flex-grow", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-sm text-gray-500 mb-3 space-x-4", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Calendar, { className: "h-4 w-4 mr-1" }, void 0, false, {
              fileName: "/app/applet/src/pages/Blog.tsx",
              lineNumber: 71,
              columnNumber: 56
            }, this),
            " ",
            article.date
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Blog.tsx",
            lineNumber: 71,
            columnNumber: 20
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV(User, { className: "h-4 w-4 mr-1" }, void 0, false, {
              fileName: "/app/applet/src/pages/Blog.tsx",
              lineNumber: 72,
              columnNumber: 56
            }, this),
            " ",
            article.author
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Blog.tsx",
            lineNumber: 72,
            columnNumber: 20
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Blog.tsx",
          lineNumber: 70,
          columnNumber: 18
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer", children: article.title }, void 0, false, {
          fileName: "/app/applet/src/pages/Blog.tsx",
          lineNumber: 74,
          columnNumber: 18
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-6 flex-grow line-clamp-3", children: article.excerpt }, void 0, false, {
          fileName: "/app/applet/src/pages/Blog.tsx",
          lineNumber: 77,
          columnNumber: 18
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#", className: "inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors", children: [
          "Read More ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-1.5 h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/pages/Blog.tsx",
            lineNumber: 81,
            columnNumber: 30
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Blog.tsx",
          lineNumber: 80,
          columnNumber: 18
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Blog.tsx",
        lineNumber: 69,
        columnNumber: 16
      }, this)
    ] }, article.id, true, {
      fileName: "/app/applet/src/pages/Blog.tsx",
      lineNumber: 65,
      columnNumber: 14
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/pages/Blog.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Blog.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Blog.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function Contact() {
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Contact Buytech | Support & Customer Service",
        description: "Get in touch with the Buytech team. We provide dedicated support for all your smart home appliance inquiries, repairs, and sales questions."
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 7,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-white py-16 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-extrabold text-gray-900 tracking-tight", children: "Contact Buytech for Smart Appliance Support" }, void 0, false, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-xl text-gray-500 max-w-2xl mx-auto", children: "We'd love to hear from you. Get in touch with our team for any inquiries." }, void 0, false, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-gray-900 mb-8", children: "Get in Touch" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 28,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 27,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "ml-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-gray-900", children: "Office Address" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 31,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-gray-600 leading-relaxed", children: [
                "Buytech Headquarters",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "/app/applet/src/pages/Contact.tsx",
                  lineNumber: 33,
                  columnNumber: 41
                }, this),
                "Yamunanagar, Haryana",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "/app/applet/src/pages/Contact.tsx",
                  lineNumber: 34,
                  columnNumber: 41
                }, this),
                "India"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 32,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 30,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center border border-green-200", children: /* @__PURE__ */ jsxDEV(Phone, { className: "h-6 w-6 text-green-600" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 42,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "ml-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-gray-900", children: "Contact Information" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 45,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-gray-600", children: "Phone: +91 98765 43210" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 46,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200", children: /* @__PURE__ */ jsxDEV(Mail, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 52,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "ml-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-gray-900", children: "Email Us" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 55,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-gray-600", children: "Email: support@buytech.com" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 56,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-gray-600", children: "Sales: sales@buytech.com" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 57,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-gray-600", children: "Support: help@buytech.com" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 58,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 54,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center border border-yellow-200", children: /* @__PURE__ */ jsxDEV(Clock, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 63,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "ml-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-gray-900", children: "Business Hours" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 67,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-gray-600", children: "Monday – Friday: 9:00 AM – 6:00 PM" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 68,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-gray-600", children: "Saturday: 10:00 AM – 4:00 PM" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 69,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-gray-600", children: "Sunday: Closed" }, void 0, false, {
                fileName: "/app/applet/src/pages/Contact.tsx",
                lineNumber: 70,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-10 pt-8 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Follow Us" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 76,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-6", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-blue-600 font-medium transition-colors", children: "Facebook" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-pink-600 font-medium transition-colors", children: "Instagram" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-blue-800 font-medium transition-colors", children: "LinkedIn" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-red-600 font-medium transition-colors", children: "YouTube" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 77,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8 pt-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Send us a Message" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("form", { className: "space-y-6", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Full Name" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { type: "text", id: "name", className: "mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none", placeholder: "John Doe" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email Address" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { type: "email", id: "email", className: "mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none", placeholder: "john@example.com" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Phone Number" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { type: "tel", id: "phone", className: "mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none", placeholder: "+91 00000 00000" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700", children: "Subject" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 103,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { type: "text", id: "subject", className: "mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none", placeholder: "How can we help you?" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 104,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700", children: "Message" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 107,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("textarea", { id: "message", rows: 4, className: "mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none resize-none", placeholder: "Write your message here..." }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors", children: "Submit Message" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Contact.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans", children: [
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-grow", children: /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 17,
        columnNumber: 36
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/about-us", element: /* @__PURE__ */ jsxDEV(About, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 18,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/products", element: /* @__PURE__ */ jsxDEV(Products, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 19,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/services", element: /* @__PURE__ */ jsxDEV(Services, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 20,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/blog", element: /* @__PURE__ */ jsxDEV(Blog, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 21,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/contact-us", element: /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 22,
        columnNumber: 46
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
async function prerender({ url }) {
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsxDEV(StaticRouter, { location: url, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "/app/applet/src/prerender.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/prerender.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/prerender.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/prerender.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  const { helmet } = helmetContext;
  let head = {};
  if (helmet) {
    const metaArray = helmet.meta.toComponent() || [];
    const elements = /* @__PURE__ */ new Set();
    metaArray.forEach((meta) => {
      elements.add({ type: "meta", props: meta.props });
    });
    const titleStr = helmet.title.toString();
    const titleMatch = titleStr.match(/<title[^>]*>(.*?)<\/title>/);
    if (titleMatch && titleMatch[1]) {
      head.title = titleMatch[1];
    }
    head.elements = elements;
  }
  return {
    html,
    head,
    links: /* @__PURE__ */ new Set([])
  };
}
export {
  prerender
};
