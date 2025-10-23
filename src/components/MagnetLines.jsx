import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function MagnetLines({
  text = "",
  animateBy = "words",
  lineColor = "#00ffea",
  lineWidth = "0.6vmin",
  lineHeight = "5vmin",
  baseAngle = -10,
  rotationFactor = 0.15,
  className = "",
  style = {},
}) {
  const containerRef = useRef(null);
  const segments = animateBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    const items = containerRef.current.querySelectorAll("span");

    // Fade-in lines with GSAP
    gsap.set(items, { opacity: 0, y: 20 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.02,
      ease: "power3.out",
    });

    const onPointerMove = (pointer) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const dx = pointer.x - centerX;
        const dy = pointer.y - centerY;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        gsap.to(item, {
          rotation: baseAngle + angle * rotationFactor,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    };

    window.addEventListener("pointermove", onPointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [baseAngle, rotationFactor, text]);

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-auto-fit justify-center items-center ${className}`}
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(1vmin, 1fr))",
        gap: "0.6vmin",
        ...style,
      }}
    >
      {segments.map((seg, i) => (
        <span
          key={i}
          style={{
            backgroundColor: lineColor,
            width: lineWidth,
            height: lineHeight,
            display: "inline-block",
            transform: `rotate(${baseAngle}deg)`,
            willChange: "transform",
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
}
