import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);
  const letters = "A1B2C3D4E5F6G7H8I9J0KL@M#N$O%P^Q&R*S-T_U+V+WXYZ";
  const handleMouseEnter = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      textRef.current.innerText = textRef.current.innerText
        .split("")
        .map((element, index) => {
          if (index < iterations) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iterations === textRef.current.innerText.length + 1) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);
  };
  useEffect(() => {
    handleMouseEnter();
  }, []);
  return (
    <p
      className="animated-text-container"
      ref={textRef}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </p>
  );
};

export default AnimatedText;
