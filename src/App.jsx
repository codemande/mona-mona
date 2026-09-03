import { Routes, Route, useLocation, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { ToastProvider, useToast } from "./components/ui/Toast.jsx";
import { registerErrorHandler } from "./api/notify.js";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import WhatsAppFab from "./components/layout/WhatsAppFab.jsx";
import ScrollToHash from "./components/layout/ScrollToHash.jsx";

import Home from "./pages/Home.jsx";
import SmartphoneProtection from "./pages/SmartphoneProtection.jsx";
import BuyNow from "./pages/BuyNow.jsx";
import FixNow from "./pages/FixNow.jsx";
import ProtectionCalculatorPage from "./pages/ProtectionCalculatorPage.jsx";
import PartnerStores from "./pages/PartnerStores.jsx";
import SupportedDevices from "./pages/SupportedDevices.jsx";
import BrandDevices from "./pages/BrandDevices.jsx";
import ModelDetail from "./pages/ModelDetail.jsx";
import BecomeAPartner from "./pages/BecomeAPartner.jsx";
import BusinessFinancing from "./pages/BusinessFinancing.jsx";
import About from "./pages/About.jsx";
import Support from "./pages/Support.jsx";
import Guides from "./pages/Guides.jsx";
import GuideDetail from "./pages/GuideDetail.jsx";
import Login from "./pages/Login.jsx";
import CustomerLogin from "./pages/CustomerLogin.jsx";
import PartnerLogin from "./pages/PartnerLogin.jsx";
import Legal from "./pages/Legal.jsx";
import NotFound from "./pages/NotFound.jsx";

// Bridges GET-failure notifications from src/api/client.js (plain JS, no
// React context) into the existing toast system. Must render inside
// ToastProvider, since App() itself is not — ToastProvider is created here.
function ApiErrorBridge() {
  const { showToast } = useToast();

  useEffect(() => {
    registerErrorHandler((message) => showToast({ type: "error", message }));
  }, [showToast]);

  return null;
}

// react-router v7's <Navigate to> can't interpolate a route param directly,
// so read it here and build the target path.
function RedirectPartnerStoresCity() {
  const { city } = useParams();
  return <Navigate to={`/partners/${city}`} replace />;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <ApiErrorBridge />
        <ScrollToTop />
        <ScrollToHash />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smartphone-protection" element={<SmartphoneProtection />} />
            <Route path="/buy-now-get-protected-pay-later" element={<BuyNow />} />
            <Route path="/fix-now-get-protected-pay-later" element={<FixNow />} />
            <Route path="/protection-calculator" element={<ProtectionCalculatorPage />} />
            <Route path="/partners" element={<PartnerStores />} />
            <Route path="/partners/:city" element={<PartnerStores />} />
            <Route path="/partner-stores" element={<Navigate to="/partners" replace />} />
            <Route path="/partner-stores/:city" element={<RedirectPartnerStoresCity />} />
            <Route path="/supported-devices" element={<SupportedDevices />} />
            <Route path="/supported-devices/:brand" element={<BrandDevices />} />
            <Route path="/supported-devices/:brand/:model" element={<ModelDetail />} />
            <Route path="/become-a-partner" element={<BecomeAPartner />} />
            <Route path="/business-financing" element={<BusinessFinancing />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:slug" element={<GuideDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/customer-login" element={<CustomerLogin />} />
            <Route path="/partner-login" element={<PartnerLogin />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/protection-terms" element={<Legal type="protection-terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ToastProvider>
    </MotionConfig>
  );
}
