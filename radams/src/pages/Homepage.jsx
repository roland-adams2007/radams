import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowDown, ArrowUpRight,
    Download, Mail, Clock, PenTool, Code2,
    Layers, Quote, Zap, X, Terminal, ExternalLink, Copy, Check
} from "lucide-react";
import hero from "../assets/hero.png"

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

const SocialLinks = ({ size = "38px" }) => (
    <div style={{ display: "flex", gap: 8 }}>
        <a href="https://github.com/roland-adams2007" target="_blank" rel="noreferrer" className="social-icon" style={{ width: size, height: size }}><GitHubIcon /></a>
        <a href="https://x.com/R_coredev" target="_blank" rel="noreferrer" className="social-icon" style={{ width: size, height: size }}><XIcon /></a>
        <a href="https://www.linkedin.com/in/roland-adams-045965315" target="_blank" rel="noreferrer" className="social-icon" style={{ width: size, height: size }}><LinkedInIcon /></a>
        <a href="mailto:adamsrolly7@gmail.com" className="social-icon" style={{ width: size, height: size }}><Mail size={15} /></a>
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
    { id: "01", title: "Tixkarios", tag: "SaaS · Full-Stack", tagColor: "var(--rust)", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", desc: "Digital ticketing platform — event organizers create, manage, and sell tickets online. Built end-to-end with React, Laravel, payment integration, and real-time attendee tracking.", github: "https://github.com/roland-adams2007", live: null },
    { id: "02", title: "Job Board Platform", tag: "Full-Stack", tagColor: "#5A8A6A", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80", desc: "Full-stack job board with employer credits, role management, and a complete job listing system built on Laravel.", github: "https://github.com/roland-adams2007", live: "https://adamsroland.dev" },
    { id: "03", title: "University Chat App", tag: "Real-time App", tagColor: "#7B8EC4", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", desc: "Zoom-like system for UNILORIN — course rep group chats, lecturer tools, video grid, and modal-based group info.", github: "https://github.com/roland-adams2007", live: null },
    { id: "04", title: "URL Shortener", tag: "Laravel", tagColor: "var(--gold)", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", desc: "Clean link-shortening service built with Laravel, featuring working redirects and link management.", github: "https://github.com/roland-adams2007", live: "https://adamsroland.dev" },
    { id: "05", title: "E-Commerce Store", tag: "In Progress", tagColor: "#999999", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", desc: "Full-stack e-commerce platform with React frontend, Laravel backend, cart management, and payment integration.", github: null, live: null },
    { id: "06", title: "Analytics Dashboard", tag: "React", tagColor: "#7B8EC4", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", desc: "Data visualization dashboard with real-time charts, filtering, and export features built in React with a REST API backend.", github: "https://github.com/roland-adams2007", live: "https://adamsroland.dev" },
    { id: "07", title: "Blog CMS", tag: "Full-Stack", tagColor: "#5A8A6A", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", desc: "Content management system with rich text editor, tagging, author roles, and a clean public-facing blog interface.", github: "https://github.com/roland-adams2007", live: null },
    { id: "08", title: "This Portfolio", tag: "React · Laravel", tagColor: "var(--rust)", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", desc: "Designed and built from scratch — custom cursor, scroll animations, dark aesthetic, and fully responsive layout.", github: "https://github.com/roland-adams2007", live: "https://adamsroland.dev" },
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

function MobileSwipeDeck() {
    const [deck, setDeck] = useState(allProjects);
    const [isDragging, setIsDragging] = useState(false);
    const [throwDir, setThrowDir] = useState(null);
    const wrapperRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(320);

    useEffect(() => {
        const measure = () => {
            if (wrapperRef.current) {
                setCardWidth(wrapperRef.current.offsetWidth);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const throwCard = (dir = 1) => {
        if (throwDir !== null) return;
        setThrowDir(dir);
        setTimeout(() => {
            setDeck((prev) => {
                const next = [...prev];
                const top = next.shift();
                next.push(top);
                return next;
            });
            setThrowDir(null);
        }, 340);
    };

    const visibleCount = Math.min(deck.length, 4);
    const activeIndex = allProjects.findIndex((p) => p.id === deck[0].id);

    return (
        <div style={{ width: "100%" }}>
            <div ref={wrapperRef} style={{ position: "relative", width: "100%", height: 420 }}>
                {deck.slice(0, visibleCount).map((project, i) => {
                    const isTop = i === 0;
                    const stackIndex = visibleCount - 1 - i;
                    const offsetY = stackIndex * -9;
                    const offsetX = stackIndex * 5;
                    const rotation = stackIndex % 2 === 0 ? stackIndex * 1.6 : -(stackIndex * 1.6);
                    const scale = 1 - stackIndex * 0.032;
                    const brightness = isTop ? 1 : Math.max(0.35, 1 - stackIndex * 0.22);

                    return (
                        <motion.div
                            key={project.id}
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                zIndex: visibleCount - i,
                                borderRadius: 4,
                                overflow: "hidden",
                                border: isTop ? "1px solid #303030" : "1px solid var(--border)",
                                background: "var(--card)",
                                cursor: isTop ? (isDragging ? "grabbing" : "grab") : "default",
                                transformOrigin: "bottom center",
                                filter: `brightness(${brightness})`,
                                boxShadow: isTop ? "0 8px 40px rgba(0,0,0,0.55)" : "none",
                            }}
                            animate={
                                isTop && throwDir !== null
                                    ? { x: throwDir * (cardWidth + 100), rotate: throwDir * 28, opacity: 0, scale: 0.88 }
                                    : { y: offsetY, x: offsetX, rotate: rotation, scale, opacity: 1 }
                            }
                            transition={
                                isTop && throwDir !== null
                                    ? { duration: 0.34, ease: [0.23, 1, 0.32, 1] }
                                    : { type: "spring", stiffness: 260, damping: 28 }
                            }
                            drag={isTop ? "x" : false}
                            dragConstraints={{ left: -10, right: 10 }}
                            dragElastic={0.65}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={(_, info) => {
                                setIsDragging(false);
                                if (info.offset.x > 70 || info.velocity.x > 350) throwCard(1);
                                else if (info.offset.x < -70 || info.velocity.x < -350) throwCard(-1);
                            }}
                        >
                            <div style={{ height: "50%", position: "relative", overflow: "hidden" }}>
                                <img src={project.img} alt={project.title} draggable={false}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: isTop ? 0.65 : 0.5, userSelect: "none", transition: "opacity .3s" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 20%, var(--card) 100%)" }} />
                                <div style={{ position: "absolute", top: 14, left: 14 }}>
                                    <span className="tag" style={{ color: project.tagColor, borderColor: project.tagColor + "55" }}>{project.tag}</span>
                                </div>
                                <div style={{ position: "absolute", top: 12, right: 14, fontFamily: "'Instrument Serif', serif", fontSize: 32, fontWeight: 100, color: "#ffffff07", letterSpacing: "-.05em" }}>{project.id}</div>
                            </div>
                            <div style={{ padding: "14px 20px 18px" }}>
                                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 300, color: "var(--ink)", marginBottom: 8, letterSpacing: "-.01em" }}>{project.title}</h3>
                                <p style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>{project.desc}</p>
                                <div style={{ display: "flex", gap: 8 }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="card-link-btn">
                                            <GitHubIcon /><span>Code</span>
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="card-link-btn card-link-btn-live">
                                            <ExternalLink size={12} /><span>Live</span>
                                        </a>
                                    )}
                                    {!project.github && !project.live && (
                                        <span style={{ fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--border)", fontFamily: "'Geist Mono', monospace" }}>Private repo</span>
                                    )}
                                </div>
                            </div>
                            {isTop && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--rust), var(--gold))" }} />}
                        </motion.div>
                    );
                })}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexDirection: "column", marginTop: 28 }}>
                <div style={{ display: "flex", gap: 6 }}>
                    {allProjects.map((_, i) => (
                        <div key={i} style={{ width: i === activeIndex ? 20 : 6, height: 6, borderRadius: 3, background: i === activeIndex ? "var(--rust)" : "var(--border)", transition: "all .35s ease" }} />
                    ))}
                </div>
                <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".12em", textTransform: "uppercase" }}>
                    Swipe to browse — {deck[0].id} / {String(allProjects.length).padStart(2, "0")}
                </span>
            </div>
        </div>
    );
}

function DesktopScrollRail() {
    const railRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, scrollLeft: 0 });

    const onMouseDown = (e) => {
        setIsDragging(false);
        dragStart.current = { x: e.pageX, scrollLeft: railRef.current.scrollLeft, moved: false };
        const onMove = (ev) => {
            const dx = ev.pageX - dragStart.current.x;
            if (Math.abs(dx) > 4) {
                setIsDragging(true);
                dragStart.current.moved = true;
            }
            railRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
        };
        const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
            setTimeout(() => setIsDragging(false), 50);
        };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    };

    useEffect(() => {
        const rail = railRef.current;
        if (!rail) return;
        const onScroll = () => {
            const cardW = rail.offsetWidth * 0.72 + 24;
            setActiveIndex(Math.round(rail.scrollLeft / cardW));
        };
        rail.addEventListener("scroll", onScroll, { passive: true });
        return () => rail.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (idx) => {
        const rail = railRef.current;
        if (!rail) return;
        const cardW = rail.offsetWidth * 0.72 + 24;
        rail.scrollTo({ left: idx * cardW, behavior: "smooth" });
    };

    return (
        <div style={{ width: "100%" }}>
            <div
                ref={railRef}
                className="desktop-rail"
                onMouseDown={onMouseDown}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
                {allProjects.map((project, i) => (
                    <div key={project.id} className="desktop-rail-card">
                        <div style={{ height: "52%", position: "relative", overflow: "hidden" }}>
                            <img src={project.img} alt={project.title} draggable={false}
                                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6, userSelect: "none", transition: "opacity .4s" }} />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 20%, var(--card) 100%)" }} />
                            <div style={{ position: "absolute", top: 18, left: 18 }}>
                                <span className="tag" style={{ color: project.tagColor, borderColor: project.tagColor + "55" }}>{project.tag}</span>
                            </div>
                            <div style={{ position: "absolute", top: 14, right: 18, fontFamily: "'Instrument Serif', serif", fontSize: 42, fontWeight: 100, color: "#ffffff06", letterSpacing: "-.05em" }}>{project.id}</div>
                        </div>
                        <div style={{ padding: "20px 28px 24px" }}>
                            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, fontWeight: 300, color: "var(--ink)", marginBottom: 10, letterSpacing: "-.01em" }}>{project.title}</h3>
                            <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.8, marginBottom: 18 }}>{project.desc}</p>
                            <div style={{ display: "flex", gap: 8 }}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="card-link-btn">
                                        <GitHubIcon /><span>Code</span>
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="card-link-btn card-link-btn-live">
                                        <ExternalLink size={12} /><span>Live</span>
                                    </a>
                                )}
                                {!project.github && !project.live && (
                                    <span style={{ fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--border)", fontFamily: "'Geist Mono', monospace" }}>Private repo</span>
                                )}
                            </div>
                        </div>
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--rust), var(--gold))", opacity: i === activeIndex ? 1 : 0, transition: "opacity .35s" }} />
                    </div>
                ))}
                <div style={{ minWidth: 32, flexShrink: 0 }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 32 }}>
                <div style={{ display: "flex", gap: 6 }}>
                    {allProjects.map((_, i) => (
                        <button key={i} onClick={() => scrollTo(i)} style={{ width: i === activeIndex ? 20 : 6, height: 6, borderRadius: 3, background: i === activeIndex ? "var(--rust)" : "var(--border)", transition: "all .35s ease", border: "none", cursor: "pointer", padding: 0 }} />
                    ))}
                </div>
                <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".12em", textTransform: "uppercase" }}>
                    Drag to browse — {String(activeIndex + 1).padStart(2, "0")} / {String(allProjects.length).padStart(2, "0")}
                </span>
            </div>
        </div>
    );
}

