import { useState, useEffect } from "react";

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    // Create confetti pieces
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
      "#ff8800",
      "#8800ff",
      "#00ff88",
      "#ff0088",
    ];
    const shapes = ["square", "circle", "triangle", "rectangle"];
    const newPieces = [];

    for (let i = 0; i < 150; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        y: -20 - Math.random() * 100,
        size: 5 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        speed: 1 + Math.random() * 3,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() > 0.5 ? 1 : -1,
        horizontalSpeed: (Math.random() - 0.5) * 2,
      });
    }

    setConfettiPieces(newPieces);

    // Animation loop
    const interval = setInterval(() => {
      setConfettiPieces((prevPieces) => {
        return prevPieces.map((p) => {
          // Move confetti down and sideways
          return {
            ...p,
            y: p.y + p.speed,
            x: p.x + p.horizontalSpeed * 0.2,
            rotation: (p.rotation + p.rotationSpeed * 2) % 360,
          };
        });
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const renderShape = (piece) => {
    const style = {
      position: "absolute",
      left: `${piece.x}%`,
      top: `${piece.y}%`,
      width: `${piece.size}px`,
      height: `${piece.size}px`,
      backgroundColor: piece.color,
      transform: `rotate(${piece.rotation}deg)`,
      opacity: 0.8,
    };

    switch (piece.shape) {
      case "circle":
        return (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{ ...style, borderRadius: "50%" }}
          />
        );
      case "triangle":
        return (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{
              ...style,
              backgroundColor: "transparent",
              width: 0,
              height: 0,
              borderLeft: `${piece.size / 2}px solid transparent`,
              borderRight: `${piece.size / 2}px solid transparent`,
              borderBottom: `${piece.size}px solid ${piece.color}`,
            }}
          />
        );
      case "rectangle":
        return (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{
              ...style,
              width: `${piece.size * 1.5}px`,
              height: `${piece.size * 0.5}px`,
            }}
          />
        );
      default:
        return <div key={piece.id} className="confetti-piece" style={style} />;
    }
  };

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => renderShape(piece))}
    </div>
  );
};

export default Confetti;
