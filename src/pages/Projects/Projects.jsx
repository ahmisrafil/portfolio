// ProjectsShowcase.jsx
// Single-file version — all components, hook, and data combined.
// Requires: npm install framer-motion lucide-react

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, GitHub, Clock, Smartphone, Gauge, ListChecks, Search, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

/* ======================= DATA ======================= */

const filterCategories = [
  'All',
  'React',
  'JavaScript',
  'Full Stack',
  'Educational',
  'UI/UX',
  'API Projects',
];

const projects = [
  {
    id: 'school-management-system',
    title: 'School Management System',
    fileName: 'SchoolManagementSystem.jsx',
    tagline: 'A full operations hub for schools — students, staff, results, and attendance in one dashboard.',
    description:
      "A complete school management system designed to manage students, teachers, results, attendance, and academic activities through a responsive web interface. Built to replace scattered spreadsheets with a single source of truth for daily school operations.",
    fullDescription:
      "This project tackles a real pain point for small-to-mid sized schools: academic data living across spreadsheets, paper registers, and group chats. The system centralizes student records, teacher assignments, attendance logs, and exam results behind a clean, role-aware dashboard. The interface is built mobile-first since many staff access it from phones between classes, with quick-entry forms for attendance and grades designed to be filled in under a minute per class.",
    thumbnail: 'https://placehold.co/1200x800/131826/5EEAD4?text=School+Management+System&font=jetbrains-mono',
    screenshots: [
      'https://placehold.co/1280x800/131826/5EEAD4?text=Dashboard+Overview&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/A78BFA?text=Student+Records&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/5EEAD4?text=Attendance+Tracker&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/A78BFA?text=Result+Management&font=jetbrains-mono',
    ],
    liveUrl: 'https://6669df80efa1090b0f8e19ce--boisterous-lolly-9a99c7.netlify.app/',
    githubUrl: 'https://github.com/ahmisrafil/school-management-system',
    status: 'Live',
    featured: true,
    categories: ['React', 'JavaScript', 'Full Stack', 'Educational'],
    techStack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Student management with searchable, sortable records',
      'Teacher management and class assignment',
      'Attendance tracking with daily quick-entry view',
      'Result management with auto-calculated grades',
      'Fully responsive dashboard interface',
      'Role-based navigation for admin, teacher, and student views',
    ],
    highlights: [
      'Designed a reusable data-table component that powers students, teachers, and results views without duplicated logic',
      'Built a mobile-first attendance flow that lets a teacher mark an entire class in under a minute',
      'Structured state with React Context to avoid prop-drilling across deeply nested dashboard routes',
    ],
    challenges: [
      {
        problem: 'Managing consistent state across deeply nested dashboard routes (students, results, attendance) without prop-drilling.',
        solution: 'Introduced a centralized React Context with reducer-style actions, giving every nested route predictable read/write access to shared academic data.',
      },
      {
        problem: 'Attendance entry was slow when done row-by-row for large classes.',
        solution: 'Built a single-screen grid view with keyboard and tap shortcuts, cutting per-class attendance entry time significantly.',
      },
      {
        problem: 'Result tables needed to stay readable on small screens without losing columns.',
        solution: 'Implemented a responsive table pattern that collapses into stacked cards below the tablet breakpoint while preserving sort and filter behavior.',
      },
    ],
    architecture: {
      overview:
        'A component-driven single-page application built with React and Vite, structured around feature folders (students, teachers, attendance, results). Shared UI primitives (tables, modals, forms) live in a common components layer and are styled with utility-first CSS.',
      layers: [
        { name: 'UI Layer', detail: 'React functional components with Hooks; shared primitives for tables, cards, and modals.' },
        { name: 'State Layer', detail: 'React Context + useReducer for academic data; local component state for UI-only concerns.' },
        { name: 'Data Layer', detail: 'Structured mock/local data modules simulating REST responses, ready to be swapped for a live API.' },
        { name: 'Styling', detail: 'Utility-first CSS with a small custom design-token layer for spacing and color consistency.' },
      ],
    },
    metrics: {
      duration: '3 weeks',
      featuresCount: 6,
      responsive: true,
      performanceScore: 92,
    },
  },
  {
    id: 'task-flow-board',
    title: 'TaskFlow — Kanban Productivity Board',
    fileName: 'TaskFlowBoard.jsx',
    tagline: 'Drag-and-drop task board with persistent boards, labels, and due-date reminders.',
    description:
      'A Trello-style productivity board for organizing personal and team tasks with drag-and-drop columns, labels, and deadlines.',
    fullDescription:
      'TaskFlow is a kanban-style productivity app that lets users create boards, add columns for workflow stages, and drag cards between them. It focuses on speed: every interaction (creating a card, moving it, adding a label) updates instantly with optimistic UI, while data is persisted so boards survive a refresh.',
    thumbnail: 'https://placehold.co/1200x800/131826/A78BFA?text=TaskFlow+Board&font=jetbrains-mono',
    screenshots: [
      'https://placehold.co/1280x800/131826/A78BFA?text=Board+View&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/5EEAD4?text=Card+Details&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/A78BFA?text=Label+Filters&font=jetbrains-mono',
    ],
    liveUrl: 'https://example.com/taskflow-demo',
    githubUrl: 'https://github.com/ahmisrafil/taskflow-board',
    status: 'Live',
    featured: true,
    categories: ['React', 'Full Stack', 'UI/UX'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'Drag-and-drop cards between workflow columns',
      'Custom labels and due-date badges',
      'Optimistic UI updates with background sync',
      'Per-board activity log',
      'Keyboard shortcuts for power users',
    ],
    highlights: [
      'Implemented drag-and-drop with accessible keyboard alternatives for non-mouse users',
      'Built an optimistic-update layer so the board feels instant even on slow connections',
      'Designed a normalized data model to keep board, column, and card updates O(1)',
    ],
    challenges: [
      {
        problem: 'Drag-and-drop reordering caused visible lag once boards had 50+ cards.',
        solution: 'Normalized board state into flat lookup tables keyed by id, so reordering only touches array indices instead of deeply nested objects.',
      },
      {
        problem: 'Users on flaky connections saw UI "snap back" after failed saves.',
        solution: 'Added an optimistic update queue with retry and a subtle inline indicator, so failures resolve quietly instead of jarring the UI.',
      },
    ],
    architecture: {
      overview:
        'A React + TypeScript SPA backed by a small Node/Express API and MongoDB. Board state is normalized client-side and synced to the API in the background.',
      layers: [
        { name: 'UI Layer', detail: 'React + TypeScript, Tailwind CSS, drag-and-drop via a lightweight custom hook.' },
        { name: 'State Layer', detail: 'Normalized client store (boards/columns/cards by id) with an optimistic sync queue.' },
        { name: 'API Layer', detail: 'Node.js + Express REST endpoints for boards, columns, and cards.' },
        { name: 'Database', detail: 'MongoDB with schema-light documents mirroring the normalized client shape.' },
      ],
    },
    metrics: {
      duration: '4 weeks',
      featuresCount: 5,
      responsive: true,
      performanceScore: 95,
    },
  },
  {
    id: 'weather-now',
    title: 'WeatherNow',
    fileName: 'WeatherNow.jsx',
    tagline: 'A fast, minimal weather lookup app with saved locations and hourly forecasts.',
    description:
      'A clean weather dashboard pulling live data from a public weather API, with saved locations and animated condition icons.',
    fullDescription:
      'WeatherNow focuses on doing one thing well: showing current conditions and an hourly forecast for any city, fast. Users can save favorite locations for quick switching, and the UI adapts its color theme based on time of day and weather conditions at the selected location.',
    thumbnail: 'https://placehold.co/1200x800/131826/5EEAD4?text=WeatherNow&font=jetbrains-mono',
    screenshots: [
      'https://placehold.co/1280x800/131826/5EEAD4?text=Current+Conditions&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/A78BFA?text=Hourly+Forecast&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/5EEAD4?text=Saved+Locations&font=jetbrains-mono',
    ],
    liveUrl: 'https://example.com/weathernow-demo',
    githubUrl: 'https://github.com/ahmisrafil/weather-now',
    status: 'Live',
    featured: true,
    categories: ['React', 'JavaScript', 'API Projects', 'UI/UX'],
    techStack: ['React', 'JavaScript', 'CSS3', 'REST API'],
    features: [
      'Live current-condition and hourly forecast data',
      'Saved locations with quick switching',
      'Dynamic theming based on time of day and conditions',
      'Graceful loading and error states',
      'Geolocation-based default city',
    ],
    highlights: [
      'Built a small caching layer to avoid redundant API calls when switching between saved cities',
      'Designed dynamic theme tokens that shift the palette based on weather condition and time of day',
      'Handled API rate limits gracefully with a request queue and stale-while-revalidate pattern',
    ],
    challenges: [
      {
        problem: 'The free weather API tier had strict rate limits, causing errors on rapid location switching.',
        solution: 'Added a stale-while-revalidate cache keyed by location, so switching back to a recent city is instant and counts against the rate limit far less.',
      },
      {
        problem: 'Dynamic theming based on conditions risked poor contrast in some combinations.',
        solution: 'Defined a constrained set of theme tokens with pre-checked contrast ratios, so any condition/time combination stays accessible.',
      },
    ],
    architecture: {
      overview:
        'A React SPA that consumes a public REST weather API directly from the client, with a thin caching and theming layer.',
      layers: [
        { name: 'UI Layer', detail: 'React functional components, CSS custom properties for dynamic theming.' },
        { name: 'Data Layer', detail: 'Fetch-based API client with a stale-while-revalidate cache.' },
        { name: 'Persistence', detail: 'Saved locations stored client-side and rehydrated on load.' },
      ],
    },
    metrics: {
      duration: '1.5 weeks',
      featuresCount: 5,
      responsive: true,
      performanceScore: 97,
    },
  },
  {
    id: 'devblog-cms',
    title: 'DevBlog — Markdown Blogging Platform',
    fileName: 'DevBlogCMS.jsx',
    tagline: 'A full-stack blogging platform with Markdown authoring, tags, and a public API.',
    description:
      'A blogging platform where authors write in Markdown, manage posts through a dashboard, and readers browse via a fast public-facing site backed by a REST API.',
    fullDescription:
      'DevBlog pairs a Markdown-first authoring experience with a public reading site. Authors get a distraction-free editor with live preview, draft/publish states, and tag management. The public site is statically rendered for speed and consumes the same REST API that powers the dashboard.',
    thumbnail: 'https://placehold.co/1200x800/131826/A78BFA?text=DevBlog+CMS&font=jetbrains-mono',
    screenshots: [
      'https://placehold.co/1280x800/131826/A78BFA?text=Editor+View&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/5EEAD4?text=Public+Blog&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/A78BFA?text=Tag+Management&font=jetbrains-mono',
      'https://placehold.co/1280x800/131826/5EEAD4?text=Post+Analytics&font=jetbrains-mono',
    ],
    liveUrl: 'https://example.com/devblog-demo',
    githubUrl: 'https://github.com/ahmisrafil/devblog-cms',
    status: 'In Progress',
    featured: true,
    categories: ['Full Stack', 'JavaScript', 'API Projects'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Markdown editor with live preview',
      'Draft and published post states',
      'Tag-based organization and filtering',
      'Public REST API for posts and tags',
      'Author dashboard with basic view analytics',
    ],
    highlights: [
      'Built a Markdown pipeline with sanitized HTML output to safely render user content',
      'Designed a REST API shared by both the dashboard and the public site to avoid duplicated logic',
      'Implemented optimistic draft autosave so authors never lose work mid-edit',
    ],
    challenges: [
      {
        problem: 'Rendering user-authored Markdown directly as HTML risked XSS vulnerabilities.',
        solution: 'Added a sanitization step in the Markdown-to-HTML pipeline that strips disallowed tags and attributes before rendering.',
      },
      {
        problem: 'Authors occasionally lost long-form drafts on accidental tab close.',
        solution: 'Added debounced autosave to the API every few seconds while editing, with a visible "saved" indicator.',
      },
    ],
    architecture: {
      overview:
        'A Node/Express REST API backed by MongoDB serves both an authoring dashboard and a public-facing React site, sharing a single source of truth for posts and tags.',
      layers: [
        { name: 'UI Layer', detail: 'React + Tailwind CSS for both dashboard and public site, sharing a component library.' },
        { name: 'API Layer', detail: 'Node.js + Express REST endpoints for posts, tags, and auth.' },
        { name: 'Database', detail: 'MongoDB collections for posts, tags, and authors.' },
        { name: 'Content Pipeline', detail: 'Markdown parsing with sanitization before storage and render.' },
      ],
    },
    metrics: {
      duration: '5 weeks (ongoing)',
      featuresCount: 5,
      responsive: true,
      performanceScore: 90,
    },
  },
];

