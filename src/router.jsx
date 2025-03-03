import { Routes, Route } from 'react-router';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Budget from './pages/Budget/Budget';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Budget" element={<Budget />} />
      <Route path="/History" element={<History />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}