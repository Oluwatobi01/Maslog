import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 lg:p-10 space-y-8 pb-20">
      <header className="flex flex-col gap-2 border-b border-slate-200 pb-6 dark:border-slate-800">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Profile Settings</h1>
        <p className="text-base text-slate-500 dark:text-slate-400">Manage your account details, notification preferences, and security settings.</p>
      </header>

      {/* Profile Card */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1c212c]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-24">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFHooJ7s8meFV96a-mLJdoezKEoTHcT9FqSyYovSMRXxb--0eYi3G0JCzAN3qvqVIqGYD7LQmZQR_AhYC1Lxorl0kulLkSujgpxHpNpLKxbB86It5TWxznJZZgaciC9Iy5R4_8OYXZSht60zJcHiMk8lNPiZJA8twZpt_zARhyO_vjMBy0BCW8Dwx2QT6CAxFzo-wMU7jbU3nAOrG2KQ_KHfuVvjcX1vt-sIlArfuGFmX27s_uLsTlHVdl0Z620bVl6F8XoUoc2WI"
                alt="Profile"
                className="h-full w-full rounded-full object-cover ring-4 ring-slate-50 dark:ring-slate-800"
              />
              <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-blue-600 transition-colors shadow-sm border-2 border-white dark:border-[#1c212c]">
                <span className="material-symbols-outlined text-[16px]">edit</span>
              </button>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">John Doe</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Fleet Administrator • Lagos, NG</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors">
              Remove Photo
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors">
              Change Photo
            </button>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1c212c]">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Personal Information</h2>
            <span className="material-symbols-outlined text-slate-400">id_card</span>
          </div>
          <form className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                <input className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="John" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                <input className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="Doe" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
              <input className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="john.doe@masdrive.com" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
              <input className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="+234 800 123 4567" />
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1c212c]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Regional Preferences</h2>
              <span className="material-symbols-outlined text-slate-400">public</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Currency</p>
                  <p className="text-xs text-slate-500">Default currency for reporting</p>
                </div>
                <select className="rounded-lg border border-slate-200 bg-slate-50 py-1.5 px-3 text-sm font-medium dark:border-slate-700 dark:bg-slate-900/50 dark:text-white outline-none focus:border-primary">
                  <option>NGN (₦)</option>
                  <option>USD ($)</option>
                </select>
              </div>
              <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Distance Unit</p>
                  <p className="text-xs text-slate-500">Mileage tracking unit</p>
                </div>
                <div className="flex rounded-lg bg-slate-100 dark:bg-slate-900/50 p-1">
                   <button className="rounded-md bg-white dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-900 dark:text-white shadow-sm">km</button>
                   <button className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400">mi</button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1c212c]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Notifications</h2>
              <span className="material-symbols-outlined text-slate-400">notifications</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Maintenance Alerts</p>
                <p className="text-xs text-slate-500">Get notified when cars need service</p>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <div className="w-11 h-6 bg-primary rounded-full transition-colors"></div>
                <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform translate-x-5 shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <div className="fixed bottom-0 right-0 z-10 w-full border-t border-slate-200 bg-white/80 p-4 backdrop-blur-md dark:border-slate-800 dark:bg-[#111318]/90 lg:w-[calc(100%-16rem)]">
        <div className="mx-auto flex max-w-5xl items-center justify-end gap-4">
          <button className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors">
            Cancel
          </button>
          <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