const stats = [
  { id: 'projects', label: 'Total Projects', value: 12, suffix: '+' },
  { id: 'websites', label: 'Websites Built', value: 8, suffix: '' },
  { id: 'technologies', label: 'Technologies Used', value: 15, suffix: '+' },
  { id: 'repos', label: 'GitHub Repositories', value: 20, suffix: '+' },
  { id: 'years', label: 'Years of Learning', value: 2, suffix: '+' },
];

const timeline = [
  {
    id: 'html-css',
    title: 'Started learning HTML & CSS',
    description: 'Began building static pages, learning layout fundamentals — box model, flexbox, and responsive basics.',
    date: 'Year 1 · Foundations',
  },
  {
    id: 'javascript',
    title: 'Learned JavaScript',
    description: 'Moved into DOM manipulation, events, and async fundamentals — turning static pages into interactive ones.',
    date: 'Year 1 · Core Skills',
  },
  {
    id: 'first-react',
    title: 'Built first React project',
    description: 'Learned component-based architecture, Hooks, and state management while rebuilding earlier static projects in React.',
    date: 'Year 1–2 · React',
  },
  {
    id: 'management-systems',
    title: 'Developed management systems',
    description: 'Built multi-feature dashboards like the School Management System — real CRUD interfaces with routing, forms, and tables.',
    date: 'Year 2 · Full Stack',
  },
  {
    id: 'portfolio',
    title: 'Created this portfolio website',
    description: 'Brought everything together into a single, polished showcase of projects, skills, and process.',
    date: 'Year 2 · Present',
  },
];

