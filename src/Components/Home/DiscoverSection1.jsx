import React, { useEffect, useRef, useState } from "react"
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/discover1.scss"

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverSection1() {
    return (
        <>
            <section className="discover1">
                <h1>Discover 1</h1>
            </section>
        </>
    )
}