import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Home, Post } from '../pages';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/description/:number" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}
