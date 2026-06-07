import { Terminal } from 'lucide-react';
import { forwardRef } from 'react';

type CommandButtonProps = {
    onClick: () => void;
};

export const CommandButton = forwardRef<HTMLButtonElement, CommandButtonProps>(
    ({ onClick }, ref) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 
                        bg-cyan-500 hover:bg-cyan-600 
                        text-white rounded-full p-3 md:p-4 
                        shadow-lg hover:shadow-xl 
                    transition-all duration-200 
                    hover:scale-105 active:scale-95
                    focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-950
                    group"
                aria-label="Open command palette (⌘K)"
            >
                <Terminal size={20} className="md:w-5 md:h-5" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 
                            hidden md:group-hover:flex items-center gap-1
                            px-2 py-1 bg-gray-900 text-gray-300 text-xs rounded-md
                            border border-gray-700 whitespace-nowrap
                            shadow-lg pointer-events-none">
                    <kbd className="px-1 py-0.5 bg-gray-800 rounded text-cyan-400 text-xs">⌘</kbd>
                    <span>+</span>
                    <kbd className="px-1 py-0.5 bg-gray-800 rounded text-cyan-400 text-xs">K</kbd>
                </span>
            </button>
        );
    }
);

CommandButton.displayName = "CommandButton";