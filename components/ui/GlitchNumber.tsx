import { useEffect, useState } from "react";

export function GlitchNumber({ targetValue, duration = 1500, stepTime = 30 }: { targetValue: number; duration?: number; stepTime?: number }) {
  const [displayValue, setDisplayValue] = useState("0.0");
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;
    const randomize = () => setDisplayValue((Math.random() * targetValue * 2).toFixed(1));
    intervalId = setInterval(randomize, stepTime);
    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setDisplayValue(targetValue.toFixed(1));
    }, duration);
    return () => { clearInterval(intervalId); clearTimeout(timeoutId); };
  }, [targetValue, duration, stepTime]);
  return <span>{displayValue}</span>;
}