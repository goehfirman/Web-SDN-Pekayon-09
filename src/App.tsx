/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Guru from './pages/Guru';
import Fasilitas from './pages/Fasilitas';
import BahanAjar from './pages/BahanAjar';
import ProgramUnggulan from './pages/ProgramUnggulan';
import SPMB from './pages/SPMB';
import Kontak from './pages/Kontak';
import Berita from './pages/Berita';
import Maintenance from './pages/Maintenance';

// Set this to true to enable maintenance mode and display it across all routes
const IS_MAINTENANCE_MODE = false;

export default function App() {
  if (IS_MAINTENANCE_MODE) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profil" element={<Profil />} />
          <Route path="guru" element={<Guru />} />
          <Route path="fasilitas" element={<Fasilitas />} />
          <Route path="bahan-ajar" element={<BahanAjar />} />
          <Route path="program-unggulan" element={<ProgramUnggulan />} />
          <Route path="spmb" element={<SPMB />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="berita" element={<Berita />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