function CardDeck() {
    const isMobile = useIsMobile();
    return isMobile ? <MobileSwipeDeck /> : <DesktopScrollRail />;
}

function OrbitVisual() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-80px" });

    const stackLabels = [
        { label: "React", angle: 180, radius: 130 },
        { label: "Laravel", angle: 0, radius: 130 },
        { label: "PHP", angle: 270, radius: 110 },
        { label: "MySQL", angle: 90, radius: 110 },
    ];

    const [angle, setAngle] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!inView) return;
        let start = null;
        const tick = (ts) => {
            if (!start) start = ts;
            const elapsed = ts - start;
            setAngle((elapsed / 1000) * 18);
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [inView]);

    return (
        <div ref={ref} className="about-visual">
            <div className="about-grid-lines" />
            <svg
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
                viewBox="0 0 460 400"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#888888" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#888888" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="230" cy="200" r="55" fill="none" stroke="#88888822" strokeWidth="1" />
                <circle cx="230" cy="200" r="110" fill="none" stroke="#25252044" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="230" cy="200" r="148" fill="none" stroke="#25252028" strokeWidth="1" />
                <motion.circle cx="230" cy="200" r="55" fill="none" stroke="#88888855" strokeWidth="1.5" strokeDasharray="20 180" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "230px 200px" }} />
                <motion.circle cx="230" cy="200" r="110" fill="none" stroke="#99999933" strokeWidth="1" strokeDasharray="12 80" animate={{ rotate: -360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "230px 200px" }} />
                {stackLabels.map(({ label, angle: baseAngle, radius }) => {
                    const totalAngle = ((baseAngle + angle) * Math.PI) / 180;
                    const x = 230 + Math.cos(totalAngle) * radius;
                    const y = 200 + Math.sin(totalAngle) * radius;
                    return (
                        <g key={label}>
                            <line x1="230" y1="200" x2={x} y2={y} stroke="#88888818" strokeWidth="1" />
                            <circle cx={x} cy={y} r="3" fill="#88888866" />
                            <rect x={x - 28} y={y - 12} width="56" height="22" rx="11" fill="#0D0D0D" stroke="#252525" strokeWidth="1" />
                            <text x={x} y={y + 4} textAnchor="middle" fill="#9A9A9A" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="1.5" style={{ textTransform: "uppercase" }}>{label.toUpperCase()}</text>
                        </g>
                    );
                })}
                <circle cx="230" cy="200" r="28" fill="url(#orbGlow)" />
                <motion.circle cx="230" cy="200" r="6" fill="#888888" animate={{ r: [6, 8, 6], opacity: [1, 0.6, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
                <circle cx="230" cy="200" r="14" fill="none" stroke="#88888840" strokeWidth="1" />
                <motion.circle cx={230 + 55} cy={200} r="3" fill="#999999" animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "230px 200px" }} />
            </svg>
            <div className="about-stat-chip" style={{ top: "10%", left: "6%" }}>
                <span style={{ fontSize: 26, fontFamily: "'Instrument Serif', serif", fontWeight: 300, color: "var(--ink)", lineHeight: 1 }}>8+</span>
                <span style={{ fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 2 }}>Projects</span>
            </div>
            <div className="about-stat-chip" style={{ top: "10%", right: "6%" }}>
                <span style={{ fontSize: 26, fontFamily: "'Instrument Serif', serif", fontWeight: 300, color: "var(--ink)", lineHeight: 1 }}>2yr+</span>
                <span style={{ fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 2 }}>Experience</span>
            </div>
            <div className="about-stat-chip" style={{ bottom: "10%", left: "50%", transform: "translateX(-50%)" }}>
                <span style={{ fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", color: "#5A8A5A", display: "flex", alignItems: "center", gap: 6 }}>
                    <span className="avail-dot" />Open to work
                </span>
            </div>
        </div>
    );
}

function TerminalCard() {
    const lines = [
        { cmd: "whoami", out: "Adams Roland — Full-Stack Developer" },
        { cmd: "status", out: "✓ Available for new projects" },
        { cmd: "response_time", out: "< 24 hours" },
        { cmd: "preferred_stack", out: "React · Laravel · PHP · MySQL · Node.js" },
    ];
    const [visible, setVisible] = useState(0);
    useEffect(() => {
        if (visible >= lines.length) return;
        const t = setTimeout(() => setVisible((v) => v + 1), 600 + visible * 180);
        return () => clearTimeout(t);
    }, [visible]);
    return (
        <div className="terminal-card">
            <div className="terminal-header">
                <span className="t-dot" style={{ background: "#FF5F56" }} />
                <span className="t-dot" style={{ background: "#FFBD2E" }} />
                <span className="t-dot" style={{ background: "#27C93F" }} />
                <span style={{ fontSize: 10, color: "var(--muted)", marginLeft: 8, letterSpacing: ".1em" }}>adamsroland — zsh</span>
            </div>
            <div className="terminal-body">
                {lines.slice(0, visible).map((line, i) => (
                    <div key={i} style={{ marginBottom: 10 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            <span style={{ color: "var(--rust)", fontSize: 11 }}>❯</span>
                            <span style={{ color: "#7B8EC4", fontSize: 11, fontFamily: "'Geist Mono', monospace" }}>{line.cmd}</span>
                        </div>
                        <div style={{ marginLeft: 20, fontSize: 11, color: "var(--ink)", fontFamily: "'Geist Mono', monospace", lineHeight: 1.8 }}>{line.out}</div>
                    </div>
                ))}
                {visible < lines.length && (
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ color: "var(--rust)", fontSize: 11 }}>❯</span>
                        <span className="cursor-blink" />
                    </div>
                )}
            </div>
        </div>
    );
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
            <span style={{ marginLeft: 8, color: copied ? "#5A8A5A" : "var(--muted)", transition: "color .3s" }}>
                {copied ? <Check size={12} /> : <Copy size={12} />}
            </span>
        </button>
    );
}

