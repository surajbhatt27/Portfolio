import { ExternalLink, FolderGit2 } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Layout } from '../components/Layout';
import type { setActivePageType } from '../types/page';

const projects = [
    {
        title: "PairUp",
        description: "Real-time pair programming platform with live code collaboration, video calls, and compiler integration.",
        tech: ["React", "Node.js", "MongoDB", "JDoodle", "Monaco Editor", "Clerk"],
        github: "https://github.com/surajbhatt27/Hireloop",
        live: "https://hireloop-pink.vercel.app",
        featured: true,
    },
    {
        title: "PrepPilot",
        description: "AI-powered placement preparation generator that creates personalized study plans and mock interviews.",
        tech: ["React", "Node.js", "PostgreSQL", "Open Router", "Neon"],
        github: "https://github.com/surajbhatt27/PrepPilot",
        live: "https://prep-pilot-rho.vercel.app",
        featured: true,
    },
    {
        title: "Chemora",
        description: "Chemistry tools for students featuring periodic table, equation balancer, and molar mass calculator.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/surajbhatt27/chemora",
        live: "https://chemora-sooty.vercel.app",
        featured: true,
    },
    {
        title: "Echotube",
        description: "RESTful backend API for a video-sharing and microblogging platform with JWT authentication.",
        tech: ["Node.js", "Express", "MongoDB", "JWT"],
        github: "https://github.com/surajbhatt27/echotube_backend",
        live: null,
        featured: false,
    },
    {
        title: "MilkMitra",
        description: "RESTful backend API for a milk record management for rular dairy seller.",
        tech: ["Node.js", "Express", "MongoDB", "JWT"],
        github: "https://github.com/surajbhatt27/MilkMitra",
        live: null,
        featured: false,
    },
];

export const Projects = ({setActivePage}: setActivePageType) => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <Layout title="Projects" setActivePage={setActivePage}>
            {/* Featured section */}
            <div className="space-y-6 mb-12">
                {featuredProjects.map((project) => (
                    <div
                        key={project.title}
                        className="group border border-gray-800 rounded-lg bg-gray-900/30 hover:border-gray-700 transition-all duration-200"
                    >
                        <div className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FolderGit2 size={16} className="text-cyan-500 shrink-0" />
                                        <h2 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h2>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs text-gray-500 font-mono px-2 py-1 rounded bg-gray-800/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-3 sm:justify-end">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-500 hover:text-cyan-500 transition-colors"
                                        aria-label={`${project.title} GitHub`}
                                    >
                                        <SiGithub size={18} />
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-gray-500 hover:text-cyan-500 transition-colors"
                                            aria-label={`${project.title} live demo`}
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Other projects */}
            {otherProjects.length > 0 && (
                <>
                    <h3 className="text-gray-500 text-sm font-mono mb-4 border-t border-gray-800 pt-8">
                    // other work
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-16 sm:pb-32">
                        {otherProjects.map((project) => (
                            <div
                                key={project.title}
                                className="group border border-gray-800 rounded-lg bg-gray-900/30 p-5 hover:border-gray-700 transition-all duration-200"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-white font-medium mb-1">{project.title}</h3>
                                        <p className="text-gray-500 text-sm mb-3">{project.description}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.slice(0, 3).map((tech) => (
                                                <span key={tech} className="text-xs text-gray-600 font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="text-xs text-gray-600">+{project.tech.length - 3}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 text-gray-600 hover:text-cyan-500 transition-colors"
                                        >
                                            <SiGithub size={16} />
                                        </a>
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 text-gray-600 hover:text-cyan-500 transition-colors"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </Layout>
    );
};