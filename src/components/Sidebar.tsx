import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../utils/cn';

interface SidebarProps {
  onClose?: () => void;
  className?: string;
}

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/' },
  { icon: 'map', label: 'Mileage', path: '/mileage' },
  { icon: 'local_gas_station', label: 'Fuel Logs', path: '/fuel' },
  { icon: 'build', label: 'Maintenance', path: '/maintenance' },
  { icon: 'route', label: 'Trips', path: '/trips' },
  { icon: 'bar_chart', label: 'Reports', path: '/reports' },
  { icon: 'account_balance_wallet', label: 'Financials', path: '/financials' },
  { icon: 'settings', label: 'Settings', path: '/settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ onClose, className }) => {
  return (
    <aside className={cn("flex flex-col w-64 bg-[#111318] border-r border-border-dark flex-shrink-0 h-full", className)}>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 rounded-full size-10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">local_taxi</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-bold leading-normal">Mas Drive</h1>
            <p className="text-slate-400 text-xs font-normal leading-normal">Fleet Manager</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group",
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-slate-400 hover:bg-surface-dark hover:text-white"
              )
            }
          >
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">
              {item.icon}
            </span>
            <p className="text-sm font-medium">{item.label}</p>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-border-dark">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600"></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-medium text-white truncate">Alex Morgan</p>
            <p className="text-xs text-slate-400 truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
