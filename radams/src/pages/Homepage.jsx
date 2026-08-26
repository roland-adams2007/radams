import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Clock,
  X,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import hero from "../assets/hero.png";

const GitHubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
  </svg>
);

const SocialLinks = ({ size = "38px" }) => (
  <div style={{ display: "flex", gap: 8 }}>
    <a
      href="https://github.com/roland-adams2007"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      style={{ width: size, height: size }}
    >
      <GitHubIcon />
    </a>
    <a
      href="https://x.com/R_coredev"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      style={{ width: size, height: size }}
    >
      <XIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/roland-adams-045965315"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      style={{ width: size, height: size }}
    >
      <LinkedInIcon />
    </a>
    <a
      href="mailto:adamsrolly7@gmail.com"
      className="social-icon"
      style={{ width: size, height: size }}
    >
      <Mail size={15} />
    </a>
  </div>
);

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function RevealOnScroll({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px", amount: 0 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

const allProjects = [
  {
    id: "01",
    title: "Tixkarios",
    tag: "SaaS · Full-Stack",
    tagColor: "var(--rust)",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    desc: "Digital ticketing platform — event organizers create, manage, and sell tickets online. Built end-to-end with React, Laravel, payment integration, and real-time attendee tracking.",
    github: "https://github.com/roland-adams2007",
    live: null,
  },
  {
    id: "02",
    title: "Job Board Platform",
    tag: "Full-Stack",
    tagColor: "#5A8A6A",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    desc: "Full-stack job board with employer credits, role management, and a complete job listing system built on Laravel.",
    github: "https://github.com/roland-adams2007",
    live: "https://adamsroland.dev",
  },
  {
    id: "03",
    title: "University Chat App",
    tag: "Real-time App",
    tagColor: "#7B8EC4",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    desc: "Zoom-like system for UNILORIN — course rep group chats, lecturer tools, video grid, and modal-based group info.",
    github: "https://github.com/roland-adams2007",
    live: null,
  },
  {
    id: "04",
    title: "URL Shortener",
    tag: "Laravel",
    tagColor: "var(--gold)",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    desc: "Clean link-shortening service built with Laravel, featuring working redirects and link management.",
    github: "https://github.com/roland-adams2007",
    live: "https://adamsroland.dev",
  },
  {
    id: "05",
    title: "E-Commerce Store",
    tag: "In Progress",
    tagColor: "#999999",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    desc: "Full-stack e-commerce platform with React frontend, Laravel backend, cart management, and payment integration.",
    github: null,
    live: null,
  },
  {
    id: "06",
    title: "Analytics Dashboard",
    tag: "React",
    tagColor: "#7B8EC4",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    desc: "Data visualization dashboard with real-time charts, filtering, and export features built in React with a REST API backend.",
    github: "https://github.com/roland-adams2007",
    live: "https://adamsroland.dev",
  },
  {
    id: "07",
    title: "Blog CMS",
    tag: "Full-Stack",
    tagColor: "#5A8A6A",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    desc: "Content management system with rich text editor, tagging, author roles, and a clean public-facing blog interface.",
    github: "https://github.com/roland-adams2007",
    live: null,
  },
  {
    id: "08",
    title: "This Portfolio",
    tag: "React · Laravel",
    tagColor: "var(--rust)",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    desc: "Designed and built from scratch — custom cursor, scroll animations, dark aesthetic, and fully responsive layout.",
    github: "https://github.com/roland-adams2007",
    live: "https://adamsroland.dev",
  },
];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "adamsrolly7@gmail.com";
  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} className="copy-email-btn">
      <span>{email}</span>
      <span
        style={{
          marginLeft: 8,
          color: copied ? "#5A8A5A" : "var(--muted)",
          transition: "color .3s",
        }}
      >
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </span>
    </button>
  );
}

