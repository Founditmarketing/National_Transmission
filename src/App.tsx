import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';
import { Home } from './pages/Home';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ui/ScrollToTop';

// Service Pages
import { TransmissionRepair } from './pages/services/TransmissionRepair';
import { TransmissionRebuild } from './pages/services/TransmissionRebuild';
import { TransmissionFlush } from './pages/services/TransmissionFlush';
import { AutomaticTransmissionService } from './pages/services/AutomaticTransmissionService';
import { ManualTransmissionService } from './pages/services/ManualTransmissionService';
import { TransmissionDiagnostics } from './pages/services/TransmissionDiagnostics';
import { CvJointRepair } from './pages/services/CvJointRepair';
import { DifferentialService } from './pages/services/DifferentialService';
import { TransferCaseRepair } from './pages/services/TransferCaseRepair';
import { DriveshaftRepair } from './pages/services/DriveshaftRepair';
import { ClutchRepair } from './pages/services/ClutchRepair';
import { AxleRepair } from './pages/services/AxleRepair';
import { BrakePadReplacement } from './pages/services/BrakePadReplacement';
import { BrakeRotorResurfacing } from './pages/services/BrakeRotorResurfacing';
import { BrakeLineRepair } from './pages/services/BrakeLineRepair';
import { AbsDiagnosticsRepair } from './pages/services/AbsDiagnosticsRepair';
import { TireRotationBalancing } from './pages/services/TireRotationBalancing';
import { FlatTireRepair } from './pages/services/FlatTireRepair';
import { TireSalesInstallation } from './pages/services/TireSalesInstallation';
import { ShocksStrutsReplacement } from './pages/services/ShocksStrutsReplacement';
import { PowerSteeringRepair } from './pages/services/PowerSteeringRepair';
import { WheelAlignment } from './pages/services/WheelAlignment';
import { CheckEngineLightDiagnostics } from './pages/services/CheckEngineLightDiagnostics';
import { OilChangeService } from './pages/services/OilChangeService';
import { CoolingSystemRepair } from './pages/services/CoolingSystemRepair';

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
              <Route path="/contact" element={<ContactPage />} />

              {/* Transmission */}
              <Route path="/transmission-repair" element={<TransmissionRepair />} />
              <Route path="/transmission-rebuild" element={<TransmissionRebuild />} />
              <Route path="/transmission-flush" element={<TransmissionFlush />} />
              <Route path="/automatic-transmission-service" element={<AutomaticTransmissionService />} />
              <Route path="/manual-transmission-service" element={<ManualTransmissionService />} />
              <Route path="/transmission-diagnostics" element={<TransmissionDiagnostics />} />

              {/* Drivetrain */}
              <Route path="/cv-joint-repair" element={<CvJointRepair />} />
              <Route path="/differential-service" element={<DifferentialService />} />
              <Route path="/transfer-case-repair" element={<TransferCaseRepair />} />
              <Route path="/driveshaft-repair" element={<DriveshaftRepair />} />
              <Route path="/clutch-repair" element={<ClutchRepair />} />
              <Route path="/axle-repair" element={<AxleRepair />} />

              {/* Brakes */}
              <Route path="/brake-pad-replacement" element={<BrakePadReplacement />} />
              <Route path="/brake-rotor-resurfacing" element={<BrakeRotorResurfacing />} />
              <Route path="/brake-line-repair" element={<BrakeLineRepair />} />
              <Route path="/abs-diagnostics-repair" element={<AbsDiagnosticsRepair />} />

              {/* Tires */}
              <Route path="/tire-rotation-balancing" element={<TireRotationBalancing />} />
              <Route path="/flat-tire-repair" element={<FlatTireRepair />} />
              <Route path="/tire-sales-installation" element={<TireSalesInstallation />} />

              {/* Suspension */}
              <Route path="/shocks-struts-replacement" element={<ShocksStrutsReplacement />} />
              <Route path="/power-steering-repair" element={<PowerSteeringRepair />} />
              <Route path="/wheel-alignment" element={<WheelAlignment />} />

              {/* General */}
              <Route path="/check-engine-light-diagnostics" element={<CheckEngineLightDiagnostics />} />
              <Route path="/oil-change-service" element={<OilChangeService />} />
              <Route path="/cooling-system-repair" element={<CoolingSystemRepair />} />

              {/* Legacy redirects */}
              <Route path="/tires" element={<TireSalesInstallation />} />
              <Route path="/brakes" element={<BrakePadReplacement />} />
              <Route path="/alignment" element={<WheelAlignment />} />
              <Route path="/suspension" element={<ShocksStrutsReplacement />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
