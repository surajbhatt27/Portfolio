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
        <div className="min-h-screen bg-gray-950">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 pb-20 sm:pb-32">
                {/* Name & Title */}
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                        <span className="text-white">SURAJ</span>
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-cyan-500">
                        BHATT
                    </h1>
                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4 text-gray-400 text-sm sm:text-base">
                        <span>Computer Science Student</span>
                        <span className="text-gray-700">/</span>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                {/* Bio */}
                <div className="max-w-2xl mb-8 sm:mb-12">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        I build web applications with <span className="text-cyan-400">React</span>,{' '}
                        <span className="text-cyan-400">Node.js</span>, and{' '}
                        <span className="text-cyan-400">TypeScript</span>.
                        Currently exploring modern tech stacks and preparing for software engineering roles.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
                    <button
                        onClick={onOpenCommandPalette}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-colors cursor-pointer"
                    >
                        <Terminal size={16} />
                        <span>Open Commands</span>
                    </button>
                    <a
                        href="https://drive.google.com/file/d/1yFyvo5Bc26phqA4TpNsVuGdrN34MPL6N/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-gray-600 hover:text-white transition-colors"
                    >
                        <FileText size={16} />
                        <span>Resume</span>
                    </a>
                </div>

                {/* Featured Projects */}
                <div className="border-t border-gray-800 pt-8 sm:pt-12">
                    <h2 className="text-gray-400 text-sm font-mono mb-4 sm:mb-6">// featured work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projects.map((project) => (
                            <div 
                                key={project.name} 
                                className="p-4 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-colors"
                            >
                                <h3 className="text-white font-medium mb-1 text-base">{project.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{project.desc}</p>
                                <p className="text-gray-600 text-xs font-mono wrap-break-word">{project.tech}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-8 sm:pt-12 border-t border-gray-800 mt-6 sm:mt-8">
                    <a
                        href="https://github.com/surajbhatt27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-cyan-400 transition-colors min-h-11 inline-flex items-center"
                        aria-label="GitHub"
                    >
                        <SlSocialGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/suraj-bhatt-574b0426a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-cyan-400 transition-colors min-h-11 inline-flex items-center"
                        aria-label="LinkedIn"
                    >
                        <SlSocialLinkedin size={20} />
                    </a>
                    <a
                        href="https://www.x.com/surj_bhtt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-cyan-400 transition-colors min-h-11 inline-flex items-center"
                        aria-label="X"
                    >
                        <SiX size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};