function WaveTimelineCard({ item }) {
  return (
    <>
      <p
        style={{
          fontSize: 9,
          letterSpacing: ".06em",
          textTransform: "uppercase",
          color: item.color,
          marginBottom: 4,
          whiteSpace: "nowrap",
        }}
      >
        {item.period}
      </p>
      <h3
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: "var(--ink)",
          marginBottom: 1,
          lineHeight: 1.2,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: 10,
          color: "var(--muted)",
          marginBottom: 6,
        }}
      >
        {item.sub}
      </p>
      <p
        style={{
          fontSize: 10,
          lineHeight: 1.45,
          color: "var(--ink)",
          opacity: 0.7,
          marginBottom: item.tags && item.tags.length ? 8 : 0,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {item.desc}
      </p>
      {item.tags && item.tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {item.tags.slice(0, 3).map((tag, t) => (
            <span
              key={t}
              style={{
                fontSize: 9,
                padding: "2px 6px",
                borderRadius: 3,
                border: "1px solid var(--border)",
                background: "var(--bg2)",
                color: "var(--muted)",
                whiteSpace: "nowrap",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
function WaveTimeline({ items = [] }) {
  const isMobile = useIsMobile();

  // ---- Mobile: simple vertical stack (a wave doesn't read well in a narrow column) ----
  if (isMobile) {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 5,
            top: 6,
            bottom: 6,
            width: 1,
            background:
              "linear-gradient(to bottom, var(--border), var(--border) 85%, transparent)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {items.map((item, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: 28 }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 6,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: item.active ? item.color : "var(--bg2)",
                  border: `1px solid ${item.color}`,
                  boxShadow: item.active ? `0 0 0 3px ${item.color}22` : "none",
                }}
              />
              <WaveTimelineCard item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---- Desktop: an actual horizontal sine wave, fixed height, scrolls only sideways ----
  const n = items.length;
  const colWidth = 230; // horizontal space per item
  const width = Math.max(colWidth * n, 800);
  const amp = 36; // wave amplitude (how far up/down it swings)
  const cardWidth = colWidth - 30;
  const cardHeight = 168; // fixed card height so layout never shifts
  const cardGap = 22; // gap between dot and card

  const topHalfHeight = amp + cardGap + cardHeight; // space above the midline
  const bottomHalfHeight = amp + cardGap + cardHeight; // space below the midline
  const containerHeight = topHalfHeight + bottomHalfHeight;
  const midY = topHalfHeight; // midline sits right at the boundary

  // x position for item i (centered within its column)
  const xAt = (i) => colWidth * i + colWidth / 2;
  // y position on the sine curve for item i — alternates up/down
  const yAt = (i) => midY + (i % 2 === 0 ? -amp : amp);

  // Build a smooth cubic-bezier path through all the points
  const points = items.map((_, i) => ({ x: xAt(i), y: yAt(i) }));
  let path = points.length ? `M ${points[0].x} ${points[0].y}` : "";
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    path += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
  }

  return (
    <div
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        height: containerHeight + 8,
      }}
    >
      <div style={{ position: "relative", width, height: containerHeight }}>
        <svg
          width={width}
          height={containerHeight}
          viewBox={`0 0 ${width} ${containerHeight}`}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path d={path} fill="none" stroke="var(--border)" strokeWidth="1.5" />
        </svg>

        {items.map((item, i) => {
          const x = xAt(i);
          const y = yAt(i);
          const isPeak = i % 2 === 0; // peak = above the line, trough = below

          return (
            <div key={i}>
              {/* dot on the wave */}
              <div
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  width: 12,
                  height: 12,
                  marginLeft: -6,
                  marginTop: -6,
                  borderRadius: "50%",
                  background: item.active ? item.color : "var(--bg2)",
                  border: `1px solid ${item.color}`,
                  boxShadow: item.active ? `0 0 0 4px ${item.color}22` : "none",
                  zIndex: 2,
                }}
              />
              {/* connector stub from dot to card */}
              <div
                style={{
                  position: "absolute",
                  left: x,
                  top: isPeak ? y - cardGap : y + 6,
                  width: 1,
                  height: cardGap - 6,
                  background: "var(--border)",
                }}
              />
              {/* card, positioned above (peak) or below (trough) the dot */}
              <div
                style={{
                  position: "absolute",
                  left: x,
                  top: isPeak ? y - cardGap : y + cardGap,
                  transform: isPeak
                    ? "translate(-50%, -100%)"
                    : "translate(-50%, 0)",
                  width: cardWidth,
                  height: cardHeight,
                  border: "1px solid var(--border)",
                  borderRadius: 3,
                  background: "var(--card)",
                  padding: 14,
                  overflow: "hidden",
                  boxSizing: "border-box",
                }}
              >
                <WaveTimelineCard item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectShowcase({ project, index }) {
  const isMobile = useIsMobile();
  const reversed = !isMobile && index % 2 === 1;

  const imageBlock = (
    <div
      className="proj-row-img"
      style={{
        position: "relative",
        aspectRatio: "4 / 3",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--card)",
      }}
    >
      <img
        src={project.img}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(100%) brightness(0.55) contrast(1.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(155deg, transparent 55%, var(--card) 130%)",
        }}
      />
      <div style={{ position: "absolute", top: 16, left: 16 }}>
        <span
          className="tag"
          style={{ color: project.tagColor, borderColor: project.tagColor + "55" }}
        >
          {project.tag}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, var(--rust), var(--gold))",
        }}
      />
    </div>
  );

  const textBlock = (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 20,
            fontWeight: 300,
            color: "var(--border)",
          }}
        >
          {project.id}
        </span>
        <span style={{ height: 1, flex: 1, background: "var(--border)" }} />
      </div>
      <h3
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 300,
          letterSpacing: "-.02em",
          lineHeight: 1.08,
          marginBottom: 18,
          color: "var(--ink)",
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          lineHeight: 1.9,
          color: "var(--muted)",
          marginBottom: 32,
          maxWidth: 440,
        }}
      >
        {project.desc}
      </p>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="card-link-btn">
            <GitHubIcon />
            <span>Code</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 12,
              letterSpacing: ".06em",
              color: "var(--ink)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span>View project</span>
            <ArrowUpRight size={14} className="proj-row-arrow" />
          </a>
        )}
        {!project.github && !project.live && (
          <span
            style={{
              fontSize: 10,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--border)",
              fontFamily: "'Geist Mono', monospace",
            }}
          >
            Private repo
          </span>
        )}
      </div>
    </div>
  );

  return (
    <RevealOnScroll delay={0.05}>
      <div
        className="proj-row"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : reversed ? "1fr 1.05fr" : "1.05fr 1fr",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "center",
          padding: index === 0 ? "0 0 88px" : "88px 0",
          borderTop: index === 0 ? "none" : "1px solid var(--border)",
        }}
      >
        {reversed ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>
    </RevealOnScroll>
  );
}

