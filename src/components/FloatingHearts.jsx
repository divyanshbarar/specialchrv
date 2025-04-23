import { useState, useEffect } from "react";

// Floating Hearts Component
const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create floating hearts
    const colors = [
      "#ff6b6b",
      "#ff8e8e",
      "#ffa5a5",
      "#ffcbc0",
      "#feb9b9",
      "#ff7e7e",
    ];
    const newHearts = [];

    for (let i = 0; i < 50; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100,
        y: -20 - Math.random() * 100,
        size: 8 + Math.random() * 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.5 + Math.random() * 1.5,
        rotation: Math.random() * 360,
        opacity: 0.5 + Math.random() * 0.5,
      });
    }

    setHearts(newHearts);

    // Animation loop
    const interval = setInterval(() => {
      setHearts((prevHearts) => {
        return prevHearts.map((h) => {
          // Reset hearts that go off screen
          if (h.y > 100) {
            return {
              ...h,
              y: -20 - Math.random() * 10,
              x: Math.random() * 100,
            };
          }

          // Move hearts down with a slight sway
          return {
            ...h,
            y: h.y + h.speed / 2,
            x: h.x + Math.sin(h.y / 10) * 0.3,
            rotation: (h.rotation + 0.5) % 360,
          };
        });
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            background: h.color,
            transform: `rotate(${h.rotation}deg)`,
            opacity: h.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
