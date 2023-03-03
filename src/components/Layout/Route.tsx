import { Routes, Route } from 'react-router-dom';
import Calendar from '@/pages/Calendar';
import Chart from '@/pages/Chart';
import Sign from '@/pages/Sign';
import Setting from '@/pages/Setting';

function Router() {
  return (
    <Routes>
      <Route path="/*" element={<Sign />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/statistics" element={<Chart />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default Router;
