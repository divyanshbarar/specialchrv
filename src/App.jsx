import "./App.css";
import { useState } from "react";
import FloatingHearts from "./components/FloatingHearts";
import Confetti from "./components/Confetti";
import RomanticCard from "./components/RomanticCard";
import SpecialMessage from "./components/SpecialMessage";

// Main App Component
export default function App() {
  const [step, setStep] = useState(1);
  const [passPhrase, setPassphrase] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCorrectPassword = () => {
    setStep(3);
    setShowConfetti(true);
    // Hide confetti after 8 seconds
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <div className="app-container">
      <FloatingHearts />
      {showConfetti && <Confetti />}

      {step === 1 && (
        <div className="welcome-container">
          <h1 className="title">For Someone Special</h1>
          <p className="subtitle">A little something just for you, Bubsie</p>
          <button className="primary-button" onClick={() => setStep(1.5)}>
            Begin Journey ❤️
          </button>
        </div>
      )}

      {step === 1.5 && (
        <div className="welcome-container">
          <h2 className="title">One Quick Question</h2>
          <p className="subtitle">
            To make sure it's you, cutesie...
            <br />
            What do you call me pyaar me?
          </p>

          <input
            className="input-field"
            placeholder="Enter the name"
            type="text"
            onChange={(e) => setPassphrase(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && passPhrase === "Babygurl") {
                handleCorrectPassword();
              }
            }}
          />
          <button
            className={`primary-button ${
              passPhrase !== "Babygurl" ? "disabled" : ""
            }`}
            disabled={passPhrase !== "Babygurl"}
            onClick={handleCorrectPassword}
          >
            Open My Heart
          </button>
          <p className="hint-text">
            <b>Hint:</b> It's a 8 letter name <br />
            (snap wala and case sensitive).
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="card-container-fullscreen">
          <RomanticCard />
          <button
            className="message-button"
            onClick={() => setShowMessage(true)}
          >
            Special Message
          </button>
          {showMessage && (
            <SpecialMessage onClose={() => setShowMessage(false)} />
          )}
        </div>
      )}
    </div>
  );
}
