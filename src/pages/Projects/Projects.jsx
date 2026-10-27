
import React, { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import petcharm from "../../assets/PetCharm-Home.png";
import {
  FaExternalLinkAlt,
  FaLayerGroup,
  FaSearch,
  FaLaptopCode,
  FaGithub,
  FaTimes,
} from "react-icons/fa";

// =====================================================
// PROJECT DATA
// Add your screenshots to: public/projects/
// =====================================================

const projects = [
  {
    id: 1,
    title: "School Management Website",
    category: "Websites",
    description:
      "A school management website designed to present school information and provide visitors with a convenient online experience.",
    image: { src: petcharm, alt: "School Management Website" },
    liveLink:
      "https://6669df80efa1090b0f8e19ce--boisterous-lolly-9a99c7.netlify.app/",
    githubLink: "",
    tags: ["React", "Web Development", "Responsive UI"],
    number: "01",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: 2,
    title: "Tech Event Management",
    category: "Applications",
    description:
      "A technology event website created to showcase event-related information through a modern web interface.",
    image: "/projects/tech-event.png",
    liveLink: "https://tech-event-management-22ab1.web.app/",
    githubLink: "",
    tags: ["React", "Event Management", "Web Application"],
    number: "02",
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    id: 3,
    title: "Electro Brand",
    category: "Websites",
    description:
      "A modern electronics brand website with a product-focused layout and a clean browsing experience.",
    image: "/projects/electro-brand.png",
    liveLink: "https://electro-brand-client.web.app/",
    githubLink: "",
    tags: ["React", "Product Showcase", "Web Design"],
    number: "03",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
];

// =====================================================
// PROJECT CARD
// =====================================================

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const showPreview = () => setIsHovered(true);
  const hidePreview = () => setIsHovered(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      onHoverStart={showPreview}
      onHoverEnd={hidePreview}
      onFocus={showPreview}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          hidePreview();
        }
      }}
      className="group relative flex h-full flex-col overflow-hidden
                 rounded-3xl border border-white/10 bg-[#10111b]
                 transition-colors duration-300
                 hover:border-indigo-400/40"
    >
      {/* Screenshot / project preview */}
      <div
        className={`relative aspect-[16/10] overflow-hidden
                    bg-gradient-to-br ${project.accent}`}
      >
        {/* Default project thumbnail */}
        {!imageFailed ? (
          <img
            src={project.image}
            alt={`${project.title} homepage`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-top
                       transition-transform duration-700
                       group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full flex-col items-center
                          justify-center gap-4 text-white/70">
            <FaLaptopCode className="text-5xl" />
            <span className="text-sm font-medium">
              Project Preview
            </span>
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t
                        from-[#10111b]/90 via-transparent
                        to-black/10" />

        {/* Project number */}
        <span className="absolute left-5 top-5 rounded-full
                         border border-white/15 bg-black/40
                         px-3 py-1.5 text-xs tracking-widest
                         text-white backdrop-blur-md">
          PROJECT {project.number}
        </span>

        {/* Category */}
        <span className="absolute bottom-4 left-5 rounded-full
                         border border-white/15 bg-black/40
                         px-3 py-1.5 text-xs text-gray-200
                         backdrop-blur-md">
          {project.category}
        </span>

        {/* Hover screenshot preview */}
        <AnimatePresence>
          {isHovered && !imageFailed && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-10 overflow-hidden
                         bg-[#090a12]"
            >
              {/* Browser-style header */}
              <div className="absolute inset-x-0 top-0 z-20
                              flex items-center gap-2
                              border-b border-white/10
                              bg-[#151621]/95 px-3 py-3
                              backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span className="ml-2 truncate text-xs text-gray-300">
                  {project.title}
                </span>
              </div>

              {/* Homepage screenshot */}
              <img
                src={project.image}
                alt={`${project.title} website screenshot preview`}
                className="h-full w-full object-cover object-top
                           pt-10"
              />

              {/* Preview action */}
              <div className="absolute inset-x-0 bottom-0 z-20
                              flex items-center justify-between
                              gap-3 bg-gradient-to-t
                              from-black/95 to-transparent
                              px-4 pb-4 pt-10">
                <span className="text-xs font-medium text-white/80">
                  Homepage Preview
                </span>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex shrink-0 items-center gap-2
                             rounded-lg bg-indigo-500 px-3 py-2
                             text-xs font-semibold text-white
                             transition-colors hover:bg-indigo-400"
                >
                  Visit Site <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile preview toggle */}
        <button
          type="button"
          onClick={() => setIsHovered((value) => !value)}
          aria-label={
            isHovered
              ? `Hide ${project.title} preview`
              : `Show ${project.title} preview`
          }
          className="absolute right-4 top-4 z-30
                     rounded-full border border-white/20
                     bg-black/60 p-2.5 text-white
                     backdrop-blur-md transition
                     hover:bg-indigo-500"
        >
          {isHovered ? <FaTimes /> : <FaSearch />}
        </button>
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug text-white
                         transition-colors group-hover:text-indigo-300
                         sm:text-2xl">
            {project.title}
          </h3>

          <FaLayerGroup className="mt-1 shrink-0 text-xl text-indigo-400" />
        </div>

        <p className="mb-5 flex-1 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technology / category tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10
                         bg-white/[0.04] px-3 py-1.5
                         text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 border-t
                        border-white/10 pt-5">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center
                       justify-center gap-2 rounded-xl
                       bg-indigo-500 px-4 py-3 text-sm
                       font-semibold text-white transition
                       hover:bg-indigo-400"
          >
            Live Demo <FaExternalLinkAlt />
          </a>

          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code`}
              className="inline-flex items-center justify-center
                         gap-2 rounded-xl border border-white/10
                         px-4 py-3 text-sm text-gray-200
                         transition hover:border-white/30
                         hover:bg-white/5"
            >
              <FaGithub /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-2
                             rounded-xl border border-white/10
                             px-4 py-3 text-sm text-gray-500">
              <FaGithub /> Code unavailable
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// =====================================================
// MAIN PROJECTS SECTION
// =====================================================

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = ["All Projects", "Websites", "Applications"];

  const filteredProjects = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All Projects" ||
        project.category === activeFilter;

      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search)
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#090a12]
                 px-5 py-20 text-white sm:px-8 sm:py-24
                 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40
                   h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20
                   h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2
                           rounded-full border border-indigo-400/20
                           bg-indigo-500/10 px-4 py-2 text-xs
                           font-semibold uppercase tracking-[0.2em]
                           text-indigo-300">
            <FaLayerGroup /> My Portfolio
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight
                         text-white sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400
                             to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm
                        leading-7 text-gray-400 sm:text-base">
            A selection of projects that showcase my experience
            in web development, responsive interfaces, and
            building useful digital experiences.
          </p>
        </motion.div>

        {/* Search and filters */}
        <div className="mb-10 flex flex-col items-stretch
                        justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl px-4 py-2.5 text-sm
                            font-medium transition ${
                  activeFilter === filter
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "border border-white/10 bg-white/[0.03] text-gray-400 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-3 rounded-xl
                            border border-white/10 bg-white/[0.03]
                            px-4 py-3 md:w-72">
            <FaSearch className="shrink-0 text-gray-500" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search projects..."
              aria-label="Search projects"
              className="w-full bg-transparent text-sm
                         text-white outline-none
                         placeholder:text-gray-500"
            />
          </label>
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2
                     lg:grid-cols-3 lg:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty search state */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <FaSearch className="mx-auto mb-4 text-3xl text-gray-600" />
            <h3 className="text-xl font-semibold text-white">
              No projects found
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Try another search term or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("All Projects");
              }}
              className="mt-5 rounded-xl bg-indigo-500
                         px-5 py-3 text-sm font-semibold text-white
                         hover:bg-indigo-400"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-white/10
                     bg-gradient-to-br from-white/[0.06]
                     to-white/[0.02] p-8 text-center sm:mt-20 sm:p-12"
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm
                        leading-7 text-gray-400 sm:text-base">
            I am interested in creating useful digital experiences,
            collaborating on ideas, and solving real-world problems
            through technology.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-3
                       rounded-xl bg-indigo-500 px-6 py-3.5
                       text-sm font-semibold text-white transition
                       hover:bg-indigo-400"
          >
            Let's Work Together <FaExternalLinkAlt />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
