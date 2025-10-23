    import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BlurText = ({
  text = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top",    // animation direction
  delay = 0.05,         // stagger delay in seconds
  className = "",
  isSharp = false       // prop to make text sharp
}) => {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Split text by words or letters
  const segments = animateBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    const spans = containerRef.current.querySelectorAll(".blur-span");

    // Initial blurred + fade + position
    gsap.set(spans, {
      filter: "blur(10px)",
      opacity: 0,
      y: direction === "top" ? -40 : 40,
    });

    // Animate into view
    gsap.to(spans, {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: delay,
    });
  }, [text, direction, delay]);

  useEffect(() => {
    const spans = containerRef.current.querySelectorAll(".blur-span");

    if (hovered || isSharp) {
      // Make text sharp
      gsap.to(spans, {
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      // Restore slight blur
      gsap.to(spans, {
        filter: "blur(4px)",
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [hovered, isSharp]);

  return (
    <p
      ref={containerRef}
      className={`blur-text flex flex-wrap justify-center ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {segments.map((seg, i) => (
        <span
          key={i}
          className="blur-span inline-block mr-1 will-change-[filter,transform,opacity]"
        >
          {seg === " " ? "\u00A0" : seg}
        </span>
      ))}
    </p>
  );
};

export default BlurText;
