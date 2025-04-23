import React from "react";

const RomanticCard = () => (
  <div className="romanticCard">
    <div className="cardFront">
      <h3 className="cardTitle">For My Charvi</h3>
      <div className="cardDesign">
        <div className="heartOne" />
        <div className="heartTwo" />
        <div className="heartThree" />
      </div>
      <p className="hint">Click to open</p>
    </div>
    <div className="cardInside">
      <h3 className="insideTitle">My Dearest Bubsie</h3>
      <div className="letter">
        <p>
          Just wanted to say—you mean the world to me. Every single day, not
          just today.
        </p>
        <p>
          Your smile brightens my day, your voice makes everything feel better.
          Just being with you makes life sweeter.
        </p>
        <p>
          You understand me like no one else, and I love the way you care so
          deeply.
        </p>
        <p>Thank you for being you. I’m lucky to have you in my life.</p>
        <p className="signature">
          Always yours,
          <br />
          Divyansh
        </p>
      </div>
    </div>
  </div>
);

export default RomanticCard;
