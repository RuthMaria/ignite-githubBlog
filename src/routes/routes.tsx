import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Post } from '../pages';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:number" element={<Post />} />
      </Routes>
    </Router>
  );
}
