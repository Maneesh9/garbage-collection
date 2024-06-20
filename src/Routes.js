import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import AddSchedule from './components/AddSchedule';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/add-schedule" element={<AddSchedule />} />
    </Routes>
  </Router>
);

export default AppRoutes;