/* ======================= HOOK ======================= */

/**
 * Animates a number from 0 to `end` once the referenced element enters the viewport.
 * Returns [ref, value] — attach ref to the element you want to trigger on.
 */
export function useCountUp(end, duration = 1500) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    let frame;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration]);

  return [ref, value];
}

/* ======================= TechBadge ======================= */

/**
 * Small pill badge for a technology name.
 * `variant="solid"` is used inside dark editor-style cards;
 * `variant="outline"` is used on lighter surfaces (e.g. modal).
 */
function TechBadge({ label, variant = 'solid' }) {
  const base =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-mono tracking-wide transition-colors duration-200';

  const styles =
    variant === 'solid'
      ? 'bg-white/5 text-cyan-200 border border-white/10 hover:border-cyan-300/40 hover:text-cyan-100'
      : 'bg-cyan-400/10 text-cyan-700 dark:text-cyan-200 border border-cyan-400/20';

  return <span className={`${base} ${styles}`}>{label}</span>;
}

/* ======================= StatusBadge ======================= */

const STATUS_STYLES = {
  Live: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
  'In Progress': 'bg-amber-400/10 text-amber-300 border-amber-400/30',
  Archived: 'bg-slate-400/10 text-slate-300 border-slate-400/30',
};

function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.Archived;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider ${style}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === 'Live'
            ? 'bg-emerald-400 animate-pulse'
            : status === 'In Progress'
            ? 'bg-amber-400'
            : 'bg-slate-400'
        }`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

/* ======================= ParticleField ======================= */

/**
 * Subtle floating "code particle" field used as ambient background texture.
 * Purely decorative — aria-hidden, pointer-events disabled.
 */
const SYMBOLS = ['{ }', '</>', '0 1', '=>', '#', '( )', '[ ]'];

function ParticleField({ count = 14 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: SYMBOLS[i % SYMBOLS.length],
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 12 + Math.random() * 18,
      duration: 18 + Math.random() * 14,
      delay: Math.random() * -20,
      opacity: 0.04 + Math.random() * 0.07,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute font-mono select-none text-cyan-300"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 12, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {p.symbol}
        </motion.span>
      ))}
    </div>
  );
}

/* ======================= FeaturedProjectCard ======================= */

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Large showcase card styled as a code editor window.
 * `reverse` flips the image/content layout (alternating sections).
 */
function FeaturedProjectCard({ project, reverse = false, onOpenDetails }) {
  const {
    title,
    fileName,
    tagline,
    thumbnail,
    liveUrl,
    githubUrl,
    status,
    techStack,
    features,
    highlights,
    metrics,
  } = project;

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Gradient border glow */}
      <div
        className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400/40 via-violet-400/30 to-cyan-400/40 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div
        className={`relative grid gap-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0F1420]/80 backdrop-blur-xl shadow-2xl shadow-black/40 lg:grid-cols-2 ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Code editor "window" containing the screenshot */}
        <div className="relative border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
          {/* Tab bar */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#0B0F19] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
            <span className="ml-3 truncate font-mono text-xs text-slate-400">
              {fileName}
            </span>
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0F19]">
            <img
              src={thumbnail}
              alt={`Screenshot of the ${title} application interface`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <StatusBadge status={status} />
            <span className="font-mono text-xs text-slate-500">
              {metrics.duration}
            </span>
          </div>

          <div>
            <h3
              id={`project-title-${project.id}`}
              className="font-display text-2xl font-semibold text-slate-50 sm:text-3xl"
            >
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
              {tagline}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2" aria-label="Technologies used">
            {techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>

          {/* Key features */}
          <div>
            <h4 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500">
              <ListChecks className="h-3.5 w-3.5" aria-hidden="true" />
              Key features
            </h4>
            <ul className="space-y-1.5">
              {features.slice(0, 4).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Development highlight */}
          {highlights?.[0] && (
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <h4 className="mb-1.5 font-mono text-xs uppercase tracking-wider text-violet-300">
                Development highlight
              </h4>
              <p className="text-sm leading-relaxed text-slate-400">{highlights[0]}</p>
            </div>
          )}

          {/* Metrics row */}
          <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-4 text-center">
            <div>
              <Clock className="mx-auto mb-1 h-4 w-4 text-cyan-300" aria-hidden="true" />
              <p className="font-mono text-xs text-slate-400">{metrics.duration}</p>
            </div>
            <div>
              <Smartphone className="mx-auto mb-1 h-4 w-4 text-cyan-300" aria-hidden="true" />
              <p className="font-mono text-xs text-slate-400">
                {metrics.responsive ? 'Responsive' : 'Desktop'}
              </p>
            </div>
            <div>
              <Gauge className="mx-auto mb-1 h-4 w-4 text-cyan-300" aria-hidden="true" />
              <p className="font-mono text-xs text-slate-400">{metrics.performanceScore}/100</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-[#0B0F19] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <GitHub className="h-4 w-4" aria-hidden="true" />
              Source Code
            </a>
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="ml-auto inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-cyan-300 underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              aria-haspopup="dialog"
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ======================= GalleryCard ======================= */

const galleryCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.98 },
};

function GalleryCard({ project, onOpenDetails }) {
  const { title, description, thumbnail, liveUrl, githubUrl, status, techStack } = project;

  return (
    <motion.article
      layout
      variants={galleryCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors duration-300 hover:border-cyan-300/30"
    >
      <button
        type="button"
        onClick={() => onOpenDetails(project)}
        className="text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        aria-haspopup="dialog"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0F19]">
          <img
            src={thumbnail}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="absolute right-3 top-3">
            <StatusBadge status={status} />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center bg-[#0B0F19]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          >
            <span className="rounded-full border border-cyan-300/40 px-4 py-1.5 font-mono text-xs text-cyan-200">
              View details →
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-slate-50">{title}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-slate-400">{description}</p>
        </div>
      </button>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/5 px-5 py-4">
        <div className="flex flex-wrap gap-1.5">
          {techStack.slice(0, 3).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
          {techStack.length > 3 && (
            <span className="px-1 font-mono text-xs text-slate-500">
              +{techStack.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live demo for ${title}`}
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open source code for ${title}`}
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <GitHub className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ======================= GalleryFilterBar ======================= */

function GalleryFilterBar({
  categories,
  activeFilter,
  onFilterChange,
  searchTerm,
  onSearchChange,
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Filter pills */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onFilterChange(category)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                isActive
                  ? 'border-cyan-300/60 bg-cyan-300/10 text-cyan-200'
                  : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative w-full sm:w-64">
        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
          aria-hidden="true"
        />
        <input
          id="project-search"
          type="search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
        />
      </div>
    </div>
  );
}

/* ======================= ProjectModal ======================= */

function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Reset gallery index whenever a new project opens
  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  // Focus management + Escape to close + scroll lock
  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Basic focus trap
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a, button, input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  const {
    id,
    title,
    fullDescription,
    screenshots,
    liveUrl,
    githubUrl,
    status,
    techStack,
    challenges,
    architecture,
    metrics,
  } = project;

  const showPrev = () =>
    setActiveImage((i) => (i - 1 + screenshots.length) % screenshots.length);
  const showNext = () => setActiveImage((i) => (i + 1) % screenshots.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#05070D]/80 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Dialog */}
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${id}`}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0F1420] shadow-2xl shadow-black/50"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-white/10 bg-[#0F1420]/95 px-6 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <h2
                id={`modal-title-${id}`}
                className="font-display text-xl font-semibold text-slate-50 sm:text-2xl"
              >
                {title}
              </h2>
              <StatusBadge status={status} />
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            {/* Screenshot gallery */}
            <div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0B0F19]">
                <img
                  src={screenshots[activeImage]}
                  alt={`Screenshot ${activeImage + 1} of ${screenshots.length} for ${title}`}
                  className="h-full w-full object-cover"
                />
                {screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Previous screenshot"
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0B0F19]/70 p-2 text-slate-200 transition-colors hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next screenshot"
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0B0F19]/70 p-2 text-slate-200 transition-colors hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              {screenshots.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Screenshot thumbnails">
                  {screenshots.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      role="tab"
                      aria-selected={i === activeImage}
                      aria-label={`Show screenshot ${i + 1}`}
                      onClick={() => setActiveImage(i)}
                      className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                        i === activeImage ? 'border-cyan-300' : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Full description */}
            <section aria-labelledby={`overview-${id}`}>
              <h3 id={`overview-${id}`} className="mb-2 font-mono text-xs uppercase tracking-wider text-cyan-300">
                Overview
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{fullDescription}</p>
            </section>

            {/* Tech stack */}
            <section aria-labelledby={`stack-${id}`}>
              <h3 id={`stack-${id}`} className="mb-2 font-mono text-xs uppercase tracking-wider text-cyan-300">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </section>

            {/* Challenges & solutions */}
            <section aria-labelledby={`challenges-${id}`}>
              <h3 id={`challenges-${id}`} className="mb-3 font-mono text-xs uppercase tracking-wider text-cyan-300">
                Challenges &amp; solutions
              </h3>
              <div className="space-y-4">
                {challenges.map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-sm font-medium text-slate-200">
                      <span className="text-rose-300">Challenge: </span>
                      {item.problem}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      <span className="text-emerald-300">Solution: </span>
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture overview */}
            <section aria-labelledby={`architecture-${id}`}>
              <h3 id={`architecture-${id}`} className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-300">
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                Architecture overview
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{architecture.overview}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {architecture.layers.map((layer) => (
                  <div key={layer.name} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <p className="font-mono text-xs font-semibold text-violet-300">{layer.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{layer.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Metrics */}
            <section aria-labelledby={`metrics-${id}`}>
              <h3 id={`metrics-${id}`} className="mb-3 font-mono text-xs uppercase tracking-wider text-cyan-300">
                Project metrics
              </h3>
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Duration</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-200">{metrics.duration}</dd>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Features</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-200">{metrics.featuresCount}</dd>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Responsive</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-200">
                    {metrics.responsive ? 'Yes' : 'Desktop only'}
                  </dd>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Performance</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-200">{metrics.performanceScore}/100</dd>
                </div>
              </dl>
            </section>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 border-t border-white/5 pt-6">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-[#0B0F19] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <GitHub className="h-4 w-4" aria-hidden="true" />
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ======================= StatsSection ======================= */

function StatCounter({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md"
    >
      <p className="font-display text-3xl font-bold text-cyan-200 sm:text-4xl">
        {count}
        <span className="text-violet-300">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </div>
  );
}

function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 id="stats-heading" className="font-display text-2xl font-semibold text-slate-50 sm:text-3xl">
            By the numbers
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            A snapshot of the work behind this portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= TimelineSection ======================= */

function TimelineSection() {
  return (
    <section aria-labelledby="timeline-heading" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 id="timeline-heading" className="font-display text-2xl font-semibold text-slate-50 sm:text-3xl">
            Development journey
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            From first lines of HTML to building full-stack systems.
          </p>
        </motion.div>

        <ol className="relative space-y-10 border-l border-white/10 pl-8">
          {timeline.map((entry, i) => (
            <motion.li
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span
                className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan-300 bg-[#0B0F19]"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
              </span>

              <p className="font-mono text-xs uppercase tracking-wider text-violet-300">
                {entry.date}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-slate-50">
                {entry.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {entry.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ======================= ProjectGallery ======================= */

function ProjectGallery({ onOpenDetails }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' || project.categories.includes(activeFilter);

      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        term === '' ||
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(term));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <section aria-labelledby="gallery-heading" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 id="gallery-heading" className="font-display text-2xl font-semibold text-slate-50 sm:text-3xl">
            All projects
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Browse everything, filtered by category or technology.
          </p>
        </motion.div>

        <div className="mb-8">
          <GalleryFilterBar
            categories={filterCategories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <GalleryCard key={project.id} project={project} onOpenDetails={onOpenDetails} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div
            role="status"
            className="rounded-xl border border-white/10 bg-white/[0.02] py-16 text-center"
          >
            <p className="font-mono text-sm text-slate-400">
              No projects match "{searchTerm}" in {activeFilter}.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Try a different search term or filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ======================= FeaturedProjects ======================= */

function FeaturedProjects({ onOpenDetails }) {
  const featured = projects.filter((p) => p.featured);

  return (
    <section aria-labelledby="featured-heading" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
            Featured work
          </p>
          <h2 id="featured-heading" className="mt-3 font-display text-3xl font-semibold text-slate-50 sm:text-4xl">
            Things I've built
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
            A closer look at a few projects — what they do, how they're built,
            and the problems they solve.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {featured.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= MAIN EXPORT ======================= */

/**
 * Top-level "Projects" section for the portfolio.
 * Composes: hero intro -> featured projects -> stats -> gallery -> timeline.
 * Place this inside your main page, e.g. <ProjectsShowcase /> after the Hero/About sections.
 */
export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  // JSON-LD structured data for SEO (CreativeWork list of projects)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'CreativeWork',
      position: index + 1,
      name: project.title,
      description: project.description,
      url: project.liveUrl,
      keywords: project.techStack.join(', '),
    })),
  };

  return (
    <section
      id="projects"
      aria-label="Projects showcase"
      className="relative overflow-hidden bg-[#0B0F19] text-slate-100"
    >
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ParticleField count={16} />

      {/* Section intro */}
      <div className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300"
          >
            // projects
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 font-display text-4xl font-bold text-slate-50 sm:text-5xl"
          >
            Real applications, built end to end
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg"
          >
            From dashboards that manage hundreds of student records to small
            tools that solve one problem well — here's what I've shipped,
            how I built it, and the decisions behind it.
          </motion.p>
        </div>
      </div>

      <FeaturedProjects onOpenDetails={setSelectedProject} />
      <StatsSection />
      <ProjectGallery onOpenDetails={setSelectedProject} />
      <TimelineSection />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
