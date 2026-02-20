import React from 'react';
import { cn } from '../utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  maxWidth = 'md'
}) => {
  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className={cn(
        "relative w-full transform overflow-hidden rounded-xl bg-white dark:bg-surface-dark text-left shadow-2xl transition-all border border-slate-200 dark:border-border-dark flex flex-col max-h-[90vh]",
        maxWidthClasses[maxWidth]
      )}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-border-dark bg-slate-50 dark:bg-surface-dark flex-shrink-0">
          <h3 className="text-xl font-bold leading-6 text-slate-900 dark:text-slate-100 tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-500 dark:hover:text-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 bg-slate-50 dark:bg-background-dark/50 border-t border-slate-100 dark:border-border-dark flex flex-row-reverse gap-3 flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
