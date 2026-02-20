import React from 'react';
import { StatCard } from '../components/StatCard';
import { Table } from '../components/Table';

const FinancialSummary: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Performance Report</h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Track monthly earnings, expenses, and net profit per vehicle operations.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-surface-hover transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
            <span className="whitespace-nowrap">PDF</span>
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined text-lg">table_view</span>
            <span className="whitespace-nowrap">Excel</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Revenue" value="$1,250,000" icon="payments" trend={{ value: '12.5%', isUp: true, label: 'vs last period' }} iconColor="text-emerald-500" iconBg="bg-emerald-500/10" />
        <StatCard title="Total Expenses" value="$450,000" icon="money_off" trend={{ value: '5.2%', isUp: true, label: 'vs last period' }} iconColor="text-red-500" iconBg="bg-red-500/10" />
        <StatCard title="Net Profit" value="$800,000" icon="account_balance_wallet" trend={{ value: '15.3%', isUp: true, label: 'vs last period' }} />
        <StatCard title="Total Trips" value="14,250" icon="local_taxi" trend={{ value: '8.1%', isUp: true, label: 'vs last period' }} iconColor="text-amber-500" iconBg="bg-amber-500/10" />
      </div>

      <Table
        columns={[
          { header: 'Month', accessor: 'month', className: 'font-medium text-slate-900 dark:text-white sticky left-0 bg-white dark:bg-surface-dark' },
          { header: 'Total Trips', accessor: 'trips', className: 'text-right font-mono text-slate-600 dark:text-slate-300' },
          { header: 'Gross Amount', accessor: 'gross', className: 'text-right font-mono font-medium text-emerald-600 dark:text-emerald-400' },
          { header: 'Fuel Costs', accessor: 'fuel', className: 'text-right font-mono text-rose-500 dark:text-rose-400' },
          { header: 'Maintenance', accessor: 'maint', className: 'text-right font-mono text-rose-500 dark:text-rose-400' },
          { header: 'Net Earnings', accessor: (item: { net: string }) => (
            <div className="flex items-center justify-end gap-1 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">{item.net}</span>
              <span className="material-symbols-outlined text-xs text-emerald-500">trending_up</span>
            </div>
          ), className: 'text-right' },
          { header: 'Actions', accessor: () => (
            <div className="text-center">
              <button className="text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>
          ), className: 'text-center' },
        ]}
        data={[
          { month: 'Jan 2024', trips: '1,204', gross: '$481,600', fuel: '-$52,000', maint: '-$12,000', net: '+$417,600' },
          { month: 'Feb 2024', trips: '1,150', gross: '$460,000', fuel: '-$50,000', maint: '-$8,500', net: '+$401,500' },
          { month: 'Mar 2024', trips: '1,300', gross: '$520,000', fuel: '-$55,000', maint: '-$10,000', net: '+$455,000' },
          { month: 'Apr 2024', trips: '1,250', gross: '$500,000', fuel: '-$53,000', maint: '-$9,000', net: '+$438,000' },
          { month: 'May 2024', trips: '1,280', gross: '$512,000', fuel: '-$54,000', maint: '-$11,000', net: '+$447,000' },
          { month: 'Jun 2024', trips: '1,310', gross: '$524,000', fuel: '-$56,000', maint: '-$10,500', net: '+$457,500' },
        ]}
      />
    </div>
  );
};

export default FinancialSummary;
