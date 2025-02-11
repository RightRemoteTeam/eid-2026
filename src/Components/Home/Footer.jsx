import React, { useEffect, useRef, useState } from "react"
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/footer.scss"

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    return (
        <>
            <section className="footer">
                <h1>Footer</h1>
            </section>
        </>
    )
}