import { Terminal } from 'lucide-react';
import type { PageId } from '../types/page';

type HeaderProps = {
    setActivePage: (page: PageId | null) => void;
};

export const Header = ({ setActivePage }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex items-center justify-between">
                <button
                    onClick={() => setActivePage(null)}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity py-1"
                >
                    <Terminal size={18} className="text-cyan-500 shrink-0" />
                    <span className="font-mono font-medium text-gray-200 text-sm">
                        suraj<span className="text-cyan-500">.dev</span>
                    </span>
                </button>

                <div className="hidden sm:flex items-center gap-2 text-xs text-gray-600 font-mono">
                    <kbd className="px-1.5 py-0.5 bg-gray-900 border border-gray-700 rounded text-cyan-500">⌘</kbd>
                    <span>+</span>
                    <kbd className="px-1.5 py-0.5 bg-gray-900 border border-gray-700 rounded text-cyan-500">K</kbd>
                </div>
            </div>
        </header>
    );
};