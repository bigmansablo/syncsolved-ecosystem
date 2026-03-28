import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Research from "./pages/research";
import DependencyTrap from "./pages/research/dependency-trap";
import VelocityArchitecturePage from "./pages/research/velocity-architecture";
import LaborEconomics from "./pages/research/labor-economics";
import Process from "./pages/process";
import GlobalPresence from "./pages/global";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import AuditRequested from "./pages/audit-requested";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/dependency-trap" element={<DependencyTrap />} />
          <Route path="/research/velocity-architecture" element={<VelocityArchitecturePage />} />
          <Route path="/research/labor-economics" element={<LaborEconomics />} />
          <Route path="/process" element={<Process />} />
          <Route path="/global" element={<GlobalPresence />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/audit-requested" element={<AuditRequested />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
