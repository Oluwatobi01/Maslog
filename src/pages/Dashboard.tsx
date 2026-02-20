import React from 'react';
import { StatCard } from '../components/StatCard';
import { Table } from '../components/Table';
import { cn } from '../utils/cn';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden min-h-[180px] flex flex-col justify-end p-6 group">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
        <div className="relative z-20">
          <h2 className="text-white text-3xl font-bold mb-1">Fleet Overview</h2>
          <p className="text-slate-300 text-sm">Welcome back. Here's what's happening with your fleet today.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Fueling"
          value="12,450 L"
          icon="local_gas_station"
          trend={{ value: '2.4%', isUp: true, label: 'vs last month' }}
          iconBg="bg-blue-500/10"
        />
        <StatCard
          title="Total Trips"
          value="1,204"
          icon="route"
          trend={{ value: '12%', isUp: true, label: 'vs last month' }}
          iconBg="bg-purple-500/10"
          iconColor="text-purple-500"
        />
        <StatCard
          title="Maintenance Costs"
          value="$4,200"
          icon="build_circle"
          trend={{ value: '5%', isUp: false, label: 'vs last month' }}
          iconBg="bg-orange-500/10"
          iconColor="text-accent-orange"
        />
        <StatCard
          title="Fleet Availability"
          value="94%"
          icon="check_circle"
          progress={94}
          iconBg="bg-emerald-500/10"
          iconColor="text-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-5">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Log Trip', icon: 'add_road', color: 'text-primary' },
                { label: 'Add Fuel Log', icon: 'local_gas_station', color: 'text-blue-500' },
                { label: 'Maintenance', icon: 'car_repair', color: 'text-orange-500' },
                { label: 'Add Driver', icon: 'person_add', color: 'text-purple-500' },
              ].map((action) => (
                <button
                  key={action.label}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-slate-50 dark:bg-[#111318] hover:bg-slate-100 dark:hover:bg-[#282e39] border border-slate-200 dark:border-slate-700 transition-all group"
                >
                  <div className={cn("h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-slate-500/10", action.color)}>
                    <span className="material-symbols-outlined">{action.icon}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold">Recent Activity</h3>
              <button className="text-primary text-sm font-semibold hover:underline">View All</button>
            </div>
            <Table
              columns={[
                { header: 'Vehicle', accessor: 'vehicle', className: 'font-medium text-slate-900 dark:text-white' },
                { header: 'Type', accessor: (item: { type: string; icon: string }) => (
                  <span className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                    item.type === 'Fuel' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                    item.type === 'Maint.' ? "bg-orange-500/10 text-orange-500 border-orange-500/20" :
                    item.type === 'Trip' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                    item.type === 'Charge' ? "bg-purple-500/10 text-purple-500 border-purple-500/20" :
                    "bg-red-500/10 text-red-500 border-red-500/20"
                  )}>
                    <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                    {item.type}
                  </span>
                )},
                { header: 'Description', accessor: 'description' },
                { header: 'Value/Cost', accessor: 'value', className: 'text-right font-medium text-slate-900 dark:text-white' },
                { header: 'Date', accessor: 'date', className: 'text-right text-xs text-slate-500' },
              ]}
              data={[
                { vehicle: 'Toyota Camry (V-004)', type: 'Fuel', icon: 'local_gas_station', description: 'Filled 45L Premium', value: '$65.00', date: '2 mins ago' },
                { vehicle: 'Honda Civic (V-009)', type: 'Maint.', icon: 'build', description: 'Oil Change & Filter', value: '$120.00', date: '2 hrs ago' },
                { vehicle: 'Ford Transit (V-012)', type: 'Trip', icon: 'route', description: 'Completed Route #402', value: '142 km', date: '4 hrs ago' },
                { vehicle: 'Tesla Model 3 (V-021)', type: 'Charge', icon: 'ev_station', description: 'Supercharger Station', value: '$12.50', date: 'Yesterday' },
              ]}
            />
          </div>
        </div>

        {/* Sidebar Status Column */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-5 shadow-sm">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Vehicle Status</h3>
            <div className="flex justify-center py-4">
              <div className="relative h-40 w-40 rounded-full border-[12px] border-slate-100 dark:border-slate-800 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full border-[12px] border-transparent"
                  style={{
                    background: 'conic-gradient(#135bec 0% 65%, #0bda5e 65% 85%, #fa6238 85% 100%)',
                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 12px), #fff calc(100% - 12px))',
                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 12px), #fff calc(100% - 12px))'
                  }}
                ></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">42</p>
                  <p className="text-xs text-slate-400">Total</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 mt-4">
              {[
                { label: 'On Trip', value: 27, color: 'bg-primary' },
                { label: 'Available', value: 9, color: 'bg-accent-green' },
                { label: 'Maintenance', value: 6, color: 'bg-accent-orange' },
              ].map((status) => (
                <div key={status.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={cn("h-3 w-3 rounded-full", status.color)}></span>
                    <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{status.label}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{status.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-5 shadow-sm">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Upcoming Service</h3>
            <div className="space-y-4">
              {[
                { date: 'Oct 24', vehicle: 'Ford Transit (V-015)', desc: '50k Mile Checkup', time: '10:00 AM' },
                { date: 'Oct 28', vehicle: 'Toyota Camry (V-008)', desc: 'Brake Inspection', time: '02:30 PM' },
              ].map((service, idx) => (
                <div key={idx} className={cn("flex gap-4 items-start", idx > 0 && "pt-4 border-t border-slate-100 dark:border-slate-800")}>
                  <div className="flex-none bg-slate-100 dark:bg-slate-800 h-12 w-12 rounded-lg flex flex-col items-center justify-center text-slate-500">
                    <span className="text-[10px] font-bold uppercase">{service.date.split(' ')[0]}</span>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">{service.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold text-sm">{service.vehicle}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{service.desc}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-orange-400">
                      <span className="material-symbols-outlined text-[14px]">schedule</span> {service.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-5 py-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