export default function Homepage() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
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
                                onMouseEnter={e => { e.currentTarget.style.background = "#88888814"; e.currentTarget.style.color = "var(--ink)"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--muted)"; }}
                            >
                                <span style={{ fontSize: 9, color: "var(--rust)", letterSpacing: ".12em", fontFamily: "'Geist Mono', monospace", minWidth: 20 }}>{link.num}</span>
                                {link.label}
                            </motion.a>
                        ))}
                        <div style={{ height: 1, background: "var(--border)", margin: "4px 16px" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px" }}>
                            <a href="https://github.com/roland-adams2007" target="_blank" rel="noreferrer" style={{ color: "var(--muted)", display: "flex", textDecoration: "none", transition: "color .2s", padding: 4 }} onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"} onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}><GitHubIcon /></a>
                            <a href="https://x.com/R_coredev" target="_blank" rel="noreferrer" style={{ color: "var(--muted)", display: "flex", textDecoration: "none", transition: "color .2s", padding: 4 }} onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"} onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}><XIcon /></a>
                            <a href="https://www.linkedin.com/in/roland-adams-045965315" target="_blank" rel="noreferrer" style={{ color: "var(--muted)", display: "flex", textDecoration: "none", transition: "color .2s", padding: 4 }} onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"} onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}><LinkedInIcon /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                onClick={() => setMenuOpen(v => !v)}
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
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 15, fontWeight: 300, color: "var(--ink)", letterSpacing: "-.01em" }}>AR</span>
                <div style={{ width: 1, height: 14, background: menuOpen ? "#ffffff40" : "var(--border)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: menuOpen ? 0 : 4, transition: "gap .3s" }}>
                    <span style={{ display: "block", width: 16, height: 1, background: "var(--ink)", transformOrigin: "center", transform: menuOpen ? "translateY(0.5px) rotate(45deg)" : "none", transition: "transform .3s ease" }} />
                    <span style={{ display: "block", width: 16, height: 1, background: "var(--ink)", transform: menuOpen ? "translateY(-0.5px) rotate(-45deg)" : "none", opacity: menuOpen ? 1 : 1, transition: "transform .3s ease, opacity .3s" }} />
                </div>
            </motion.button>

            <section className="hero-split" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 32px", position: "relative", overflow: "hidden" }}>

                <div style={{ maxWidth: 1152, width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", zIndex: 10 }}>

                    <div className="hero-text-col" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ overflow: "hidden", lineHeight: 0.92, marginBottom: 2 }}>
                            <motion.h1
                                initial={{ y: "105%" }} animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                                style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(60px, 9vw, 124px)", fontWeight: 700, letterSpacing: "-.03em", color: "var(--ink)", margin: 0 }}
                            >
                                Adams
                            </motion.h1>
                        </div>
                        <div style={{ overflow: "hidden", lineHeight: 0.92, marginBottom: 36 }}>
                            <motion.h1
                                initial={{ y: "105%" }} animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
                                style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(60px, 9vw, 124px)", fontWeight: 700, letterSpacing: "-.03em", color: "#303030", margin: 0 }}
                            >
                                Roland
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.42, ease: [0.23, 1, 0.32, 1] }}
                            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
                        >
                            <div style={{ width: 28, height: 1, background: "var(--muted)", flexShrink: 0 }} />
                            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: "var(--muted)", letterSpacing: ".04em" }}>
                                Noir_
                                <span style={{ display: "inline-block", width: 7, height: 13, background: "var(--ink)", marginLeft: 1, verticalAlign: "middle", animation: "blink 1s step-end infinite" }} />
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.52 }}
                            style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: "var(--muted)", lineHeight: 1.8, marginBottom: 28, maxWidth: 400 }}
                        >
                            I build products, not just pages.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.62 }}
                            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}
                        >
                            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: ".06em" }}>using</span>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4" /><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" /></g></svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="url(#a)" d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667 0-18.593-28.655-33.667-64-33.667C28.654 30.333 0 45.407 0 64Z" /><path fill="#777bb3" d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167 0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167Z" /><path d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53 1.306-1.006 2.207-2.747 2.68-5.175.44-2.27.272-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585 2.088 2.39 2.734 5.734 1.917 9.935-.333 1.711-.905 3.3-1.7 4.724a15.818 15.818 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562z" /><path fill="#fff" d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089.607.674.723 2.097.331 4.112-.439 2.257-1.253 3.858-2.42 4.756-1.194.92-3.138 1.386-5.773 1.386h-2.786l2.205-11.342zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944 1.977-.642 3.796-1.731 5.406-3.237a16.522 16.522 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931.86-4.423.161-7.964-2.076-10.524-2.216-2.537-5.698-3.823-10.349-3.823zM30.301 68.557h4.471c2.963 0 5.17-.557 6.62-1.675 1.451-1.116 2.428-2.98 2.938-5.591.485-2.508.264-4.277-.665-5.308-.931-1.03-2.791-1.546-5.584-1.546h-5.036l-2.743 14.12m10.563-19.445c4.252 0 7.353 1.117 9.303 3.348 1.95 2.232 2.536 5.347 1.76 9.346-.322 1.648-.863 3.154-1.625 4.518-.764 1.366-1.76 2.614-2.991 3.747-1.468 1.373-3.097 2.352-4.892 2.935-1.794.584-4.08.875-6.857.875h-6.296l-1.743 8.97h-7.35l6.558-33.739h14.133" /><path d="M69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321 1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56h-7.407z" /><path fill="#fff" d="M65.31 38.755h-7.291a1.39 1.39 0 0 0-1.364 1.124l-6.557 33.738a1.39 1.39 0 0 0 1.363 1.654h7.291a1.39 1.39 0 0 0 1.364-1.124l3.537-18.205h4.682c2.168 0 2.624.463 2.641.484.132.14.305.795.019 2.264l-2.9 14.927a1.39 1.39 0 0 0 1.364 1.654h7.408a1.39 1.39 0 0 0 1.363-1.124l3.051-15.7c.715-3.686.103-6.45-1.82-8.217-1.836-1.686-4.91-2.505-9.398-2.505h-4.81l1.421-7.315a1.39 1.39 0 0 0-1.364-1.655zm0 1.39-1.743 8.968h6.496c4.087 0 6.907.714 8.457 2.14 1.553 1.426 2.017 3.735 1.398 6.93l-3.052 15.699h-7.407l2.901-14.928c.33-1.698.208-2.856-.365-3.474-.573-.617-1.793-.926-3.658-.926h-5.829l-3.756 19.327H51.46l6.558-33.739h7.292z" /><path d="M92.136 67.864c2.793 0 4.878-.515 6.198-1.53 1.304-1.006 2.206-2.747 2.679-5.175.44-2.27.273-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585 2.089 2.39 2.734 5.734 1.917 9.935a15.878 15.878 0 0 1-1.699 4.724 15.838 15.838 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z" /><path fill="#fff" d="M91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089.61.674.724 2.097.333 4.112-.44 2.257-1.254 3.858-2.421 4.756-1.195.92-3.139 1.386-5.773 1.386h-2.786l2.204-11.342zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944 1.978-.642 3.797-1.731 5.408-3.238a16.52 16.52 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931.86-4.423.162-7.964-2.076-10.524-2.216-2.537-5.697-3.823-10.35-3.823zM87.666 68.557h4.47c2.964 0 5.17-.557 6.622-1.675 1.45-1.116 2.428-2.98 2.936-5.591.487-2.508.266-4.277-.665-5.308-.93-1.03-2.791-1.546-5.583-1.546h-5.035Zm10.563-19.445c4.251 0 7.354 1.117 9.303 3.348 1.95 2.232 2.537 5.347 1.759 9.346-.32 1.648-.862 3.154-1.624 4.518-.763 1.366-1.76 2.614-2.992 3.747-1.467 1.373-3.097 2.352-4.892 2.935-1.793.584-4.078.875-6.856.875h-6.295l-1.745 8.97h-7.35l6.558-33.739h14.133" /><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(84.04136 0 0 84.04136 38.426 42.169)" gradientUnits="userSpaceOnUse"><stop stop-color="#AEB2D5" /><stop offset=".3" stop-color="#AEB2D5" /><stop offset=".75" stop-color="#484C89" /><stop offset="1" stop-color="#484C89" /></radialGradient></defs></svg>


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
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.72 }}
                            style={{ display: "flex", alignItems: "center", gap: 8 }}
                        >
                            {[
                                { label: "Projects", href: "#work" },
                                { label: "Resume", href: "#" },
                            ].map((link, i) => (
                                <span key={link.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    {i > 0 && <span style={{ color: "#252525", fontSize: 13 }}>/</span>}
                                    <a
                                        href={link.href}
                                        style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, color: "var(--ink)", textDecoration: "none", letterSpacing: ".04em", transition: "color .2s" }}
                                        onMouseEnter={e => e.currentTarget.style.color = "var(--rust)"}
                                        onMouseLeave={e => e.currentTarget.style.color = "var(--ink)"}
                                    >
                                        {link.label}
                                    </a>
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-image-col"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 1.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                        style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden", minHeight: 480 }}
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
                                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0) 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0) 100%)",
                                display: "block",
                                position: "absolute",
                                inset: 0,
                            }}
                        />
                    </motion.div>

                </div>

            </section>

            <section id="work" style={{ padding: "96px 32px" }}>
                <div style={{ maxWidth: 1152, margin: "0 auto" }}>
                    <RevealOnScroll>
                        <div style={{ marginBottom: 64 }}>
                            <p className="section-num" style={{ marginBottom: 12 }}>02 — Selected Work</p>
                            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 5vw, 54px)", fontWeight: 300, letterSpacing: "-.025em", lineHeight: 1.1 }}>
                                    Projects that<br /><em>matter.</em>
                                </h2>
                                <a href="https://github.com/roland-adams2007" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.7, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, transition: "color .25s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--rust)"} onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>
                                    <GitHubIcon /> View all on GitHub <ArrowUpRight size={12} />
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.1}>
                        <CardDeck />
                    </RevealOnScroll>
                </div>
            </section>


            <section id="about" style={{ padding: "96px 32px", borderTop: "1px solid var(--border)" }}>
                <div style={{ maxWidth: 1152, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 64, alignItems: "center" }}>
                    <RevealOnScroll>
                        <p className="section-num" style={{ marginBottom: 24 }}>04 — About Me</p>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-.02em", marginBottom: 24 }}>
                            Design is a conversation<br />between <em style={{ color: "var(--rust)" }}>intent</em> and form.
                        </h2>
                        <p style={{ fontSize: 13, lineHeight: 2, color: "var(--muted)", marginBottom: 16 }}>
                            Hi, I’m Adams Roland, a Full Stack Developer with 2+ years of hands-on experience. I enjoy building real-world web applications that are simple, functional, and user-focused. I like turning ideas into clean, working systems that solve real problems and get things done.
                        </p>
                        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
                            <a href="#" className="btn"><span>Download CV</span><Download size={13} /></a>
                            <SocialLinks />
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.2}>
                        <OrbitVisual />
                    </RevealOnScroll>
                </div>
            </section>

            <section id="experience" style={{ padding: "96px 32px", borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
                <div style={{ maxWidth: 1152, margin: "0 auto" }}>
                    <RevealOnScroll>
                        <p className="section-num" style={{ marginBottom: 12 }}>05 — Experience</p>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 56 }}>
                            The road<br /><em>so far.</em>
                        </h2>
                    </RevealOnScroll>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "0 64px" }}>
                        <RevealOnScroll delay={0.1}>
                            {[
                                { period: "Dec 2025 — Present", color: "var(--rust)", dotType: "filled", title: "Founder & Full-Stack Developer", sub: "Tixkarios · Full-time", desc: "Founded and built Tixkarios, a digital ticketing platform enabling event organizers to create, manage, and sell tickets online. Handled end-to-end development — frontend, backend, system architecture, and payment integration. Led product decisions, improved UX, and supported early users through onboarding and iteration.", tags: ["React", "Laravel", "Node.js", "MySQL", "Payment Integration"] },
                                { period: "Nov 2025 — Present", color: "var(--rust)", dotType: "filled", title: "Junior Community & Content Specialist", sub: "Apodissi · Part-time", desc: "Managing community engagement and creating content strategies. Developing and implementing content plans across various platforms. Fostering community growth and maintaining brand presence through effective communication and engagement initiatives.", tags: ["Community Management", "Content Strategy", "Social Media", "Brand Engagement"] },
                                { period: "Feb 2025 — Feb 2026", color: "var(--muted)", dotType: "outline", title: "Team Leader", sub: "3jstech", desc: "Led development teams and managed project deliveries. Responsible for code reviews, team coordination, and ensuring best practices across multiple projects. Mentored junior developers and drove technical decisions. Successfully completed tenure after delivering key projects and building strong team processes.", tags: ["Team Leadership", "Project Management", "Code Review", "Mentoring"] },
                                { period: "2024 — Present", color: "var(--muted)", dotType: "outline", title: "University Student", sub: "University of Ilorin", desc: "Pursuing a degree while balancing academic excellence with professional growth. Applying theoretical knowledge to real-world projects and continuously expanding understanding of computer science fundamentals.", tags: ["Computer Science", "Software Engineering", "Data Structures"] },
                                { period: "Feb 2024 — Jun 2024", color: "var(--muted)", dotType: "outline", title: "Full-Stack Development Bootcamp", sub: "MOAT Academy · Certificate Earned", desc: "Intensive bootcamp focusing on modern web development technologies starting February 12th, 2024. Gained hands-on experience with front-end and back-end development, working on real-world projects and learning industry best practices.", tags: ["JavaScript", "React", "Node.js", "PHP", "Laravel", "MySQL"] },
                                { period: "2023", color: "var(--muted)", dotType: "outline", title: "Programming Journey Begins", sub: "Self-Learning & Exploration", desc: "Started the journey into programming and web development through self-study. Discovered a passion for creating digital solutions and built foundational knowledge that prepared for formal training and professional opportunities.", tags: [] },
                            ].map((exp, i, arr) => (
                                <div key={i} style={{ display: "flex", gap: 24 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        {exp.dotType === "filled"
                                            ? <div className="exp-dot" />
                                            : <div style={{ width: 8, height: 8, borderRadius: "50%", border: "1px solid var(--border)", flexShrink: 0, marginTop: 5, background: "var(--bg2)" }} />}
                                        {i < arr.length - 1 && <div className="exp-line" />}
                                    </div>
                                    <div style={{ paddingBottom: 40 }}>
                                        <div style={{ marginBottom: 8 }}>
                                            <span style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: exp.color }}>{exp.period}</span>
                                        </div>
                                        <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, fontWeight: 300, color: "var(--ink)", marginBottom: 4 }}>{exp.title}</h3>
                                        <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 12 }}>{exp.sub}</p>
                                        <p style={{ fontSize: 12, lineHeight: 1.9, color: "var(--muted)" }}>{exp.desc}</p>
                                        {exp.tags.length > 0 && (
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                                                {exp.tags.map((t) => (
                                                    <span key={t} className="tag" style={{ color: "var(--muted)", borderColor: "var(--border)", fontSize: 9 }}>{t}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                <div style={{ border: "1px solid var(--border)", borderRadius: 3, padding: 24, background: "var(--card)" }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                                        <Code2 size={18} color="var(--rust)" />
                                        <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase" }}>Highlight</span>
                                    </div>
                                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, fontWeight: 300, color: "var(--ink)", letterSpacing: "-.02em", lineHeight: 1 }}>8+</div>
                                    <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 6, lineHeight: 1.7 }}>Projects shipped across full-stack apps, SaaS platforms, real-time systems, and ticketing infrastructure.</p>
                                </div>
                                <div style={{ border: "1px solid var(--border)", borderRadius: 3, padding: 24, background: "var(--card)" }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                                        <Zap size={18} color="var(--gold)" />
                                        <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase" }}>Philosophy</span>
                                    </div>
                                    <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 17, fontStyle: "italic", fontWeight: 300, color: "var(--ink)", lineHeight: 1.6 }}>"I learn by shipping. Every project is a classroom."</p>
                                    <p style={{ fontSize: 11, color: "var(--muted)", marginTop: 12 }}>— Adams Roland</p>
                                </div>
                                <TerminalCard />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <section id="skills" style={{ padding: "96px 32px", borderTop: "1px solid var(--border)" }}>
                <div style={{ maxWidth: 1152, margin: "0 auto" }}>
                    <RevealOnScroll>
                        <p className="section-num" style={{ marginBottom: 12 }}>06 — Expertise</p>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 48 }}>
                            What I bring<br />to the <em>table.</em>
                        </h2>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.1}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 40 }}>
                            <div className="skill-card">
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                                    <PenTool size={18} color="var(--rust)" />
                                    <h3 style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink)" }}>Frontend</h3>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {["React", "JavaScript", "Tailwind CSS", "HTML & CSS", "Bootstrap", "Framer Motion", "Vite", "Zustand"].map((t) => (
                                        <span key={t} className="tag" style={{ color: "var(--muted)", borderColor: "var(--border)", fontSize: 9 }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="skill-card">
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                                    <Code2 size={18} color="var(--rust)" />
                                    <h3 style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink)" }}>Backend</h3>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {["PHP", "Laravel", "MySQL", "Node.js", "Express", "Prisma", "Firebase", "Supabase", "PostgreSQL", "REST APIs", "MVC Architecture", "WebSockets", "Composer"].map((t) => (
                                        <span key={t} className="tag" style={{ color: "var(--muted)", borderColor: "var(--border)", fontSize: 9 }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="skill-card">
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                                    <Layers size={18} color="var(--rust)" />
                                    <h3 style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink)" }}>Tools</h3>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {["Git & GitHub", "Docker", "CI/CD Pipeline", "VS Code", "npm", "XAMPP", "Postman"].map((t) => (
                                        <span key={t} className="tag" style={{ color: "var(--muted)", borderColor: "var(--border)", fontSize: 9 }}>{t}</span>
                                    ))}
                                </div>
                                <div style={{ marginTop: 28, padding: 20, border: "1px solid var(--border)", borderRadius: 2, background: "var(--bg)" }}>
                                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                                        <Quote size={14} color="var(--rust)" style={{ flexShrink: 0, marginTop: 3 }} />
                                        <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 14, fontStyle: "italic", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>"Design is not just what it looks like. Design is how it works."</p>
                                    </div>
                                    <p style={{ fontSize: 10, letterSpacing: ".1em", color: "var(--border)", marginTop: 10, textAlign: "right", textTransform: "uppercase" }}>— Steve Jobs</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <section id="contact" style={{ padding: "96px 32px", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
                <div className="orb orb-contact" />
                <div className="contact-grid-accent" />
                <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative", zIndex: 2 }}>
                    <RevealOnScroll>
                        <div style={{ border: "1px solid var(--border)", borderRadius: 3, padding: "clamp(32px, 6vw, 72px)", background: "var(--card)", position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--rust), var(--gold), transparent)" }} />
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 64px)", alignItems: "flex-start", justifyContent: "space-between" }}>
                                <div style={{ flex: "1 1 340px" }}>
                                    <p className="section-num" style={{ marginBottom: 20 }}>06 — Let's Talk</p>
                                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-.025em", marginBottom: 16, color: "var(--ink)" }}>
                                        Let's Build<br /><em style={{ color: "var(--rust)" }}>Something</em>
                                    </h2>
                                    <p style={{ fontSize: 13, lineHeight: 1.9, color: "var(--muted)", maxWidth: 480, marginBottom: 32 }}>
                                        Open to freelance projects, full-time opportunities, and collaborations. If you have an idea or need help bringing your vision to life, let's talk.
                                    </p>
                                    <a href="mailto:adamsrolly7@gmail.com" className="btn">
                                        <Mail size={14} />
                                        <span>Get In Touch</span>
                                        <ArrowUpRight size={14} />
                                    </a>
                                </div>

                                <div style={{ flex: "1 1 260px" }}>
                                    <p style={{ fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 20 }}>Connect Online</p>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                                        {[
                                            { icon: <XIcon />, label: "Twitter", href: "https://x.com/R_coredev" },
                                            { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/roland-adams-045965315" },
                                            { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/roland-adams2007" },
                                            { icon: <Mail size={16} />, label: "Email", href: "mailto:adamsrolly7@gmail.com" },
                                        ].map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                                                rel="noreferrer"
                                                className="connect-card"
                                            >
                                                <span className="connect-card-icon">{item.icon}</span>
                                                <span style={{ fontSize: 11, letterSpacing: ".08em", color: "var(--muted)", marginTop: 10, display: "block" }}>{item.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <footer style={{ padding: "32px", borderTop: "1px solid var(--border)" }}>
                <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", fontSize: 10, color: "var(--muted)", letterSpacing: ".09em", textTransform: "uppercase" }}>
                    <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 16, fontWeight: 300, color: "var(--ink)", letterSpacing: "-.01em", textTransform: "none" }}>Adams Roland</span>
                    <SocialLinks size="30px" />
                    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                        <span>© 2026 — All rights reserved</span>
                        <a href="#" style={{ color: "var(--muted)", textDecoration: "none", letterSpacing: ".12em", transition: "color .25s" }}
                            onMouseEnter={e => e.currentTarget.style.color = "var(--rust)"}
                            onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                        >↑ Back to top</a>
                    </div>
                </div>
            </footer>
        </>
    );
}