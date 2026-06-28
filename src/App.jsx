import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import BestPicks from "./pages/BestPicks";
import SetupIdeas from "./pages/SetupIdeas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/best-picks" element={<BestPicks />} />
          <Route path="/setup-ideas" element={<SetupIdeas />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/affiliate-disclosure"
            element={<AffiliateDisclosure />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
