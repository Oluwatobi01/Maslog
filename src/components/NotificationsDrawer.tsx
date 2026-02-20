import React from 'react';
import { cn } from '../utils/cn';

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'maintenance' | 'fuel' | 'trip' | 'system' | 'alert';
  unread: boolean;
}

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({ isOpen, onClose }) => {
  const notifications: Notification[] = [
    { id: '1', title: 'Maintenance Due: Vehicle XYZ', description: 'Vehicle Toyota Camry (L-8822) has reached the 5,000 mile maintenance threshold.', time: 'Just now', type: 'maintenance', unread: true },
    { id: '2', title: 'Low Fuel Efficiency Detected', description: 'Driver John Doe is averaging 12 MPG, which is 20% below fleet average.', time: '2 hours ago', type: 'fuel', unread: true },
    { id: '3', title: 'New Trip Log Added', description: 'Trip #9921 from Airport to Downtown has been manually logged.', time: '3 hours ago', type: 'trip', unread: true },
    { id: '4', title: 'System Maintenance Completed', description: 'Scheduled database optimization was completed successfully. No downtime recorded.', time: 'Yesterday at 4:30 PM', type: 'system', unread: false },
  ];

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'maintenance': return 'build';
      case 'fuel': return 'local_gas_station';
      case 'trip': return 'map';
      case 'system': return 'dns';
      case 'alert': return 'person_alert';
      default: return 'notifications';
    }
  };

  const getIconColor = (type: Notification['type']) => {
    switch (type) {
      case 'maintenance': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-500/20';
      case 'fuel': return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-500/20';
      case 'trip': return 'text-primary bg-primary/10';
      default: return 'text-slate-500 bg-slate-100 dark:bg-slate-800';
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside className={cn(
        "fixed inset-y-0 right-0 z-50 w-full max-w-md flex flex-col bg-background-light dark:bg-background-dark shadow-2xl border-l border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark z-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">Notifications</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">You have 3 unread messages</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Filter Tabs & Actions */}
        <div className="px-6 py-4 flex items-center justify-between gap-4 bg-background-light dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
              All
            </button>
            <button className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              Alerts
            </button>
            <button className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              System
            </button>
          </div>
          <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wide">
            Mark all as read
          </button>
        </div>

        {/* Notification List */}
        <div className="flex-1 overflow-y-auto px-2">
          <div className="flex flex-col gap-1 pb-6">
            <div className="px-4 py-2 mt-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Today</span>
            </div>
            {notifications.map((n) => (
              <div
                key={n.id}
                className="group relative flex gap-4 p-4 mx-2 rounded-xl transition-all duration-200 hover:bg-slate-200 dark:hover:bg-slate-800/60 cursor-pointer border border-transparent dark:hover:border-slate-700"
              >
                {n.unread && (
                  <span className="absolute right-4 top-4 size-2.5 rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark group-hover:ring-slate-200 dark:group-hover:ring-slate-800/60 transition-all"></span>
                )}
                <div className="shrink-0">
                  <div className={cn("flex items-center justify-center size-12 rounded-lg", getIconColor(n.type))}>
                    <span className="material-symbols-outlined">{getIcon(n.type)}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-1 pr-6">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{n.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{n.description}</p>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1">{n.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark z-10">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-300 dark:border-slate-700">
            View All History
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </aside>
    </>
  );
};
