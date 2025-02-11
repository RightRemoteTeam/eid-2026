import React, { useEffect, useRef, useState } from "react"
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/discover2.scss"

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverSection2() {
    return (
        <>
            <section className="discover2">
                <h1>Discover 2</h1>
            </section>
        </>
    )
}