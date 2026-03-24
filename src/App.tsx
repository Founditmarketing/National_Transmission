/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';
import { Home } from './pages/Home';
import { Tires } from './pages/Tires';
import { Brakes } from './pages/Brakes';
import { Alignment } from './pages/Alignment';
import { Suspension } from './pages/Suspension';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ui/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tires" element={<Tires />} />
              <Route path="/brakes" element={<Brakes />} />
              <Route path="/alignment" element={<Alignment />} />
              <Route path="/suspension" element={<Suspension />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

