import { Layout } from '../components/Layout';
import { Code2, Database, Wrench } from 'lucide-react';
import type { PageId } from '../types/page';

type SkillsProps = {
    setActivePage: (page: PageId | null) => void;
};

export const Skills = ({ setActivePage }: SkillsProps) => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: Code2,
            skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "TanStack Query"],
        },
        {
            title: "Backend & Database",
            icon: Database,
            skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Supabase", "Neon"],
        },
        {
            title: "Tools & Others",
            icon: Wrench,
            skills: ["Git & GitHub", "Postman", "VS Code", "Clerk", "Inngest", "Monaco Editor", "JDoodle API", "Open Router", "C++"],
        },
    ];

    return (
        <Layout title="Skills" setActivePage={setActivePage}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {skillCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <div
                            key={category.title}
                            className="border border-gray-800 rounded-lg bg-gray-900/30 p-4 sm:p-5"
                        >
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                                <Icon size={16} className="text-cyan-500" />
                                <h2 className="text-white font-medium text-sm">{category.title}</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-gray-400 font-mono px-2.5 py-1 rounded-md bg-gray-800/50 border border-gray-700/50"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};