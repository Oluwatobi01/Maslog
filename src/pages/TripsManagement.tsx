import React, { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { Table } from '../components/Table';
import { Modal } from '../components/Modal';
import { cn } from '../utils/cn';

const TripsManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm">Logistics</span>
          <span className="material-symbols-outlined text-slate-600 text-sm">chevron_right</span>
          <span className="text-slate-900 dark:text-white font-medium text-sm">Trips Management</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            Export Report
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/25 flex items-center gap-2 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add New Trip
          </button>
        </div>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Trips Today" value="142" icon="route" trend={{ value: '12%', isUp: true }} />
        <StatCard title="Est. Revenue" value="$56,800" icon="attach_money" trend={{ value: '8%', isUp: true }} />
        <StatCard title="Active Drivers" value="24" icon="groups" trend={{ value: '/ 32 Total', isUp: true, label: '' }} />
        <StatCard title="Total Distance" value="3,450 km" icon="speed" trend={{ value: '5%', isUp: true }} iconColor="text-amber-500" iconBg="bg-amber-500/10" />
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-3 rounded-xl">
        <div className="flex-1 min-w-[300px] relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">search</span>
          <input className="w-full bg-slate-50 dark:bg-background-dark border-none rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 transition-all outline-none" placeholder="Search by driver name or trip ID..." type="text"/>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-50 dark:bg-background-dark rounded-lg p-1 border border-slate-200 dark:border-border-dark">
            <button className="px-3 py-1.5 text-xs font-medium text-white bg-primary rounded shadow-sm">All</button>
            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Ongoing</button>
            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Completed</button>
          </div>
        </div>
      </div>

      <Table
        columns={[
          { header: 'Date', accessor: (item: { date: string; time: string }) => (
            <div className="flex flex-col">
              <span className="font-medium text-slate-900 dark:text-white">{item.date}</span>
              <span className="text-xs text-slate-500">{item.time}</span>
            </div>
          )},
          { header: 'Driver Details', accessor: (item: { avatar: string; driver: string; vehicle: string }) => (
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-slate-200 bg-cover bg-center ring-1 ring-border-dark" style={{ backgroundImage: `url(${item.avatar})` }}></div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 dark:text-white">{item.driver}</span>
                <span className="text-xs text-slate-500">{item.vehicle}</span>
              </div>
            </div>
          )},
          { header: 'Route Details', accessor: (item: { pickup: string; dropoff: string }) => (
            <div className="flex flex-col gap-2 relative pl-4 border-l border-slate-200 dark:border-border-dark ml-1">
              <div className="flex items-start gap-2 relative">
                <div className="absolute -left-[21px] top-1.5 size-2 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-background-dark"></div>
                <div className="flex flex-col leading-tight">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item.pickup}</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">Pick-up</span>
                </div>
              </div>
              <div className="flex items-start gap-2 relative">
                <div className="absolute -left-[21px] top-1.5 size-2 rounded-full bg-primary ring-4 ring-white dark:ring-background-dark"></div>
                <div className="flex flex-col leading-tight">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item.dropoff}</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">Drop-off</span>
                </div>
              </div>
            </div>
          )},
          { header: 'Distance', accessor: (item: { distance: string }) => item.distance, className: 'text-right font-mono text-slate-600 dark:text-slate-300' },
          { header: 'Amount', accessor: (item: { amount: string }) => (
            <div className="text-right">
              <span className="font-mono font-bold text-slate-900 dark:text-white text-base">{item.amount}</span>
              <span className="text-xs text-slate-500 block">PKR</span>
            </div>
          ), className: 'text-right' },
          { header: 'Status', accessor: (item: { status: string }) => (
            <div className="text-center">
              <span className={cn(
                "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border",
                item.status === 'Completed' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                item.status === 'Ongoing' ? "bg-blue-500/10 text-blue-400 border-blue-500/20 animate-pulse" :
                "bg-red-500/10 text-red-500 border-red-500/20"
              )}>
                {item.status}
              </span>
            </div>
          ), className: 'text-center' },
          { header: '', accessor: () => (
            <button className="text-slate-500 hover:text-primary p-1.5 rounded transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          ), className: 'text-center' }
        ]}
        data={[
          { date: 'Oct 24, 2023', time: '08:45 AM', driver: 'John Doe', vehicle: 'Toyota Camry • AB-123-CD', pickup: '123 Main St, Downtown', dropoff: '456 Tech Park', distance: '12.5 km', amount: '5,000', status: 'Completed', avatar: 'https://i.pravatar.cc/150?u=5' },
          { date: 'Oct 24, 2023', time: '09:15 AM', driver: 'Sarah Smith', vehicle: 'Honda Civic • XY-987-ZZ', pickup: 'Grand Central Terminal', dropoff: 'Times Square', distance: '4.2 km', amount: '1,680', status: 'Ongoing', avatar: 'https://i.pravatar.cc/150?u=6' },
          { date: 'Oct 23, 2023', time: '06:30 PM', driver: 'Michael Chen', vehicle: 'Toyota Prius • EV-456-PL', pickup: 'Airport Terminal 1', dropoff: 'Hilton Hotel, Downtown', distance: '28.0 km', amount: '11,200', status: 'Completed', avatar: 'https://i.pravatar.cc/150?u=7' },
        ]}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Trip"
        maxWidth="3xl"
        footer={(
          <div className="flex flex-row-reverse gap-3 w-full">
            <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">save</span>
              Save Trip
            </button>
            <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Cancel
            </button>
          </div>
        )}
      >
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">schedule</span>
              Trip Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
                <input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-primary" type="date" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Start Time</label>
                <input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-primary" type="time" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Assign Driver</label>
                <select className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-primary">
                  <option>Select driver...</option>
                  <option>John Doe (Toyota Prius)</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">route</span>
              Route Information
            </h4>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="mt-2.5 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm font-bold">circle</span>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Pick-up Location</label>
                  <input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-primary" placeholder="Enter pick-up address" />
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-2.5 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Drop-off Location</label>
                  <input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-primary" placeholder="Enter drop-off address" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TripsManagement;
