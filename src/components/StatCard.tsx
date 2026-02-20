import React from 'react';
import { cn } from '../utils/cn';

interface StatCardProps {
  title: string;
  value: string;
  trend?: {
    value: string;
    isUp: boolean;
    label?: string;
  };
  icon: string;
  iconColor?: string;
  iconBg?: string;
  progress?: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  icon,
  iconColor = 'text-primary',
  iconBg = 'bg-primary/10',
  progress
}) => {
  return (
    <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-5 rounded-xl shadow-sm hover:border-primary/30 transition-colors flex flex-col justify-between h-32">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{value}</p>
        </div>
        <div className={cn("size-10 rounded-lg flex items-center justify-center", iconBg, iconColor)}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>

      {trend && (
        <div className="flex items-center gap-2 mt-2">
          <span className={cn(
            "text-xs font-bold flex items-center px-1.5 py-0.5 rounded",
            trend.isUp ? "text-emerald-500 bg-emerald-500/10" : "text-rose-500 bg-rose-500/10"
          )}>
            <span className="material-symbols-outlined text-[14px] mr-0.5">
              {trend.isUp ? 'trending_up' : 'trending_down'}
            </span>
            {trend.value}
          </span>
          {trend.label && <span className="text-slate-400 text-xs">{trend.label}</span>}
        </div>
      )}

      {progress !== undefined && (
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-auto overflow-hidden">
          <div
            className="bg-accent-green h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};
