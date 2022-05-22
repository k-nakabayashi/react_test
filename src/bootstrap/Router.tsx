import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutIndex from '../layout/index';
import LayoutAuth from '../layout/auth';
import NotFound from '../layout/404';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutIndex />} />
        <Route path="auth/*" element={<LayoutAuth />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
