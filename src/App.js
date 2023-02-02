import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Business from "./pages/Business/Business";
import Home from "./pages/Home/Home";
import Network from "./pages/Network/Network";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About/About";
import Contact from "./pages/ContactUs/Contact";
import FAQ from "./pages/FAQ";
import TermsAndCondition from "./pages/TermsAndCondition";
import PricingAndBilling from "./pages/PricingAndBilling";
import Award from "./pages/Award/Award";
import HowItWorks from "./pages/HowItWorks/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/">
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="business" element={<Business />} />
            <Route path="network" element={<Network />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="terms" element={<TermsAndCondition />} />
            <Route path="pricing" element={<PricingAndBilling />} />
            <Route path="award" element={<Award />} />
            <Route path="how-it-works" element={<HowItWorks />} />
          </Route>
          <Route path="Modal" element={<>Modal</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
