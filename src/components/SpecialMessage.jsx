import React from "react";

const SpecialMessage = ({ onClose }) => {
  return (
    <div className="message-modal">
      <div className="message-content">
        <h2>To My Dearest Charvi</h2>
        <p>
          I just wanted to take a moment to tell you how much you truly mean to
          me. You bring something into my life that’s hard to put into
          words—this warmth, this light, this feeling that everything’s okay as
          long as you’re around.
        </p>
        <p>
          I see how much love you pour into everything you do—whether it’s
          taking care of your family, showing up for your friends, or making
          sure I always have a reason to smile. You give so much of yourself to
          others, and you do it with this beautiful, genuine heart.
        </p>
        <p>
          I also see the sensitive side of you that feels deeply, that worries
          when someone’s upset, that carries more than you ever let on. That
          part of you makes me go for you even more.
        </p>
        <p>
          You always try to keep everyone happy, and somehow, you still manage
          to make me feel like I’m your number one. I notice that. I feel it.
          And I want you to know—it means everything to me.
        </p>
        <p>
          Thank you for being my person. For all your little efforts, your big
          heart, and for loving me in the way only you can. I don’t know what I
          did to deserve you, but I promise to never take it for granted.
        </p>
        <p>
          You’re not just the reason behind my smile—you’re the calm in my
          chaos, the fun in my ordinary, and the home I didn’t know I needed
          until I found you.
        </p>
        <p className="signature">
          Always with you,
          <br />
          Your Babygurl
        </p>

        <button className="close-button" onClick={onClose}>
          ❤️ Close ❤️
        </button>
      </div>
    </div>
  );
};

export default SpecialMessage;
