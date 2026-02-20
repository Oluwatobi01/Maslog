import React from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#111318] border-b border-border-dark flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">local_taxi</span>
            <span className="font-bold text-white">Mas Drive</span>
          </div>
          <button className="text-slate-400 hover:text-white">
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