function ProjectIndexRow({ project }) {
  const href = project.live || project.github;
  const content = (
    <>
      <div style={{ display: "flex", alignItems: "baseline", gap: 20, minWidth: 0 }}>
        <span
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 11,
            color: "var(--border)",
            flexShrink: 0,
          }}
        >
          {project.id}
        </span>
        <h4
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(18px, 2.4vw, 26px)",
            fontWeight: 300,
            color: "var(--ink)",
            letterSpacing: "-.01em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "color .25s",
          }}
        >
          {project.title}
        </h4>
        <span
          className="tag"
          style={{ color: project.tagColor, borderColor: project.tagColor + "55", flexShrink: 0 }}
        >
          {project.tag}
        </span>
      </div>
      {href ? (
        <ArrowUpRight size={16} color="var(--muted)" className="proj-row-arrow" style={{ flexShrink: 0 }} />
      ) : (
        <span
          style={{
            fontSize: 9,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "var(--border)",
            fontFamily: "'Geist Mono', monospace",
            flexShrink: 0,
          }}
        >
          Private
        </span>
      )}
    </>
  );
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "22px 4px",
    borderBottom: "1px solid var(--border)",
    textDecoration: "none",
    color: "inherit",
  };
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="proj-index-list-row" style={rowStyle}>
      {content}
    </a>
  ) : (
    <div className="proj-index-list-row" style={rowStyle}>
      {content}
    </div>
  );
}

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#work", label: "Work", num: "01" },
    { href: "#about", label: "About", num: "02" },
    { href: "#experience", label: "Experience", num: "03" },
    { href: "#skills", label: "Skills", num: "04" },
    { href: "#contact", label: "Contact", num: "05" },
  ];

  return (
    <>
      <div className="noise" />
      <style>{`
                .mobile-fab { display: none !important; }
                @media (max-width: 768px) {
                    .mobile-fab { display: flex !important; }
                    .hero-split { padding-left: 24px !important; padding-right: 24px !important; }
                    .hero-split > div { grid-template-columns: 1fr !important; }
                    .hero-image-col { display: none !important; }
                    .about-grid { grid-template-columns: 1fr !important; }
                }
                .proj-row-img img { transition: transform .7s cubic-bezier(.23,1,.32,1); }
                .proj-row:hover .proj-row-img img { transform: scale(1.045); }
                .proj-row-arrow { transition: transform .35s cubic-bezier(.23,1,.32,1); }
                .proj-row a:hover .proj-row-arrow,
                .proj-index-list-row:hover .proj-row-arrow { transform: translate(4px, -4px); }
                .proj-index-list-row { transition: padding-left .3s ease; }
                .proj-index-list-row:hover { padding-left: 14px; }
                .proj-index-list-row:hover h4 { color: var(--rust) !important; }
                .contact-dark-transition {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 340px;
                    pointer-events: none;
                    z-index: 1;
                    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,.4) 55%, rgba(0,0,0,.72) 100%);
                }
                .footer-cta {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    width: 100%;
                    text-decoration: none;
                    border-top: 1px solid var(--border);
                    border-bottom: 1px solid var(--border);
                    overflow: hidden;
                }
                .footer-cta-left,
                .footer-cta-right {
                    display: flex;
                    align-items: center;
                    padding: 30px 6vw;
                }
                .footer-cta-left {
                    flex: 1;
                    border-right: 1px solid var(--border);
                }
                .footer-cta-question {
                    font-family: 'Geist Mono', monospace;
                    font-weight: 700;
                    font-size: clamp(15px, 2.6vw, 26px);
                    letter-spacing: .01em;
                    text-transform: uppercase;
                    color: var(--muted);
                    transition: color .4s;
                }
                .footer-cta:hover .footer-cta-question { color: var(--ink); }
                .footer-cta-right {
                    flex: 0 0 auto;
                    min-width: 200px;
                    justify-content: center;
                    gap: 8px;
                    background: var(--ink);
                    color: var(--bg);
                    transition: background .45s ease, gap .35s ease;
                }
                .footer-cta:hover .footer-cta-right {
                    background: var(--rust);
                    gap: 16px;
                }
                .footer-cta-answer {
                    font-family: 'Geist Mono', monospace;
                    font-weight: 700;
                    font-size: clamp(15px, 2.6vw, 26px);
                    letter-spacing: .01em;
                    text-transform: uppercase;
                    white-space: nowrap;
                }
                .footer-cta-right svg {
                    flex-shrink: 0;
                    transition: transform .35s ease;
                }
                .footer-cta:hover .footer-cta-right svg { transform: translate(3px, -3px); }
                @media (max-width: 640px) {
                    .footer-cta { flex-direction: column; }
                    .footer-cta-left { border-right: none; border-bottom: 1px solid var(--border); padding: 22px 24px; }
                    .footer-cta-right { padding: 22px 24px; min-width: 0; justify-content: flex-start; }
                }
                .site-footer {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    background: var(--bg);
                }
                .footer-vignette {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 1;
                    background: radial-gradient(120% 70% at 50% 10%, rgba(0,0,0,0) 0%, rgba(0,0,0,.55) 100%);
                }
                .footer-inner {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    padding: 160px 6vw 88px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .footer-name-link {
                    display: block;
                    width: 100%;
                    text-align: center;
                    text-decoration: none;
                }
                .footer-name {
                    font-family: 'Instrument Serif', serif;
                    font-weight: 300;
                    font-size: clamp(48px, 15vw, 288px);
                    line-height: 0.82;
                    letter-spacing: -.04em;
                    margin: 0;
                    white-space: nowrap;
                    color: transparent;
                    background-image: linear-gradient(180deg, rgba(240,237,232,.14) 0%, rgba(240,237,232,.05) 45%, rgba(240,237,232,.015) 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.9) 40%, rgba(0,0,0,.35) 72%, rgba(0,0,0,0) 100%);
                    mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.9) 40%, rgba(0,0,0,.35) 72%, rgba(0,0,0,0) 100%);
                    transition: opacity .4s ease;
                }
                .footer-name-link:hover .footer-name {
                    opacity: .82;
                }
                @media (max-width: 768px) {
                    .footer-inner { padding: 120px 24px 64px; }
                }
                @media (max-width: 640px) {
                    .footer-inner { padding: 96px 20px 56px; }
                    .footer-name { letter-spacing: -.03em !important; font-size: clamp(40px, 17vw, 96px); }
                }
            `}</style>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "fixed",
              bottom: 88,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 198,
              background: "rgba(20,20,20,.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "8px 6px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              minWidth: 200,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  color: "var(--muted)",
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 13,
                  letterSpacing: ".06em",
                  transition: "background .2s, color .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#88888814";
                  e.currentTarget.style.color = "var(--ink)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    color: "var(--rust)",
                    letterSpacing: ".12em",
                    fontFamily: "'Geist Mono', monospace",
                    minWidth: 20,
                  }}
                >
                  {link.num}
                </span>
                {link.label}
              </motion.a>
            ))}
            <div
              style={{
                height: 1,
                background: "var(--border)",
                margin: "4px 16px",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
              }}
            >
              <a
                href="https://github.com/roland-adams2007"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--muted)",
                  display: "flex",
                  textDecoration: "none",
                  transition: "color .2s",
                  padding: 4,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--ink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                <GitHubIcon />
              </a>
              <a
                href="https://x.com/R_coredev"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--muted)",
                  display: "flex",
                  textDecoration: "none",
                  transition: "color .2s",
                  padding: 4,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--ink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                <XIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/roland-adams-045965315"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--muted)",
                  display: "flex",
                  textDecoration: "none",
                  transition: "color .2s",
                  padding: 4,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--ink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                <LinkedInIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        style={{
          position: "fixed",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 199,
          display: "none",
          alignItems: "center",
          gap: 10,
          background: menuOpen ? "var(--rust)" : "rgba(20,20,20,.92)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${menuOpen ? "var(--rust)" : "var(--border)"}`,
          borderRadius: 999,
          padding: "12px 22px",
          cursor: "pointer",
          transition: "background .3s, border-color .3s",
        }}
        className="mobile-fab"
      >
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 15,
            fontWeight: 300,
            color: "var(--ink)",
            letterSpacing: "-.01em",
          }}
        >
          AR
        </span>
        <div
          style={{
            width: 1,
            height: 14,
            background: menuOpen ? "#ffffff40" : "var(--border)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: menuOpen ? 0 : 4,
            transition: "gap .3s",
          }}
        >
          <span
            style={{
              display: "block",
              width: 16,
              height: 1,
              background: "var(--ink)",
              transformOrigin: "center",
              transform: menuOpen ? "translateY(0.5px) rotate(45deg)" : "none",
              transition: "transform .3s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: 16,
              height: 1,
              background: "var(--ink)",
              transform: menuOpen
                ? "translateY(-0.5px) rotate(-45deg)"
                : "none",
              opacity: menuOpen ? 1 : 1,
              transition: "transform .3s ease, opacity .3s",
            }}
          />
        </div>
      </motion.button>

      <section
        className="hero-split"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            width: "100%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            className="hero-text-col"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{ overflow: "hidden", lineHeight: 0.92, marginBottom: 2 }}
            >
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(60px, 9vw, 124px)",
                  fontWeight: 700,
                  letterSpacing: "-.03em",
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                Adams
              </motion.h1>
            </div>
            <div
              style={{ overflow: "hidden", lineHeight: 0.92, marginBottom: 36 }}
            >
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.18,
                  ease: [0.23, 1, 0.32, 1],
                }}
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(60px, 9vw, 124px)",
                  fontWeight: 700,
                  letterSpacing: "-.03em",
                  color: "#303030",
                  margin: 0,
                }}
              >
                Roland
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.42,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: "var(--muted)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 13,
                  color: "var(--muted)",
                  letterSpacing: ".04em",
                }}
              >
                Noir_
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 13,
                    background: "var(--ink)",
                    marginLeft: 1,
                    verticalAlign: "middle",
                    animation: "blink 1s step-end infinite",
                  }}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.52 }}
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: 28,
                maxWidth: 400,
              }}
            ></motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.62 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 36,
              }}
            >
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: ".06em",
                }}
              >
                using
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  title="React"
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 6,
                    background: "#61DAFB12",
                    border: "1px solid #61DAFB30",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <g fill="#61DAFB">
                      <circle cx="64" cy="64" r="11.4" />
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                    </g>
                  </svg>
                </div>

                <div
                  title="NODEJS"
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 6,
                    background: "#777BB312",
                    border: "1px solid #777BB330",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#83CD29"
                      d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    />
                  </svg>
                </div>

                <div
                  title="PHP"
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 6,
                    background: "#777BB312",
                    border: "1px solid #777BB330",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="url(#a)"
                      d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667 0-18.593-28.655-33.667-64-33.667C28.654 30.333 0 45.407 0 64Z"
                    />
                    <path
                      fill="#777bb3"
                      d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167 0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167Z"
                    />
                    <path d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53 1.306-1.006 2.207-2.747 2.68-5.175.44-2.27.272-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585 2.088 2.39 2.734 5.734 1.917 9.935-.333 1.711-.905 3.3-1.7 4.724a15.818 15.818 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562z" />
                    <path
                      fill="#fff"
                      d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089.607.674.723 2.097.331 4.112-.439 2.257-1.253 3.858-2.42 4.756-1.194.92-3.138 1.386-5.773 1.386h-2.786l2.205-11.342zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944 1.977-.642 3.796-1.731 5.406-3.237a16.522 16.522 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931.86-4.423.161-7.964-2.076-10.524-2.216-2.537-5.698-3.823-10.349-3.823zM30.301 68.557h4.471c2.963 0 5.17-.557 6.62-1.675 1.451-1.116 2.428-2.98 2.938-5.591.485-2.508.264-4.277-.665-5.308-.931-1.03-2.791-1.546-5.584-1.546h-5.036l-2.743 14.12m10.563-19.445c4.252 0 7.353 1.117 9.303 3.348 1.95 2.232 2.536 5.347 1.76 9.346-.322 1.648-.863 3.154-1.625 4.518-.764 1.366-1.76 2.614-2.991 3.747-1.468 1.373-3.097 2.352-4.892 2.935-1.794.584-4.08.875-6.857.875h-6.296l-1.743 8.97h-7.35l6.558-33.739h14.133"
                    />
                    <path d="M69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321 1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56h-7.407z" />
                    <path
                      fill="#fff"
                      d="M65.31 38.755h-7.291a1.39 1.39 0 0 0-1.364 1.124l-6.557 33.738a1.39 1.39 0 0 0 1.363 1.654h7.291a1.39 1.39 0 0 0 1.364-1.124l3.537-18.205h4.682c2.168 0 2.624.463 2.641.484.132.14.305.795.019 2.264l-2.9 14.927a1.39 1.39 0 0 0 1.364 1.654h7.408a1.39 1.39 0 0 0 1.363-1.124l3.051-15.7c.715-3.686.103-6.45-1.82-8.217-1.836-1.686-4.91-2.505-9.398-2.505h-4.81l1.421-7.315a1.39 1.39 0 0 0-1.364-1.655zm0 1.39-1.743 8.968h6.496c4.087 0 6.907.714 8.457 2.14 1.553 1.426 2.017 3.735 1.398 6.93l-3.052 15.699h-7.407l2.901-14.928c.33-1.698.208-2.856-.365-3.474-.573-.617-1.793-.926-3.658-.926h-5.829l-3.756 19.327H51.46l6.558-33.739h7.292z"
                    />
                    <path d="M92.136 67.864c2.793 0 4.878-.515 6.198-1.53 1.304-1.006 2.206-2.747 2.679-5.175.44-2.27.273-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585 2.089 2.39 2.734 5.734 1.917 9.935a15.878 15.878 0 0 1-1.699 4.724 15.838 15.838 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z" />
                    <path
                      fill="#fff"
                      d="M91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089.61.674.724 2.097.333 4.112-.44 2.257-1.254 3.858-2.421 4.756-1.195.92-3.139 1.386-5.773 1.386h-2.786l2.204-11.342zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944 1.978-.642 3.797-1.731 5.408-3.238a16.52 16.52 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931.86-4.423.162-7.964-2.076-10.524-2.216-2.537-5.697-3.823-10.35-3.823zM87.666 68.557h4.47c2.964 0 5.17-.557 6.622-1.675 1.45-1.116 2.428-2.98 2.936-5.591.487-2.508.266-4.277-.665-5.308-.93-1.03-2.791-1.546-5.583-1.546h-5.035Zm10.563-19.445c4.251 0 7.354 1.117 9.303 3.348 1.95 2.232 2.537 5.347 1.759 9.346-.32 1.648-.862 3.154-1.624 4.518-.763 1.366-1.76 2.614-2.992 3.747-1.467 1.373-3.097 2.352-4.892 2.935-1.793.584-4.078.875-6.856.875h-6.295l-1.745 8.97h-7.35l6.558-33.739h14.133"
                    />
                    <defs>
                      <radialGradient
                        id="a"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(84.04136 0 0 84.04136 38.426 42.169)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#AEB2D5" />
                        <stop offset=".3" stopColor="#AEB2D5" />
                        <stop offset=".75" stopColor="#484C89" />
                        <stop offset="1" stopColor="#484C89" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                <div
                  title="Laravel"
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 6,
                    background: "#FF2D2012",
                    border: "1px solid #FF2D2030",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="133"
                    viewBox="0 0 128 128"
                  >
                    <g id="surface1">
                      <path
                        style={{
                          stroke: "none",
                          fillRule: "nonzero",
                          fill: "rgb(94.117647%,32.54902%,25.098039%)",
                          fillOpacity: 1,
                        }}
                        d="M 26.027344 0.136719 C 25.824219 0.214844 20.085938 3.484375 13.28125 7.394531 C 5.035156 12.136719 0.800781 14.632812 0.574219 14.867188 C 0.394531 15.070312 0.191406 15.421875 0.128906 15.644531 C -0.0429688 16.21875 -0.0546875 100.347656 0.117188 100.953125 C 0.179688 101.1875 0.382812 101.53125 0.566406 101.722656 C 1.011719 102.191406 50.238281 130.496094 50.835938 130.632812 C 51.113281 130.699219 51.425781 130.6875 51.734375 130.601562 C 52.40625 130.433594 101.503906 102.191406 101.941406 101.730469 C 102.121094 101.53125 102.324219 101.1875 102.390625 100.953125 C 102.476562 100.675781 102.507812 96.277344 102.507812 87.015625 L 102.507812 73.480469 L 114.476562 66.605469 C 125.761719 60.117188 126.453125 59.710938 126.742188 59.265625 L 127.039062 58.785156 L 127.039062 44.207031 C 127.039062 28.335938 127.070312 29.230469 126.441406 28.65625 C 126.273438 28.507812 120.523438 25.152344 113.652344 21.195312 L 101.171875 14.015625 L 99.785156 14.015625 L 87.574219 21.027344 C 80.851562 24.894531 75.136719 28.199219 74.859375 28.378906 C 74.582031 28.5625 74.25 28.902344 74.113281 29.148438 L 73.867188 29.574219 L 73.8125 43.308594 L 73.761719 57.046875 L 63.679688 62.855469 C 58.132812 66.042969 53.515625 68.683594 53.417969 68.707031 C 53.238281 68.757812 53.226562 67.449219 53.226562 42.203125 L 53.226562 15.632812 L 52.960938 15.175781 C 52.628906 14.621094 54.121094 15.507812 39.136719 6.894531 C 26.570312 -0.332031 26.871094 -0.179688 26.027344 0.136719 Z M 37.578125 10.65625 C 42.835938 13.671875 47.136719 16.167969 47.136719 16.199219 C 47.136719 16.230469 42.527344 18.894531 36.894531 22.132812 L 26.644531 28.015625 L 16.414062 22.132812 C 10.792969 18.894531 6.1875 16.230469 6.1875 16.199219 C 6.1875 16.167969 10.785156 13.503906 16.40625 10.273438 L 26.613281 4.402344 L 27.316406 4.785156 C 27.710938 5 32.332031 7.640625 37.578125 10.65625 Z M 110.730469 24.191406 C 116.265625 27.378906 120.84375 30.011719 120.886719 30.054688 C 121.003906 30.160156 100.703125 41.828125 100.425781 41.816406 C 100.148438 41.808594 80.097656 30.246094 80.105469 30.105469 C 80.117188 29.945312 100.289062 18.339844 100.492188 18.371094 C 100.585938 18.394531 105.195312 21.015625 110.730469 24.191406 Z M 14.828125 25.875 L 24.585938 31.492188 L 24.640625 59.304688 L 24.691406 87.121094 L 24.929688 87.496094 C 25.054688 87.695312 25.289062 87.964844 25.460938 88.089844 C 25.621094 88.207031 31.050781 91.300781 37.523438 94.953125 L 49.28125 101.59375 L 49.28125 113.359375 C 49.28125 119.816406 49.238281 125.113281 49.183594 125.113281 C 49.140625 125.113281 38.976562 119.296875 26.601562 112.175781 L 4.105469 99.238281 L 4.074219 59.464844 L 4.054688 19.703125 L 4.554688 19.980469 C 4.84375 20.132812 9.460938 22.785156 14.828125 25.875 Z M 49.28125 45.453125 L 49.28125 71.082031 L 48.886719 71.339844 C 48.351562 71.679688 28.8125 82.910156 28.746094 82.910156 C 28.714844 82.910156 28.691406 71.339844 28.691406 57.195312 L 28.703125 31.492188 L 38.910156 25.621094 C 44.523438 22.390625 49.152344 19.769531 49.207031 19.789062 C 49.246094 19.8125 49.28125 31.363281 49.28125 45.453125 Z M 88.222656 39.558594 L 98.453125 45.441406 L 98.453125 57.101562 C 98.453125 68.164062 98.441406 68.757812 98.273438 68.695312 C 98.164062 68.652344 93.535156 66 87.980469 62.800781 L 77.867188 56.992188 L 77.867188 45.335938 C 77.867188 38.917969 77.898438 33.675781 77.929688 33.675781 C 77.972656 33.675781 82.601562 36.320312 88.222656 39.558594 Z M 123.09375 45.261719 C 123.09375 51.644531 123.050781 56.910156 123.007812 56.960938 C 122.933594 57.078125 102.699219 68.738281 102.570312 68.738281 C 102.539062 68.738281 102.507812 63.496094 102.507812 57.078125 L 102.507812 45.421875 L 112.714844 39.546875 C 118.335938 36.320312 122.964844 33.675781 123.007812 33.675781 C 123.0625 33.675781 123.09375 38.886719 123.09375 45.261719 Z M 86.230469 66.46875 C 94.835938 71.421875 96.320312 72.308594 96.171875 72.425781 C 96.074219 72.488281 92.8125 74.363281 88.929688 76.582031 C 85.046875 78.796875 74.988281 84.53125 66.570312 89.328125 L 51.273438 98.054688 L 50.785156 97.789062 C 47.863281 96.191406 30.910156 86.546875 30.910156 86.472656 C 30.902344 86.3125 75.765625 60.53125 75.945312 60.597656 C 76.03125 60.628906 80.660156 63.269531 86.230469 66.46875 Z M 98.433594 87.558594 L 98.398438 99.238281 L 75.914062 112.175781 C 63.542969 119.296875 53.375 125.113281 53.324219 125.113281 C 53.269531 125.113281 53.226562 120.359375 53.226562 113.359375 L 53.226562 101.59375 L 75.765625 88.742188 C 88.148438 81.675781 98.324219 75.890625 98.378906 75.878906 C 98.421875 75.878906 98.441406 81.132812 98.433594 87.558594 Z M 98.433594 87.558594 Z"
                      />
                    </g>
                  </svg>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              {[
                { label: "Projects", href: "#work" },
                { label: "Resume", href: "#" },
              ].map((link, i) => (
                <span
                  key={link.label}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  {i > 0 && (
                    <span style={{ color: "#252525", fontSize: 13 }}>/</span>
                  )}
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: 12,
                      color: "var(--ink)",
                      textDecoration: "none",
                      letterSpacing: ".04em",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--rust)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--ink)")
                    }
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-image-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              overflow: "hidden",
              minHeight: 480,
            }}
          >
            <img
              src={hero}
              alt="Adams Roland"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "top center",
                filter: "grayscale(100%) brightness(0.72) contrast(1.1)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0) 100%)",
                display: "block",
                position: "absolute",
                inset: 0,
              }}
            />
          </motion.div>
        </div>
      </section>

      <section id="work" style={{ padding: "140px 32px 40px", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 8,
            left: 24,
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(140px, 20vw, 280px)",
            fontWeight: 100,
            color: "#ffffff05",
            letterSpacing: "-.05em",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          01
        </div>
        <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>
          <RevealOnScroll>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
                marginBottom: 96,
              }}
            >
              <div>
                <p className="section-num" style={{ marginBottom: 16 }}>
                  01 — Selected Work
                </p>
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(40px, 8vw, 92px)",
                    fontWeight: 300,
                    letterSpacing: "-.03em",
                    lineHeight: 0.98,
                  }}
                >
                  Projects that
                  <br />
                  <em style={{ color: "var(--rust)" }}>matter.</em>
                </h2>
              </div>
              <a
                href="https://github.com/roland-adams2007"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "color .25s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rust)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <GitHubIcon /> All repositories <ArrowUpRight size={12} />
              </a>
            </div>
          </RevealOnScroll>

          {allProjects.slice(0, 4).map((project, i) => (
            <ProjectShowcase key={project.id} project={project} index={i} />
          ))}

          <RevealOnScroll delay={0.1}>
            <p className="section-num" style={{ margin: "16px 0 8px" }}>
              More builds
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {allProjects.slice(4).map((project) => (
                <ProjectIndexRow key={project.id} project={project} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section
        id="about"
        style={{
          padding: "140px 32px",
          borderTop: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 8,
            right: 24,
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(140px, 20vw, 280px)",
            fontWeight: 100,
            color: "#ffffff05",
            letterSpacing: "-.05em",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          02
        </div>
        <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>
          <RevealOnScroll>
            <p className="section-num" style={{ marginBottom: 20 }}>
              02 — About Me
            </p>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(32px, 6vw, 68px)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-.03em",
                maxWidth: 820,
                marginBottom: 96,
              }}
            >
              Most developers pick a layer.
              <br />
              <em style={{ color: "var(--rust)" }}>Adams builds the whole stack.</em>
            </h2>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
              gap: "clamp(48px, 6vw, 96px)",
              alignItems: "start",
            }}
            className="about-grid"
          >
            <RevealOnScroll delay={0.1}>
              <div style={{ maxWidth: 540 }}>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.95,
                    color: "var(--muted)",
                    marginBottom: 24,
                  }}
                >
                  For the past two years that's meant taking projects from an
                  empty repo to something people actually use — a ticketing
                  platform for real event organizers, a practicum system for a
                  university faculty, a social app, and a run of client sites.
                  React and React Native up front, Laravel and PHP behind it,
                  one person deciding what gets built and how.
                </p>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.95,
                    color: "var(--muted)",
                    marginBottom: 40,
                  }}
                >
                  He also writes and manages content for an ed-tech platform,
                  which means he's spent about as much time explaining
                  technical work clearly as he has doing it.
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 32,
                  }}
                >
                  <span className="avail-dot" />
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: 11,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "#5A8A5A",
                    }}
                  >
                    Open to freelance and full-time work
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <a href="#" className="btn">
                    <span>Download CV</span>
                    <Download size={13} />
                  </a>
                  <SocialLinks />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <div
                style={{
                  borderLeft: "1px solid var(--border)",
                  paddingLeft: "clamp(24px, 3vw, 40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 40,
                }}
              >
                {[
                  {
                    num: "02+",
                    label: "Years building production software",
                  },
                  {
                    num: "01",
                    label: "Person across the entire stack — frontend, backend, deploy",
                  },
                  {
                    num: "04",
                    label: "Live products currently in rotation",
                  },
                ].map((signal) => (
                  <div key={signal.label}>
                    <span
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: "clamp(36px, 4vw, 52px)",
                        fontWeight: 300,
                        color: "var(--ink)",
                        letterSpacing: "-.02em",
                        lineHeight: 1,
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      {signal.num}
                    </span>
                    <p
                      style={{
                        fontSize: 12.5,
                        lineHeight: 1.6,
                        color: "var(--muted)",
                        maxWidth: 220,
                      }}
                    >
                      {signal.label}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section
        id="experience"
        style={{
          padding: "140px 32px",
          borderTop: "1px solid var(--border)",
          background: "var(--bg2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 8,
            left: 24,
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(140px, 20vw, 280px)",
            fontWeight: 100,
            color: "#ffffff05",
            letterSpacing: "-.05em",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          03
        </div>
        <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>
          <RevealOnScroll>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 32,
                marginBottom: 72,
              }}
            >
              <div>
                <p className="section-num" style={{ marginBottom: 12 }}>
                  03 — Experience
                </p>
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(28px, 4vw, 50px)",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    letterSpacing: "-.02em",
                  }}
                >
                  The road
                  <br />
                  <em>so far.</em>
                </h2>
              </div>
              <div style={{ maxWidth: 300, textAlign: "right" }}>
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 44,
                    fontWeight: 300,
                    color: "var(--ink)",
                    letterSpacing: "-.02em",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  8+
                </span>
                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}>
                  Projects shipped across full-stack apps, SaaS platforms,
                  real-time systems, and ticketing infrastructure.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <WaveTimeline
              items={[
                {
                  period: "Dec 2025 — Present",
                  color: "var(--rust)",
                  active: true,
                  title: "Founder & Full-Stack Developer",
                  sub: "Tixkarios · Full-time",
                  desc: "Founded and built Tixkarios, a digital ticketing platform enabling event organizers to create, manage, and sell tickets online. Handled end-to-end development, frontend, backend, system architecture, and payment integration.",
                  tags: ["React", "Laravel", "Node.js", "MySQL"],
                },
                {
                  period: "Nov 2025 — Present",
                  color: "var(--rust)",
                  active: true,
                  title: "Junior Community & Content Specialist",
                  sub: "Apodissi · Part-time",
                  desc: "Managing community engagement and creating content strategies across platforms, fostering growth and maintaining brand presence.",
                  tags: ["Community", "Content Strategy", "Social Media"],
                },
                {
                  period: "Feb 2025 — Feb 2026",
                  color: "var(--muted)",
                  active: false,
                  title: "Team Leader",
                  sub: "3jstech",
                  desc: "Led development teams and managed project deliveries. Handled code reviews, team coordination, and mentoring across multiple projects.",
                  tags: ["Leadership", "Code Review", "Mentoring"],
                },
                {
                  period: "2024 — Present",
                  color: "var(--muted)",
                  active: false,
                  title: "University Student",
                  sub: "University of Ilorin",
                  desc: "Pursuing a computer science degree while applying theoretical knowledge to real-world projects.",
                  tags: ["Computer Science", "Data Structures"],
                },
                {
                  period: "Feb 2024 — Jun 2024",
                  color: "var(--muted)",
                  active: false,
                  title: "Full-Stack Development Bootcamp",
                  sub: "MOAT Academy · Certificate Earned",
                  desc: "Intensive bootcamp in modern web development. Built real-world projects across the front end and back end.",
                  tags: ["JavaScript", "React", "PHP", "Laravel"],
                },
                {
                  period: "2023",
                  color: "var(--muted)",
                  active: false,
                  title: "Programming Journey Begins",
                  sub: "Self-Learning & Exploration",
                  desc: "Started learning programming through self-study, building the foundation for everything after.",
                  tags: [],
                },
              ]}
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div
              style={{
                marginTop: 96,
                paddingTop: 56,
                borderTop: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 11,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 32,
                }}
              >
                How the work actually happens
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 32,
                }}
              >
                {[
                  {
                    num: "01",
                    title: "Scope",
                    desc: "Work out what the product needs, not what's easiest to build first.",
                  },
                  {
                    num: "02",
                    title: "Build",
                    desc: "Frontend and backend together, so nothing gets designed in a vacuum.",
                  },
                  {
                    num: "03",
                    title: "Ship",
                    desc: "Get it in front of real users instead of polishing it in isolation.",
                  },
                  {
                    num: "04",
                    title: "Iterate",
                    desc: "Fix what breaks, cut what doesn't matter, keep moving.",
                  },
                ].map((step, i) => (
                  <div
                    key={step.num}
                    style={{
                      borderLeft: "1px solid var(--border)",
                      paddingLeft: 20,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: 11,
                        color: "var(--rust)",
                        letterSpacing: ".08em",
                      }}
                    >
                      {step.num}
                    </span>
                    <h4
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: 24,
                        fontWeight: 300,
                        color: "var(--ink)",
                        margin: "6px 0 10px",
                        letterSpacing: "-.01em",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 12.5,
                        lineHeight: 1.7,
                        color: "var(--muted)",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section
        id="skills"
        style={{
          padding: "140px 32px",
          borderTop: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 8,
            right: 24,
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(140px, 20vw, 280px)",
            fontWeight: 100,
            color: "#ffffff05",
            letterSpacing: "-.05em",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          04
        </div>
        <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: 48,
              marginBottom: 64,
            }}
          >
            <RevealOnScroll>
              <p className="section-num" style={{ marginBottom: 12 }}>
                04 — Expertise
              </p>
              <h2
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(28px, 4vw, 50px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "-.02em",
                }}
              >
                What I bring
                <br />
                to the <em>table.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.9,
                  color: "var(--muted)",
                  alignSelf: "end",
                  maxWidth: 420,
                }}
              >
                A working stack built for shipping full products end to end —
                interfaces, servers, data, and everything that connects them.
              </p>
            </RevealOnScroll>
          </div>

          {[
            {
              num: "01",
              label: "Frontend",
              capability: "Interfaces people actually want to use.",
              items: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "HTML & CSS",
                "Bootstrap",
                "Framer Motion",
                "Vite",
                "Zustand",
              ],
            },
            {
              num: "02",
              label: "Backend",
              capability: "APIs, auth, and databases that hold up.",
              items: [
                "PHP",
                "Laravel",
                "WordPress",
                "MySQL",
                "Node.js",
                "Express",
                "Prisma",
                "Firebase",
                "Supabase",
                "PostgreSQL",
                "REST APIs",
                "MVC Architecture",
                "WebSockets",
                "Composer",
              ],
            },
            {
              num: "03",
              label: "Tools",
              capability: "The workflow that keeps solo builds from falling apart.",
              items: ["Git & GitHub", "Docker", "CI/CD Pipeline", "VS Code", "npm", "XAMPP", "Postman"],
            },
          ].map((cat, i) => (
            <RevealOnScroll key={cat.label} delay={0.1 + i * 0.05}>
              <div
                style={{
                  padding: "40px 0",
                  borderTop: "1px solid var(--border)",
                  marginLeft: i === 1 ? "clamp(0px, 8vw, 96px)" : 0,
                  transition: "margin .3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: 10,
                      color: "var(--rust)",
                      letterSpacing: ".1em",
                    }}
                  >
                    {cat.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: 11,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(24px, 3.4vw, 36px)",
                    fontWeight: 300,
                    color: "var(--ink)",
                    letterSpacing: "-.01em",
                    lineHeight: 1.15,
                    maxWidth: 520,
                    marginBottom: 20,
                  }}
                >
                  {cat.capability}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 2.1, color: "var(--muted)", maxWidth: 640 }}>
                  {cat.items.map((t, idx) => (
                    <span key={t}>
                      <span style={{ color: "var(--ink)" }}>{t}</span>
                      {idx < cat.items.length - 1 && (
                        <span style={{ color: "var(--border)" }}> · </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "160px 32px 120px",
          borderTop: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 8,
            left: 24,
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(140px, 20vw, 280px)",
            fontWeight: 100,
            color: "#ffffff05",
            letterSpacing: "-.05em",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          05
        </div>
        <div className="orb orb-contact" />
        <div className="contact-grid-accent" />
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <RevealOnScroll>
            <p
              className="section-num"
              style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}
            >
              05 — Let's Talk
            </p>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(36px, 7vw, 84px)",
                fontWeight: 300,
                lineHeight: 1.02,
                letterSpacing: "-.03em",
                marginBottom: 28,
              }}
            >
              Let's build
              <br />
              <em style={{ color: "var(--rust)" }}>something.</em>
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: "var(--muted)",
                maxWidth: 460,
                margin: "0 auto 56px",
              }}
            >
              Open to freelance projects, full-time opportunities, and
              collaborations. If you have an idea or need help bringing your
              vision to life, let's talk.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
              <CopyEmail />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              {[
                { label: "Twitter", href: "https://x.com/R_coredev", Icon: XIcon },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/roland-adams-045965315", Icon: LinkedInIcon },
                { label: "GitHub", href: "https://github.com/roland-adams2007", Icon: GitHubIcon },
                { label: "TikTok", href: "#", Icon: TikTokIcon },
                { label: "Instagram", href: "#", Icon: InstagramIcon },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label={item.label}
                >
                  <item.Icon />
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-vignette" />

        <RevealOnScroll>
          <a href="mailto:adamsrolly7@gmail.com" className="footer-cta">
            <span className="footer-cta-left">
              <span className="footer-cta-question">Got a project?</span>
            </span>
            <span className="footer-cta-right">
              <span className="footer-cta-answer">Say hello</span>
              <ArrowUpRight size={22} strokeWidth={2.25} />
            </span>
          </a>
        </RevealOnScroll>

        <div className="footer-inner">
          <RevealOnScroll delay={0.08}>
            <a href="#" className="footer-name-link" aria-label="Back to top">
              <h2 className="footer-name">Adams Roland</h2>
            </a>
          </RevealOnScroll>
        </div>
      </footer>
    </>
  );
}