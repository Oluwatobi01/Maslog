import React, { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { Table } from '../components/Table';
import { Modal } from '../components/Modal';
import { cn } from '../utils/cn';

const MaintenanceExpenses: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Maintenance Logs</h1>
          <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-1">Manage vehicle repairs, scheduled service, and miscellaneous costs.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-[#282e39] rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#323945] transition-colors">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Nov 2023</span>
            <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Log Expense</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Maintenance" value="₦ 450,000" icon="build_circle" trend={{ value: '12%', isUp: true, label: 'vs last month' }} />
        <StatCard title="Miscellaneous" value="₦ 85,000" icon="receipt_long" trend={{ value: '5%', isUp: true, label: 'vs last month' }} iconColor="text-purple-500" iconBg="bg-purple-500/10" />
        <StatCard title="Pending Approval" value="4" icon="pending_actions" trend={{ value: '2%', isUp: false, label: 'vs last month' }} iconColor="text-orange-500" iconBg="bg-orange-500/10" />
        <StatCard title="Avg. Cost/Vehicle" value="₦ 15,000" icon="pie_chart" trend={{ value: '30 vehicles', isUp: true, label: 'Active' }} iconColor="text-teal-500" iconBg="bg-teal-500/10" />
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 dark:border-[#282e39] pb-0">
          <div className="flex gap-6">
            <button className="pb-3 border-b-2 border-primary text-primary font-bold text-sm px-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">build</span>
              Maintenance Logs
            </button>
            <button className="pb-3 border-b-2 border-transparent text-slate-500 dark:text-[#9da6b9] hover:text-slate-700 dark:hover:text-slate-300 font-medium text-sm px-1 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">receipt</span>
              Miscellaneous Expenses
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
          <div className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#181d26] border border-slate-200 dark:border-[#282e39] rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Search by assignee, vehicle ID..." type="text"/>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#181d26] border border-slate-200 dark:border-[#282e39] rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter
            </button>
          </div>
        </div>
      </div>

      <Table
        columns={[
          { header: 'Date', accessor: (item: { date: string }) => item.date, className: 'text-slate-600 dark:text-slate-300' },
          { header: 'Vehicle ID', accessor: (item: { initials: string; vehicleName: string; plate: string }) => (
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-[#282e39] flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-400">{item.initials}</span>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{item.vehicleName}</p>
                <p className="text-xs text-slate-500">{item.plate}</p>
              </div>
            </div>
          )},
          { header: 'Description', accessor: (item: { title: string; desc: string }) => (
            <div>
              <span className="font-medium text-slate-900 dark:text-white block">{item.title}</span>
              <span className="text-xs text-slate-500">{item.desc}</span>
            </div>
          )},
          { header: 'Assignee', accessor: (item: { assignee: string }) => (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-slate-400">person</span>
              {item.assignee}
            </div>
          )},
          { header: 'Status', accessor: (item: { status: string }) => (
            <span className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border",
              item.status === 'Paid' ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50" :
              item.status === 'Pending' ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800/50" :
              "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/50"
            )}>
              <span className={cn("w-1.5 h-1.5 rounded-full",
                item.status === 'Paid' ? "bg-emerald-500" :
                item.status === 'Pending' ? "bg-orange-500" :
                "bg-red-500"
              )}></span>
              {item.status}
            </span>
          )},
          { header: 'Amount', accessor: (item: { amount: string }) => item.amount, className: 'text-right font-bold text-slate-900 dark:text-white font-mono' },
          { header: 'Action', accessor: () => (
            <div className="text-center">
              <button className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-[#282e39] transition-colors">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>
          ), className: 'text-center' },
        ]}
        data={[
          { date: 'Nov 12, 2023', initials: 'TC', vehicleName: 'Toyota Corolla', plate: 'LND-453', title: 'Brake Pad Replacement', desc: 'Routine checkup & replacement', assignee: 'John Doe (Mechanic)', status: 'Paid', amount: '₦ 25,000' },
          { date: 'Nov 11, 2023', initials: 'HK', vehicleName: 'Hyundai Kona', plate: 'ABJ-882', title: 'Oil Change', desc: 'Synthetic oil filter', assignee: 'AutoFix Hub', status: 'Pending', amount: '₦ 18,500' },
          { date: 'Nov 10, 2023', initials: 'KC', vehicleName: 'Kia Cerato', plate: 'LAG-104', title: 'Tire Replacement (2)', desc: 'Front wheels alignment included', assignee: 'Samuel Oladipo', status: 'Paid', amount: '₦ 85,000' },
          { date: 'Nov 08, 2023', initials: 'TC', vehicleName: 'Toyota Camry', plate: 'LND-221', title: 'Battery Change', desc: 'Exide 12V 60Ah', assignee: 'Battery World', status: 'Paid', amount: '₦ 42,000' },
          { date: 'Nov 05, 2023', initials: 'NS', vehicleName: 'Nissan Sentra', plate: 'KAD-901', title: 'Engine Diagnosis', desc: 'Check engine light investigation', assignee: 'Mike (Mechanic)', status: 'Rejected', amount: '₦ 5,000' },
        ]}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Log Expense"
        footer={(
          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-primary dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-blue-600 rounded-lg transition-colors inline-flex items-center"
            >
              <span className="material-symbols-outlined text-[18px] mr-2">save</span>
              Log Expense
            </button>
          </div>
        )}
      >
        <div className="space-y-6">
          <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-lg flex gap-1">
            <button className="flex-1 py-2 px-3 text-sm font-semibold rounded-md bg-white dark:bg-slate-700 text-primary dark:text-white shadow-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px] mr-2">build</span>
              Maintenance
            </button>
            <button className="flex-1 py-2 px-3 text-sm font-semibold rounded-md text-slate-500 dark:text-slate-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px] mr-2">receipt_long</span>
              Miscellaneous
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900 dark:text-white">Date</label>
              <input className="bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm focus:ring-primary outline-none" type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900 dark:text-white">Amount (₦)</label>
              <input className="bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm focus:ring-primary outline-none" type="number" placeholder="0.00" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-900 dark:text-white">Whom it's for</label>
            <select className="bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm focus:ring-primary outline-none">
              <option>Select assignee</option>
              <option>John Doe (Driver)</option>
              <option>Official Mechanic</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-900 dark:text-white">Description of Work</label>
            <textarea className="bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm focus:ring-primary outline-none resize-none" rows={4} placeholder="Describe the maintenance performed..."></textarea>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MaintenanceExpenses;
