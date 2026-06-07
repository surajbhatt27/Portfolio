import { Layout } from '../components/Layout';
import { Calendar, MapPin } from 'lucide-react';
import type { setActivePageType } from '../types/page';

const experiences = [
    {
        title: "Backend Developer Intern",
        company: "InterWeU",
        location: "Remote",
        period: "Jan 2026 - June 2026",
        description: [
            "Built REST APIs with Node.js and TypeScript for backend workflows",
            "Implemented authentication with PostgreSQL and Supabase",
            "Developed interview proctoring features including activity tracking and session validation",
            "Integrated Daily.co APIs for real-time interview sessions",
            "Deployed and monitored backend services on Render",
        ],
        technologies: ["Node.js", "Express", "PostgreSQL", "Supabase", "Postman"],
    },
];

export const Experience = ({setActivePage}: setActivePageType) => {
    return (
        <Layout title="Experience" setActivePage={setActivePage}>
            <div className="space-y-6">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-800 rounded-lg bg-gray-900/30 p-4 sm:p-6"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold text-white">{exp.title}</h2>
                                <p className="text-cyan-500 mt-1 text-sm sm:text-base">{exp.company}</p>
                            </div>
                            <div className="text-left sm:text-right">
                                <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm mt-1">
                                    <MapPin size={14} />
                                    <span>{exp.location}</span>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                            {exp.description.map((item, i) => (
                                <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                    <span className="text-cyan-500 mt-0.5">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800">
                            {exp.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs text-gray-500 font-mono px-2 py-1 rounded bg-gray-800/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};