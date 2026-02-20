import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { cn } from '../utils/cn';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:flex h-screen sticky top-0" />

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed inset-y-0 left-0 w-64 bg-[#111318] transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <Sidebar onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#111318] border-b border-border-dark flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">local_taxi</span>
            <span className="font-bold text-white">Mas Drive</span>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="text-slate-400 hover:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
