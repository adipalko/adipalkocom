"use client";

import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <article
      className="bg-white border-2 rounded-sm w-full transition-shadow duration-200 hover:shadow-lg"
      style={{ borderColor: "#1a237e" }}
    >
      {/* Card Header */}
      <div
        className="px-6 py-4 border-b-2 flex items-center justify-between gap-4"
        style={{ borderColor: "#1a237e" }}
      >
        <h3
          className="text-lg font-bold tracking-tight leading-snug"
          style={{ color: "#1a237e" }}
        >
          {title}
        </h3>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 border-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-150 hover:bg-[#d96a58] hover:border-[#d96a58]"
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              borderColor: "#f08070",
              color: "#ffffff",
              backgroundColor: "#f08070",
            }}
          >
            View
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        )}
      </div>

      {/* Card Body */}
      <div className="px-6 pt-5 pb-4">
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#1a237e", opacity: 0.85 }}
        >
          {description}
        </p>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="px-6 pb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border"
              style={{
                borderColor: "#1a237e",
                color: "#1a237e",
                opacity: 0.6,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
