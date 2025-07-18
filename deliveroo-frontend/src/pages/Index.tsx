import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import DemoModal from "@/components/DemoModal";
import MpesaPayment from "@/components/MpesaPayment";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FunctionalFeatures from "@/components/FunctionalFeatures";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";


const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showMpesaPayment, setShowMpesaPayment] = useState(false);

  const handleGetStarted = () => {
    setShowMpesaPayment(true);
  };

  const handleSignUpSuccess = () => {
    setShowMpesaPayment(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
      <Header
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />
      <Hero
        onGetStartedClick={handleGetStarted}
        onWatchDemoClick={() => setShowDemo(true)}
      />
      <Features />
      <FunctionalFeatures />
      <Stats />
      <Pricing />
      <Contact />

      <LoginModal open={showLogin} onOpenChange={setShowLogin} />
      <SignupModal
        open={showSignup}
        onOpenChange={setShowSignup}
        onSignUpSuccess={handleSignUpSuccess}
      />
      <DemoModal open={showDemo} onOpenChange={setShowDemo} />
      <MpesaPayment open={showMpesaPayment} onOpenChange={setShowMpesaPayment} />
    </div>
  );
};

export default Index;