import React, { useEffect, useState } from "react";

const ProgressBarTimer: React.FC<{ duration: number; onComplete?: () => void }> = ({
  duration,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const progress = (timeLeft / duration) * 100;

  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        backgroundColor: "#444",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "red",
          transition: "width 1s linear",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {timeLeft} seconds left
      </span>
    </div>
  );
};

export default ProgressBarTimer;