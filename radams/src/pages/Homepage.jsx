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
                                        width: 32,
                                        height: 32,
                                        borderRadius: 6,
                                        background: "#61DAFB12",
                                        border: "1px solid #61DAFB30",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="-11.5 -10.23174 23 20.46348"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle r="2.05" fill="#61DAFB" />
                                        <g stroke="#61DAFB" strokeWidth="1" fill="none">
                                            <ellipse rx="11" ry="4.2" />
                                            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                        </g>
                                    </svg>
                                </div>

                                <div
                                    title="PHP"
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 6,
                                        background: "#777BB312",
                                        border: "1px solid #777BB330",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg
                                        width="22"
                                        height="14"
                                        viewBox="0 0 128 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse cx="64" cy="32" rx="63" ry="31" fill="#777BB3" />
                                        <text
                                            x="64"
                                            y="39"
                                            textAnchor="middle"
                                            fontSize="24"
                                            fontFamily="Arial, sans-serif"
                                            fontWeight="bold"
                                            fill="white"
                                            letterSpacing="2"
                                        >
                                            PHP
                                        </text>
                                    </svg>
                                </div>

                                <div
                                    title="Laravel"
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 6,
                                        background: "#FF2D2012",
                                        border: "1px solid #FF2D2030",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 50 52"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#FF2D20"
                                            d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302v10.509a.8.8 0 0 1-.402.694l-19.223 11.066a.813.813 0 0 1-.093.039.816.816 0 0 1-.246.04.816.816 0 0 1-.246-.04.813.813 0 0 1-.093-.039L.402 40.942A.8.8 0 0 1 0 40.248V8.578a.809.809 0 0 1 .028-.209c.013-.049.036-.094.059-.138.014-.028.014-.057.033-.084L.192 8.1l.012-.012c.02-.028.043-.056.065-.08.027-.027.053-.05.08-.074.02-.019.037-.04.059-.054l.059-.03L20.684.142a.804.804 0 0 1 .636 0l20.21 9.274h.029c.02.014.039.03.059.054.028.024.053.047.08.074l.066.08.011.012.072.147c.02.027.02.056.033.084.024.044.047.089.059.138zM25 1.788l-8.972 4.117 20.19 9.246 8.97-4.118L25 1.789zM15.405 7.217l-8.966 4.116 20.187 9.245 8.968-4.118-20.189-9.243zM1.6 10.187v30.48L20.8 50.614V20.133L1.6 10.187zm23.4 40.427l18.4-10.593V9.544l-8.4 3.849v10.512a.8.8 0 0 1-.402.694L25 29.903v20.71z"
                                        />
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