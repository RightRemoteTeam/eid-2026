import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import PreparationSection from "../Components/Home/PreparationSection";
import HappinessSection from "../Components/Home/HappinessSection";
import OudSection from "../Components/Home/OudSection";
import FamilySection from "../Components/Home/FamilySection";
import ButtonSection from "../Components/Home/ButtonSection";
import GreetingsCard from "../Components/Home/GreetingsCard";
import Ride from "../Components/Home/Ride";
import Money from "../Components/Home/Money";
import Quote from "../Components/Home/Quote";
import AudioPermissionModal from "../Components/Home/AudioPermissionModal";
export default function Home() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [audioEnabled, setAudioEnabled, pageLoaded] = useOutletContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (pageLoaded) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 1500);
    }
  }, [pageLoaded]);

  const handleEnableAudio = () => {
    console.log('pop up close triggered');
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
      <PreparationSection />
      <HappinessSection />
      <div className="takbeerSound" ref={sectionRef}>
        <OudSection sectionRef={sectionRef} />
        <ButtonSection />
      </div>
      <FamilySection sectionRef={sectionRef} />
      <GreetingsCard />
      <Ride />
      <Money />
      <Quote />
    </>
  );
}
