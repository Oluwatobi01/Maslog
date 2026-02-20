import React, { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { Table } from '../components/Table';
import { Modal } from '../components/Modal';
import { cn } from '../utils/cn';

const FuelingLogs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Operations</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-slate-900 dark:text-white font-medium">Fueling</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Fueling Logs</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">Track daily fuel consumption, expenses, and manage fueling records across the fleet.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-white text-sm font-bold transition-colors">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            <span className="hidden sm:inline">Export CSV</span>
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span>Log Fueling</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Spent Today" value="₦ 145,200" icon="payments" trend={{ value: '+2.4%', isUp: true }} />
        <StatCard title="Liters Dispensed" value="1,240 L" icon="water_drop" trend={{ value: 'Daily Avg: 800L', isUp: true }} />
        <StatCard title="Vehicles Fueled" value="28" icon="directions_car" />
        <StatCard title="Station Visits" value="42" icon="local_gas_station" />
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
          <input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark text-slate-900 dark:text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-500 transition-shadow" placeholder="Search Vehicle ID, Driver..." type="text"/>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-background-dark hover:bg-slate-50 dark:hover:bg-background-dark/80 border border-slate-200 dark:border-border-dark px-3 py-2 rounded-lg text-sm transition-colors font-medium">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Oct 2023</span>
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          <button className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-background-dark hover:bg-slate-50 dark:hover:bg-background-dark/80 border border-slate-200 dark:border-border-dark px-3 py-2 rounded-lg text-sm transition-colors font-medium">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            <span>Filter</span>
          </button>
        </div>
      </div>

      <Table
        columns={[
          { header: 'Date & Time', accessor: (item: { date: string; time: string }) => (
            <div className="flex flex-col leading-tight">
              <span className="text-slate-900 dark:text-white font-medium">{item.date}</span>
              <span className="text-xs text-slate-500">{item.time}</span>
            </div>
          )},
          { header: 'Vehicle ID', accessor: (item: { vehicleId: string }) => (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary border border-primary/30">
              {item.vehicleId}
            </span>
          )},
          { header: 'Driver', accessor: (item: { avatar: string; driver: string }) => (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url(${item.avatar})` }}></div>
              <span className="text-slate-900 dark:text-white font-medium">{item.driver}</span>
            </div>
          )},
          { header: 'Station', accessor: (item: { station: string }) => item.station, className: 'text-slate-600 dark:text-slate-300' },
          { header: 'Liters (L)', accessor: (item: { liters: string }) => item.liters, className: 'text-right font-medium text-slate-900 dark:text-white' },
          { header: 'Amount (₦)', accessor: (item: { amount: string }) => item.amount, className: 'text-right font-bold text-slate-900 dark:text-white font-mono' },
          { header: 'Status', accessor: (item: { status: string }) => (
            <div className="flex justify-center">
              <span className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                item.status === 'Approved' ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
              )}>
                <span className={cn("w-1.5 h-1.5 rounded-full", item.status === 'Approved' ? "bg-emerald-500" : "bg-amber-400 animate-pulse")}></span>
                {item.status}
              </span>
            </div>
          ), className: 'text-center' },
          { header: 'Actions', accessor: () => (
            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-white/10 rounded-md transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
              <button className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
            </div>
          ), className: 'text-right' },
        ]}
        data={[
          { date: 'Oct 24, 2023', time: '08:45 AM', vehicleId: 'MAS-004', driver: 'John Doe', station: 'Total Energies, Lekki', liters: '25.0 L', amount: '₦ 15,000', status: 'Approved', avatar: 'https://i.pravatar.cc/150?u=1' },
          { date: 'Oct 24, 2023', time: '10:12 AM', vehicleId: 'MAS-012', driver: 'Sarah Smith', station: 'NNPC Station, VI', liters: '40.5 L', amount: '₦ 24,300', status: 'Pending', avatar: 'https://i.pravatar.cc/150?u=2' },
          { date: 'Oct 23, 2023', time: '06:30 PM', vehicleId: 'MAS-008', driver: 'Emeka Obi', station: 'Oando, Ikeja', liters: '18.0 L', amount: '₦ 10,800', status: 'Approved', avatar: 'https://i.pravatar.cc/150?u=3' },
          { date: 'Oct 23, 2023', time: '02:15 PM', vehicleId: 'MAS-022', driver: 'Tunde Bakare', station: 'Conoil, Yaba', liters: '32.0 L', amount: '₦ 19,200', status: 'Approved', avatar: 'https://i.pravatar.cc/150?u=4' },
        ]}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Log New Fueling"
        maxWidth="lg"
        footer={(
          <div className="flex flex-row-reverse gap-3 w-full">
            <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">Save Entry</button>
            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer transition-colors">Cancel</button>
          </div>
        )}
      >
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Date</label>
              <input className="bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none" type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Vehicle ID</label>
              <select className="bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none">
                <option>Select Vehicle</option>
                <option>MAS-004</option>
                <option>MAS-012</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Driver Name</label>
            <input className="bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none" type="text" placeholder="Start typing driver name..." />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Fuel Station</label>
            <input className="bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none" type="text" placeholder="e.g. Total Energies, Lekki" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Amount (₦)</label>
              <input className="bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none font-mono" type="number" placeholder="0.00" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Liters (L)</label>
              <input className="bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none font-mono" type="number" placeholder="0.00" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FuelingLogs;
