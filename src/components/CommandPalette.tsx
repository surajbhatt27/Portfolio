import { Command } from "cmdk";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import commands from "../data/command";
import type { PageId } from "../types/page";
import { Terminal } from "lucide-react";

export type CommandPaletteHandle = {
    open: () => void;
    close: () => void;
    toggle: () => void;
};

type CommandPaletteProps = {
    setActivePage: (page: PageId | null) => void;
};

export const CommandPalette = forwardRef<CommandPaletteHandle, CommandPaletteProps>(
    ({ setActivePage }, ref) => {
        const [open, setOpen] = useState(false);
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => ({
            open: () => {
                setOpen(true);
                setTimeout(() => inputRef.current?.focus(), 0);
            },
            close: () => setOpen(false),
            toggle: () => {
                setOpen((prev) => {
                    if (!prev) {
                        setTimeout(() => inputRef.current?.focus(), 0);
                    }
                    return !prev;
                });
            },
        }));

        useEffect(() => {
            const handleCtrlK = (e: KeyboardEvent) => {
                if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                    e.preventDefault();
                    setOpen((prev) => {
                        if (!prev) {
                            setTimeout(() => inputRef.current?.focus(), 0);
                        }
                        return !prev;
                    });
                }
            };

            window.addEventListener("keydown", handleCtrlK);
            return () => window.removeEventListener("keydown", handleCtrlK);
        }, []);

        const handleSelect = (commandId: PageId | "home") => {
            if (commandId === "home") {
                setActivePage(null);
            } else {
                setActivePage(commandId);
            }
            setOpen(false);
        };

        return (
            <>
                <Command.Dialog
                    open={open}
                    onOpenChange={setOpen}
                    className="fixed top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-[90vw] md:w-125 bg-gray-950 border border-gray-800 rounded-xl shadow-2xl overflow-hidden z-50"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <Command.Input
                        ref={inputRef}
                        placeholder="Search commands..."
                        className="w-full bg-transparent px-4 py-3 text-gray-200 outline-none border-b border-gray-800 placeholder-gray-500 text-base md:text-sm"
                    />
                    <Command.List className="max-h-64 overflow-y-auto custom-scrollbar">
                        <Command.Empty className="px-4 py-8 text-center text-gray-500">
                            No commands found
                        </Command.Empty>
                        {commands.map((command) => (
                            <Command.Item
                                key={command.id}
                                onSelect={() => handleSelect(command.id)}
                                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-800/50 focus:bg-gray-800/50 outline-none data-[selected=true]:bg-gray-800"
                            >
                                <div>
                                    <h3 className="text-sm font-medium text-gray-200">{command.title}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{command.description}</p>
                                </div>
                                <span className="text-xs text-gray-600">→</span>
                            </Command.Item>
                        ))}
                    </Command.List>
                    <div className="border-t border-gray-800 px-4 py-2 flex justify-between text-xs text-gray-600">
                        <div className="flex gap-3">
                            <span>↑↓ navigate</span>
                            <span>↵ select</span>
                            <span>esc close</span>
                        </div>
                        <Terminal size={12} className="text-gray-600" />
                    </div>
                </Command.Dialog>

                {open && (
                    <div
                        className="fixed inset-0 bg-black/60 z-40"
                        onClick={() => setOpen(false)}
                    />
                )}
            </>
        );
    }
);

CommandPalette.displayName = "CommandPalette";