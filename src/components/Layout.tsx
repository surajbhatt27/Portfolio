import { type ReactNode } from 'react';
import { Header } from './Header';
import type { PageId } from '../types/page';

type LayoutProps = {
    children: ReactNode;
    title: string;
    showHeader?: boolean;
    setActivePage: (page: PageId | null) => void;
};

export const Layout = ({ children, title, showHeader = true, setActivePage }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-950">
            {showHeader && <Header setActivePage={setActivePage} />}
            <main className="pt-20 md:pt-20 px-4 sm:px-6 md:px-4 max-w-4xl mx-auto pb-24 md:pb-32">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 tracking-tight">
                    {title}
                </h1>
                {children}
            </main>
        </div>
    );
};