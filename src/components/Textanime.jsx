import React, { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin); // Register the TextPlugin

const words = ["Jesse.", "A Father.", "A Husband.", "A Developer."];

function Textanime() {
  useEffect(() => {
    // Initialize the cursor animation
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    // Create the master timeline for all animations
    let masterTl = gsap.timeline({ repeat: -1 }).pause();
    let boxTl = gsap.timeline();

    boxTl
      .to(".box", {
        duration: 2,
        width: "17vw",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .to(".box", {
        duration: 2,
        height: "7vw",
        ease: "elastic.out",
        onComplete: () => masterTl.play(),
      })
      .to(".box", {
        duration: 2,
        autoAlpha: 0.7,
        yoyo: true,
        repeat: -1,
        ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
      });

    words.forEach((word, index) => {
      let tl = gsap.timeline({ repeat: 0, yoyo: false, repeatDelay: 1 });
      tl.to(".text", {
        duration: 2,
        text: word,
        onComplete: index === words.length - 1 ? () => masterTl.play() : null,
      });
      masterTl.add(tl);
    });
  }, []); // Empty dependency array to ensure this only runs once

  return (
    <div>
      <h1>
        <span className="box"></span>
        <span className="text"></span>
        <span className="cursor">_</span>
      </h1>
    </div>
  );
}

export default Textanime;
