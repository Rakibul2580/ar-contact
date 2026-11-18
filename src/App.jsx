import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Sparkles,
  Phone,
} from "lucide-react";
import {
  FaWhatsapp,
  FaGlobe,
  FaShieldAlt,
  FaPhoneAlt,
  FaArrowUp,
  FaStar,
} from "react-icons/fa";
const WHATSAPP_NUMBER = "60177659044";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const WEBSITE_URL = "https://arawning.my/";

function WhatsAppMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 3.2A12.1 12.1 0 0 0 5.6 21.5L4 28l6.7-1.7A12.1 12.1 0 1 0 16 3.2Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M12.1 10.5c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.5-1.5 1.5-1.5 3.7s1.5 4.3 1.7 4.6c.2.3 2.9 4.6 7.1 6.2 3.5 1.4 4.2 1.1 5 .9.8-.1 2.5-1 2.8-2 .4-1 .4-1.8.3-2-.1-.2-.4-.3-.8-.5l-2.8-1.3c-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.4 1.6-.3.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7l-1.1-2.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactCard({
  icon,
  eyebrow,
  title,
  description,
  action,
  href,
  primary = false,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact-card group ${primary ? "contact-card-primary" : ""}`}
    >
      <span className={`contact-icon ${primary ? "contact-icon-green" : ""}`}>
        {icon}
      </span>

      <span className="flex-1 min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </span>

        <span className="block mt-1 text-base font-bold tracking-tight text-white break-words sm:text-lg">
          {title}
        </span>

        <span className="block mt-1 text-sm leading-relaxed text-slate-300">
          {description}
        </span>

        <span
          className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
            primary
              ? "bg-emerald-400/15 text-emerald-300"
              : "bg-cyan-300/10 text-cyan-200"
          }`}
        >
          {action}
          <ArrowUpRight size={13} />
        </span>
      </span>

      <span className="card-arrow shrink-0">
        <ArrowUpRight size={18} />
      </span>
    </a>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen min-h-[100svh] px-3 py-5 overflow-hidden text-white page-shell sm:px-6 sm:py-10 lg:px-8">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-2.5rem)] w-full max-w-[560px] items-center justify-center">
        <section className="main-panel w-full min-w-0 rounded-[24px] p-4 sm:rounded-[30px] sm:p-7 md:rounded-[36px] md:p-8">
          {/* Header */}

          {/* Logo and Intro */}
          <div className="text-center">
            <div className="logo-wrap mx-auto flex h-[90px] w-full max-w-[390px] items-center justify-center rounded-2xl px-4 py-4 sm:h-[115px] md:h-[128px]">
              <img
                src="/ar-fair-trading-logo.webp"
                alt="AR FAIR TRADING logo"
                className="object-contain w-full h-full"
              />
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300 sm:mt-7 sm:text-xs sm:tracking-[0.3em]">
              Welcome to AR AWNING
            </p>

            <h1 className="mt-3 text-[25px] font-extrabold leading-tight tracking-tight sm:text-[32px]">
              Let’s Connect
              <span className="block text-gradient">With Our Team</span>
            </h1>

            <p className="mx-auto mt-3 max-w-[390px] text-[13px] leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
              Looking for the right awning or roofing solution? Contact us
              directly. We’re ready to help bring your outdoor space to life.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 my-6 sm:my-7 sm:gap-3">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/20" />

            <span className="flex shrink-0 items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.13em] text-slate-400 sm:gap-2 sm:text-[10px] sm:tracking-[0.2em]">
              <Sparkles size={13} className="shrink-0 text-amber-300" />
              Choose how to connect
            </span>

            <span className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/20" />
          </div>

          {/* Contact Cards */}
          <div className="space-y-3 sm:space-y-4">
            <ContactCard
              primary
              icon={<FaWhatsapp size={25} />}
              title="+60 17-765 9044"
              description="Get in touch with our team through WhatsApp."
              action="Start WhatsApp chat"
              href={WHATSAPP_URL}
            />

            <ContactCard
              icon={<Globe2 size={25} />}
              title="arawning.my"
              description="Explore our awning, roofing and outdoor solutions."
              action="Visit our website"
              href={WEBSITE_URL}
            />
          </div>

          {/* Features */}
          <div className="mt-6 grid grid-cols-3 gap-1 rounded-2xl border border-white/[0.07] bg-black/15 p-2 sm:mt-7 sm:gap-2 sm:p-3">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <ShieldCheck size={18} className="text-amber-300" />
              <span className="text-[9px] font-semibold text-slate-300 sm:text-[10px]">
                Quality Focused
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 border-x border-white/10 py-2 text-center">
              <Sparkles size={18} className="text-amber-300" />
              <span className="text-[9px] font-semibold text-slate-300 sm:text-[10px]">
                Custom Solutions
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <Phone size={18} className="text-amber-300" />
              <span className="text-[9px] font-semibold text-slate-300 sm:text-[10px]">
                Direct Support
              </span>
            </div>
          </div>

          {/* Footer */}
          <footer className="pt-5 mt-6 text-center border-t border-white/10 sm:mt-7">
            <p className="text-[11px] font-semibold tracking-wide text-slate-300 sm:text-xs">
              AR AWNING <span className="mx-1 text-amber-300">•</span>
              AR FAIR TRADING
            </p>

            <p className="mt-2 text-[10px] text-slate-500 sm:text-[11px]">
              Quality · Comfort · Protection
            </p>

            <p className="mt-4 text-[9px] text-slate-600 sm:text-[10px]">
              © {new Date().getFullYear()} AR AWNING. All rights reserved.
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}
