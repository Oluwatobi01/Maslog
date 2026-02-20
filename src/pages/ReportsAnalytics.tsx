import React from 'react';
import { StatCard } from '../components/StatCard';
import { Table } from '../components/Table';
import { cn } from '../utils/cn';

const ReportsAnalytics: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Reports & Analytics</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Overview of fleet performance and operational costs</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all w-fit">
          <span className="material-symbols-outlined text-[20px]">download</span>
          Export Report
        </button>
      </header>

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        <div className="inline-flex rounded-lg bg-white dark:bg-surface-dark p-1 border border-slate-200 dark:border-border-dark w-full lg:w-auto">
          {['Weekly', 'Monthly', 'Yearly'].map((range) => (
            <button key={range} className={cn(
              "flex-1 lg:flex-none px-4 py-1.5 text-sm font-medium rounded transition-all",
              range === 'Monthly' ? "bg-slate-100 dark:bg-background-dark text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            )}>
              {range}
            </button>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <select className="w-full sm:w-48 appearance-none rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark py-2.5 px-4 text-sm text-slate-900 dark:text-white focus:border-primary outline-none">
            <option>All Vehicles</option>
          </select>
          <select className="w-full sm:w-48 appearance-none rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark py-2.5 px-4 text-sm text-slate-900 dark:text-white focus:border-primary outline-none">
            <option>All Drivers</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Revenue" value="$124,500" icon="attach_money" trend={{ value: '+12% vs last month', isUp: true }} />
        <StatCard title="Total Fuel Spend" value="$18,200" icon="local_gas_station" trend={{ value: '-5% efficiency', isUp: true }} iconColor="text-orange-500" iconBg="bg-orange-500/10" />
        <StatCard title="Maintenance Costs" value="$4,350" icon="build" trend={{ value: '+2% vs last month', isUp: false }} iconColor="text-red-500" iconBg="bg-red-500/10" />
        <StatCard title="Net Profit" value="$101,950" icon="account_balance_wallet" trend={{ value: '+8% profit margin', isUp: true }} iconColor="text-emerald-500" iconBg="bg-emerald-500/10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Revenue vs Fuel Costs</h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg text-slate-400">
            [Chart Visualization Area]
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Maintenance by Vehicle</h3>
          <div className="space-y-5">
            {[
              { label: 'Toyota Camry #402', value: '$1,250', progress: 85 },
              { label: 'Honda Civic #115', value: '$890', progress: 60 },
              { label: 'Tesla Model 3 #882', value: '$450', progress: 30 },
              { label: 'Ford Focus #005', value: '$320', progress: 22 },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-600 dark:text-slate-300">{item.label}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{item.value}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-background-dark overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Table
        columns={[
          { header: 'Date', accessor: (item: { date: string }) => item.date, className: 'text-slate-900 dark:text-white font-medium' },
          { header: 'Type', accessor: (item: { type: string }) => (
            <span className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              item.type === 'Fuel' ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-500" :
              item.type === 'Maintenance' ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-500" :
              "bg-primary/10 text-primary"
            )}>
              {item.type}
            </span>
          )},
          { header: 'Vehicle', accessor: (item: { vehicle: string }) => item.vehicle, className: 'text-slate-600 dark:text-slate-400' },
          { header: 'Driver', accessor: (item: { driver: string }) => item.driver, className: 'text-slate-600 dark:text-slate-400' },
          { header: 'Amount', accessor: (item: { amount: string }) => item.amount, className: 'text-right font-medium text-slate-900 dark:text-white' },
          { header: 'Status', accessor: () => (
            <div className="text-right">
              <span className="text-emerald-500 material-symbols-outlined text-[18px]">check_circle</span>
            </div>
          ), className: 'text-right' },
        ]}
        data={[
          { date: 'Oct 24, 2023', type: 'Fuel', vehicle: 'Toyota Camry #402', driver: 'Michael Scott', amount: '$45.20' },
          { date: 'Oct 23, 2023', type: 'Maintenance', vehicle: 'Honda Civic #115', driver: 'Jim Halpert', amount: '$120.00' },
          { date: 'Oct 22, 2023', type: 'Service Fee', vehicle: 'Tesla Model 3 #882', driver: 'Pam Beesly', amount: '$15.00' },
        ]}
      />
    </div>
  );
};

export default ReportsAnalytics;
