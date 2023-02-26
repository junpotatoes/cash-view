import { Routes, Route } from 'react-router-dom';
import Calendar from '../../pages/Calendar';
import Chart from '../../pages/Chart';
import Sign from '../../pages/Sign';

function Router() {
  return (
    <Routes>
      <Route path="/*" element={<Sign />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/statistics" element={<Chart />} />
    </Routes>
  );
}

export default Router;
