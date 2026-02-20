import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NotificationsDrawer } from './components/NotificationsDrawer';
import Dashboard from './pages/Dashboard';
import MileageTracking from './pages/MileageTracking';
import MaintenanceExpenses from './pages/MaintenanceExpenses';
import FuelingLogs from './pages/FuelingLogs';
import TripsManagement from './pages/TripsManagement';
import ReportsAnalytics from './pages/ReportsAnalytics';
import FinancialSummary from './pages/FinancialSummary';
import Settings from './pages/Settings';

const App: React.FC = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mileage" element={<MileageTracking />} />
          <Route path="/fuel" element={<FuelingLogs />} />
          <Route path="/maintenance" element={<MaintenanceExpenses />} />
          <Route path="/trips" element={<TripsManagement />} />
          <Route path="/reports" element={<ReportsAnalytics />} />
          <Route path="/financials" element={<FinancialSummary />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
      <NotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
      {/* Floating Notification Trigger for Demo */}
      <button
        onClick={() => setIsNotificationsOpen(true)}
        className="fixed bottom-6 right-6 z-30 size-12 flex items-center justify-center bg-primary text-white rounded-full shadow-2xl hover:scale-110 transition-all md:bottom-8 md:right-8"
        aria-label="Toggle notifications"
      >
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </Router>
  );
};

export default App;
