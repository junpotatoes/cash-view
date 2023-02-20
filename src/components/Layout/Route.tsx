import { Routes, Route } from 'react-router-dom';
import Calendar from '../../pages/Calendar';
import Sign from '../../pages/Sign';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Sign />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default Router;
