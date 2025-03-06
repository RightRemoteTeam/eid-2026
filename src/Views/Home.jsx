import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import AudioPermissionModal from "../Components/Home/AudioPermissionModal";
import HeroSection from "../Components/Home/HeroSection";
import FamilySection from "../Components/Home/FamilySection";
import GreetingsCard from "../Components/Home/GreetingsCard";
import DiscoverSection from "../Components/Home/DiscoverSection";
export default function Home() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [setAudioEnabled, pageLoaded] = useOutletContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   if (pageLoaded) {
  //     setTimeout(() => {
  //       // Audio permission modal disabled for phase 1
  //       setIsModalOpen(false);
  //     }, 1500);
  //   }
  // }, [pageLoaded]);

  const handleEnableAudio = () => {
    console.log("pop up close triggered");
    setAudioEnabled(true);
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <AudioPermissionModal
        isOpen={isModalOpen}
        message={t("modal.audio_permission_error")}
        onConfirm={handleEnableAudio}
      /> */}
      <HeroSection />
      <GreetingsCard />
      <DiscoverSection />
      {/* <FamilySection sectionRef={sectionRef} /> */}
    </>
  );
}
