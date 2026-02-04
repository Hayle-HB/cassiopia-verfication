import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CertificateEntry from "./pages/CertificateEntry";
import CertificateVerification from "./pages/CertificateVerification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificate" element={<CertificateEntry />} />
        <Route path="/certificate/:id" element={<CertificateVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
