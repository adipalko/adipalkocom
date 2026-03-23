"use client";

import { useEffect, useState } from "react";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import ProjectCard from "./components/ProjectCard";

const TAGLINE = "I build things that I consider cool with AI.";

const PROJECTS = [
  {
    title: "Hatraot (התראות)",
    description:
      "A data visualization tool for Home Front Command alerts. It breaks down historical alert data by city and hour to find patterns and trends over time — turning raw emergency data into something legible.",
    tags: ["data viz", "civic tech", "israel"],
    link: "/hatraot",
  },
  {
    title: "Movie Jar",
    description:
      "A digital take on the classic movie jar concept — an app to help families or couples finally decide what to watch by pulling from a curated or randomized pool of films. No more 40-minute deliberations.",
    tags: ["family", "entertainment", "decisions"],
    link: "/movie-jar",
  },
  {
    title: "Finance Tracker",
    description:
      "A unified dashboard to track personal assets across different platforms and international borders. Built to provide a single, clear view of a global portfolio without switching between five different apps.",
    tags: ["personal finance", "dashboard", "portfolio"],
    link: "/finance-tracker",
  },
  {
    title: "Feedback App",
    description:
      "A management tool for real-time employee feedback. It helps managers give immediate input and track performance trends over time — built to make the feedback loop feel less like a formality and more like a conversation.",
    tags: ["teams", "management", "productivity"],
    link: "/feedback-app",
  },
  {
    title: "Story Craft",
    description:
      "An AI-powered storytelling engine for kids. Parents can customize characters, settings, and length to generate instant, personalized bedtime stories — no two nights the same.",
    tags: ["kids", "storytelling", "generative ai"],
    link: "/storycraft",
  },
  {
    title: "Yoga Curator",
    description:
      "My very first project. A platform that curates and organizes yoga content by difficulty, style, and focus — built to cut through the noise and help users find the exact practice they need.",
    tags: ["wellness", "curation", "fitness"],
    link: "/yogacurator",
  },
];

function TypewriterTagline() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < TAGLINE.length) {
        setDisplayed(TAGLINE.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="text-sm sm:text-base mt-3 tracking-wide"
      style={{ fontFamily: "'JetBrains Mono', monospace", color: "#1a237e", opacity: 0.75 }}
    >
      {displayed}
      {!done && (
        <span
          className="inline-block w-0.5 h-4 ml-0.5 align-middle"
          style={{
            backgroundColor: "#f08070",
            animation: "blink 1s step-end infinite",
          }}
        />
      )}
    </p>
  );
}

function Divider() {
  return (
    <div className="w-full flex items-center justify-center gap-4 my-0">
      <div className="w-24 border-t-2" style={{ borderColor: "#1a237e", opacity: 0.15 }} />
      <span
        className="text-xs opacity-40 tracking-widest uppercase"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#1a237e" }}
      >
        ◆
      </span>
      <div className="w-24 border-t-2" style={{ borderColor: "#1a237e", opacity: 0.15 }} />
    </div>
  );
}

function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="bg-white border-2 rounded-sm px-6 sm:px-8 py-6 sm:py-8"
      style={{ borderColor: "#1a237e" }}
    >
      <h2
        className="text-xs font-semibold tracking-widest uppercase mb-5"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#f08070" }}
      >
        // A little about me
      </h2>

      <div className="flex flex-col gap-4 text-sm sm:text-base leading-relaxed" style={{ color: "#1a237e", opacity: 0.88 }}>
        <p>
          <span className="font-semibold">TL;DR</span> — I&apos;m a tinkerer with a background in Marketing and Retail who likes to build things.
        </p>

        {expanded && (
          <>
            <p>
              I&apos;ve spent the last 15 years in marketing and retail, mostly figuring out how to scale brands in places like TLV, NYC and London.
            </p>
            <p>
              It&apos;s been a long run of managing Amazon portfolios and global logistics, which eventually sparked a curiosity about the technical &ldquo;how&rdquo; behind the scenes. These days, I&apos;m back in Tel Aviv and spending my free time building things I consider cool. I&apos;m using this site as a personal scratchpad to see how far I can get with AI agents and rapid prototyping — it&apos;s less of a professional portfolio and more of a record of what happens when I start tinkering with a new idea.
            </p>
            <p>
              When I&apos;m away from the screen, I&apos;m usually out for a run or traveling somewhere new.
            </p>
          </>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="self-start text-sm font-semibold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-60"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#f08070",
            textDecorationColor: "#f08070",
          }}
        >
          {expanded ? "← read less" : "read more →"}
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main
      className="min-h-screen py-12 px-4 sm:px-6"
      style={{ backgroundColor: "#efeff1" }}
    >
      <div className="mx-auto w-full max-w-[650px] flex flex-col gap-8">

        {/* ── Header ─────────────────────────────────────────────── */}
        <header className="flex flex-col items-center text-center gap-4 pt-6">
          {/* Profile photo ring */}
          <div
            className="w-24 h-24 rounded-full border-4 overflow-hidden"
            style={{ borderColor: "#f08070" }}
          >
            <img
              src="/adipalkovic3.png"
              alt="Adi Palkovic"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none"
              style={{ color: "#1a237e" }}
            >
              Adi Palkovic
            </h1>
            <TypewriterTagline />
          </div>
        </header>

        <Divider />

        {/* ── Builds ─────────────────────────────────────────────── */}
        <section className="flex flex-col gap-5">
          <h2
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#f08070" }}
          >
            // The Builds
          </h2>

          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>

        <Divider />

        {/* ── About ──────────────────────────────────────────────── */}
        <AboutSection />

        <Divider />

        {/* ── Footer ─────────────────────────────────────────────── */}
        <footer className="flex flex-col items-center gap-5 pb-8">
          {/* Social icons */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/adipalkovic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-60 active:opacity-40"
              style={{ color: "#1a237e" }}
            >
              <Linkedin size={26} strokeWidth={1.8} />
            </a>
            <a
              href="https://github.com/adipalko"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-opacity hover:opacity-60 active:opacity-40"
              style={{ color: "#1a237e" }}
            >
              <Github size={26} strokeWidth={1.8} />
            </a>
            <a
              href="https://x.com/adipalko1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="transition-opacity hover:opacity-60 active:opacity-40"
              style={{ color: "#1a237e" }}
            >
              <Twitter size={26} strokeWidth={1.8} />
            </a>
            <a
              href="mailto:adipalko@gmail.com"
              aria-label="Email"
              className="transition-opacity hover:opacity-60 active:opacity-40"
              style={{ color: "#1a237e" }}
            >
              <Mail size={26} strokeWidth={1.8} />
            </a>
          </div>

        </footer>

      </div>
    </main>
  );
}
