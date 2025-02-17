import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import HeroSection from "../Components/Home/HeroSection";
import HappinessSection from "../Components/Home/HappinessSection";
import DiscoverSection from "../Components/Home/DiscoverSection";
import Footer from "../Components/Home/Footer";
import OudSection from "../Components/Home/OudSection";
import FamilySection from "../Components/Home/FamilySection";
import ButtonSection from "../Components/Home/ButtonSection";
import GreetingsCard from "../Components/Home/GreetingsCard";
import Money from "../Components/Home/Money";
import AudioPermissionModal from "../Components/Home/AudioPermissionModal";
export default function Home() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [setAudioEnabled, pageLoaded] = useOutletContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (pageLoaded) {
      setTimeout(() => {
        // Audio permission modal disabled for phase 1
        setIsModalOpen(false);
      }, 1500);
    }
  }, [pageLoaded]);

  const handleEnableAudio = () => {
    console.log("pop up close triggered");
    setAudioEnabled(true);
    setIsModalOpen(false);
  };
  return (
    <>
      <AudioPermissionModal
        isOpen={isModalOpen}
        message={t("modal.audio_permission_error")}
        onConfirm={handleEnableAudio}
      />
      <HeroSection />
      <GreetingsCard />
      <DiscoverSection />
      <Footer />
      <HappinessSection />
      <div className="takbeerSound" ref={sectionRef}>
        <OudSection sectionRef={sectionRef} />
        <ButtonSection />
      </div>
      <FamilySection sectionRef={sectionRef} />
      <Money />
      {/* <Quote /> */}
    </>
  );
}
