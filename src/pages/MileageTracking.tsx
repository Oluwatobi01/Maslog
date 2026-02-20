import React, { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { Table } from '../components/Table';
import { Modal } from '../components/Modal';
import { cn } from '../utils/cn';

const MileageTracking: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Mileage Tracking</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Monitor daily vehicle operations, distance metrics, and efficiency scores.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-surface-dark border border-border-dark rounded-lg text-slate-200 hover:bg-border-dark transition-colors text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary rounded-lg text-white hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25 text-sm font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Log
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Distance (Oct)" value="12,450 km" icon="timeline" iconBg="bg-primary/20" />
        <StatCard title="Avg. Efficiency" value="0.82" icon="eco" iconColor="text-emerald-500" iconBg="bg-emerald-500/10" />
        <StatCard title="Active Vehicles" value="24/28" icon="directions_car" iconColor="text-orange-500" iconBg="bg-orange-500/10" />
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-4">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <label className="flex flex-col gap-1.5 w-full md:w-1/3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date Range</span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">calendar_today</span>
              <input
                className="w-full bg-slate-50 dark:bg-[#111318] border border-slate-200 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="Oct 1, 2023 - Oct 31, 2023"
                type="text"
              />
            </div>
          </label>
          <label className="flex flex-col gap-1.5 w-full md:w-1/3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vehicle</span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">search</span>
              <input
                className="w-full bg-slate-50 dark:bg-[#111318] border border-slate-200 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="Search license plate or model..."
                type="text"
              />
            </div>
          </label>
          <div className="w-full md:w-auto flex gap-2">
            <button className="flex-1 md:flex-none items-center justify-center px-4 py-2.5 bg-slate-100 dark:bg-border-dark hover:bg-slate-200 dark:hover:bg-[#384252] rounded-lg text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors">
              Clear
            </button>
            <button className="flex-1 md:flex-none items-center justify-center px-4 py-2.5 bg-primary hover:bg-blue-600 rounded-lg text-white text-sm font-medium transition-colors shadow-md shadow-primary/20">
              Apply
            </button>
          </div>
        </div>
      </div>

      <Table
        columns={[
          { header: 'Date', accessor: (item: { date: string }) => item.date, className: 'font-medium text-slate-900 dark:text-white' },
          { header: 'Vehicle', accessor: (item: { vehicleName: string; plate: string }) => (
            <div className="flex items-center gap-3">
              <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">directions_car</span>
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">{item.vehicleName}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{item.plate}</div>
              </div>
            </div>
          )},
          { header: 'Sign-in', accessor: (item: { signIn: string }) => item.signIn, className: 'text-slate-500 dark:text-slate-400' },
          { header: 'Sign-out', accessor: (item: { signOut: string }) => item.signOut, className: 'text-slate-500 dark:text-slate-400' },
          { header: 'Distance', accessor: (item: { distance: string }) => item.distance, className: 'text-right font-medium text-slate-900 dark:text-white' },
          { header: 'Efficiency', accessor: (item: { efficiency: number }) => (
            <div className="text-right">
              <div className={cn(
                "inline-flex items-center gap-2 px-2.5 py-1 rounded-full border",
                item.efficiency >= 0.8 ? "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" :
                item.efficiency >= 0.6 ? "bg-yellow-500/10 dark:bg-yellow-500/20 border-yellow-500/20 text-yellow-600 dark:text-yellow-400" :
                "bg-red-500/10 dark:bg-red-500/20 border-red-500/20 text-red-600 dark:text-red-400"
              )}>
                <span className={cn("size-1.5 rounded-full",
                  item.efficiency >= 0.8 ? "bg-emerald-500" :
                  item.efficiency >= 0.6 ? "bg-yellow-500" :
                  "bg-red-500"
                )}></span>
                <span className="text-xs font-bold">{item.efficiency.toFixed(2)}</span>
              </div>
            </div>
          ), className: 'text-right' },
        ]}
        data={[
          { date: 'Oct 24, 2023', vehicleName: 'Toyota Prius', plate: 'KBZ 888', signIn: '08:00 AM', signOut: '06:00 PM', distance: '200 km', efficiency: 0.50 },
          { date: 'Oct 24, 2023', vehicleName: 'Nissan Note', plate: 'KBA 123X', signIn: '07:30 AM', signOut: '05:45 PM', distance: '320 km', efficiency: 0.80 },
          { date: 'Oct 23, 2023', vehicleName: 'Toyota Axio', plate: 'KCD 456Y', signIn: '09:00 AM', signOut: '07:00 PM', distance: '150 km', efficiency: 0.37 },
          { date: 'Oct 23, 2023', vehicleName: 'Mazda Demio', plate: 'KDE 789Z', signIn: '08:15 AM', signOut: '06:30 PM', distance: '280 km', efficiency: 0.70 },
          { date: 'Oct 22, 2023', vehicleName: 'Honda Fit', plate: 'KFG 012A', signIn: '07:45 AM', signOut: '05:00 PM', distance: '380 km', efficiency: 0.95 },
        ]}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Mileage Log"
        maxWidth="2xl"
        footer={(
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#1c222e] border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">save</span>
              Save Log
            </button>
          </div>
        )}
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date</label>
              <input className="rounded-lg bg-slate-50 dark:bg-[#111620] border border-slate-200 dark:border-slate-700 py-3 px-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none" type="date" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Vehicle</label>
              <select className="rounded-lg bg-slate-50 dark:bg-[#111620] border border-slate-200 dark:border-slate-700 py-3 px-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none">
                <option value="">Select vehicle ID</option>
                <option value="v1">Toyota Camry - DX 4059</option>
                <option value="v2">Honda Civic - GH 9201</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sign-in Time</label>
              <input className="rounded-lg bg-slate-50 dark:bg-[#111620] border border-slate-200 dark:border-slate-700 py-3 px-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none" type="time" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sign-out Time</label>
              <input className="rounded-lg bg-slate-50 dark:bg-[#111620] border border-slate-200 dark:border-slate-700 py-3 px-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none" type="time" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Distance Covered (KM)</label>
            <input className="rounded-lg bg-slate-50 dark:bg-[#111620] border border-slate-200 dark:border-slate-700 py-3 px-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none" type="number" placeholder="0" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MileageTracking;
