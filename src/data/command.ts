import type { PageId } from "../types/page";

export type command = {
    id: PageId | 'home',
    title: string,
    description: string
}

const commands: command[] = [
    {
        id: 'home',
        title: 'Home',
        description: 'Return to landing page',
    },
    {
        id: 'about',
        title: 'About Me',
        description: 'Learn more about me',
    },
    {
        id: 'experience',
        title: 'Experience',
        description: 'My work history',
    },
    {
        id: 'projects',
        title: 'Projects',
        description: 'Explore my work',
    },
    {
        id: 'skills',
        title: 'Skills',
        description: 'Technical expertise',
    },
    {
        id: 'contact',
        title: 'Contact',
        description: 'Get in touch',
    },
];

export default commands;