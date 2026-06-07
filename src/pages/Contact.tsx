import { Layout } from '../components/Layout';
import { SiGithub, SiX, SiInstagram, SiGmail, } from '@icons-pack/react-simple-icons';
import { SlSocialLinkedin,  } from 'react-icons/sl';
import type { setActivePageType } from '../types/page';

const contactLinks = [
    {
        platform: "Email",
        handle: "suraj.bhatt.cs@gmail.com",
        url: "mailto:suraj.bhatt.cs@gmail.com",
        icon: SiGmail,
        iconType: "simple",
    },
    {
        platform: "GitHub",
        handle: "surajbhatt27",
        url: "https://github.com/surajbhatt27",
        icon: SiGithub,
        iconType: "simple",
    },
    {
        platform: "LinkedIn",
        handle: "surj-bhtt",
        url: "https://linkedin.com/in/surj-bhtt",
        icon: SlSocialLinkedin,
        iconType: "simple",
    },
    {
        platform: "X (Twitter)",
        handle: "@surj_bhtt",
        url: "https://x.com/surj_bhtt",
        icon: SiX,
        iconType: "simple",
    },
    {
        platform: "Instagram",
        handle: "@surj_bhtt",
        url: "https://instagram.com/surj_bhtt",
        icon: SiInstagram,
        iconType: "simple",
    },
];

export const Contact = ({setActivePage}: setActivePageType) => {
    return (
        <Layout title="Contact" setActivePage={setActivePage}>
            <div className="space-y-2">
                {contactLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 sm:p-4 border border-gray-800 rounded-lg bg-gray-900/30 hover:border-gray-700 hover:bg-gray-800/30 transition-all duration-200 group min-h-15 sm:min-h-0"
                        >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                {link.iconType === "lucide" ? (
                                    <Icon size={18} className="text-gray-500 group-hover:text-cyan-500" />
                                ) : (
                                    <Icon size={18} className="text-gray-500 group-hover:text-cyan-500" />
                                )}
                                <span className="text-gray-300 font-medium">{link.platform}</span>
                                <span className="text-gray-600 text-sm font-mono hidden sm:inline truncate">
                                    {link.handle}
                                </span>
                            </div>
                            <span className="text-gray-600 group-hover:text-cyan-500 transition-colors shrink-0 ml-2">
                                →
                            </span>
                        </a>
                    );
                })}
            </div>

            <p className="mt-6 text-center text-gray-600 text-sm font-mono">
            // I usually respond within 24 hours
            </p>
        </Layout>
    );
};