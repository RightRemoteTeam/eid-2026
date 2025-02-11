import React from "react";
import { useTranslation } from "react-i18next";

import PreparationSection from "../Components/Home/PreparationSection";
import HappinessSection from "../Components/Home/HappinessSection";
import OudSection from "../Components/Home/OudSection";
import FamilySection from "../Components/Home/FamilySection";
import ButtonSection from "../Components/Home/ButtonSection";
import GreetingsCard from "../Components/Home/GreetingsCard";
import Ride from "../Components/Home/Ride";
import Money from "../Components/Home/Money";
import Quote from "../Components/Home/Quote";

export default function Home() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <PreparationSection />
            <HappinessSection />
            <OudSection />
            <ButtonSection />
            <FamilySection />
            <GreetingsCard />
            <Ride />
            <Money />
            <Quote />
        </>
    )
}
