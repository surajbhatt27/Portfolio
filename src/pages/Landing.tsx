import { FileText, Terminal } from 'lucide-react';
import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import { SiX } from '@icons-pack/react-simple-icons';

type LandingProps = {
    onOpenCommandPalette?: () => void;
};

export const Landing = ({ onOpenCommandPalette }: LandingProps) => {
    const projects = [
        { name: "PairUp", desc: "Real-time pair programming platform", tech: "React · Node · MongoDB · JDoodle" },
        { name: "PrepPilot", desc: "AI-powered placement prep generator", tech: "React · PostgreSQL · Open Router" },
        { name: "Chemora", desc: "Chemistry tools for students", tech: "React · Tailwind" },
    ];

    return (
        <div className="min-h-screen bg-gray-950 relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjZikiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==')] bg-repeat" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 pb-20 sm:pb-32">
                <div className="mb-12 sm:mb-16">
                    <div className="space-y-1 mb-6">
                        <p className="text-cyan-500/60 font-mono text-sm tracking-wide">Hi, I'm</p>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                            <span className="text-white">SURAJ</span>
                            <span className="text-cyan-500 block -mt-2 sm:-mt-3">BHATT</span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-400 font-mono text-sm">
                        <span className="text-cyan-500">$</span>
                        <span>./suraj --role</span>
                        <span className="text-gray-500">→</span>
                        <span className="text-gray-300">Full Stack Developer</span>
                    </div>
                </div>

                <div className="max-w-2xl mb-12">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        I turn ideas into <span className="text-cyan-400 font-medium">functional web experiences</span>. 
                        Currently juggling React, Node.js, and TypeScript — while prepping for the next big thing in software engineering.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-16">
                    <button
                        onClick={onOpenCommandPalette}
                        className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-cyan-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-200 cursor-pointer shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                    >
                        <Terminal size={16} className="group-hover:rotate-3 transition-transform" />
                        <span>Open Commands</span>
                    </button>
                    <a
                        href="https://drive.google.com/file/d/1yFyvo5Bc26phqA4TpNsVuGdrN34MPL6N/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 bg-gray-900/50 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:bg-gray-900 hover:text-white transition-all duration-200"
                    >
                        <FileText size={16} />
                        <span>Resume</span>
                    </a>
                </div>

                <div className="border-t border-gray-800/50 pt-10">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                        <h2 className="text-gray-500 font-mono text-xs tracking-wider uppercase">Featured projects</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {projects.map((project, idx) => (
                            <div 
                                key={project.name} 
                                className="group p-5 rounded-xl border border-gray-800/50 bg-gray-900/20 hover:bg-gray-900/40 hover:border-gray-700/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-white font-medium text-base group-hover:text-cyan-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <span className="text-xs text-gray-600 font-mono">0{idx + 1}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{project.desc}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.split(' · ').map((tech) => (
                                        <span key={tech} className="text-[11px] font-mono text-gray-600 bg-gray-900/50 px-2 py-0.5 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-6 pt-10 mt-4 border-t border-gray-800/50">
                    <p className="text-gray-700 text-xs font-mono">find me elsewhere →</p>
                    <div className="flex gap-3">
                        <a
                            href="https://github.com/surajbhatt27"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-500 hover:text-cyan-400 transition-all duration-200 hover:-translate-y-0.5"
                            aria-label="GitHub"
                        >
                            <SlSocialGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/suraj-bhatt-574b0426a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-500 hover:text-cyan-400 transition-all duration-200 hover:-translate-y-0.5"
                            aria-label="LinkedIn"
                        >
                            <SlSocialLinkedin size={18} />
                        </a>
                        <a
                            href="https://www.x.com/surj_bhtt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-500 hover:text-cyan-400 transition-all duration-200 hover:-translate-y-0.5"
                            aria-label="X"
                        >
                            <SiX size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};