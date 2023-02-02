import { Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>oi</h1>} />
      <Route path="/teste" element={<h1>teste</h1>} />
    </Routes>
  );
}
