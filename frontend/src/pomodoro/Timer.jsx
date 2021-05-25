import { useEffect, useState } from "react";
import { padStart } from "lodash";

const MINUTE = 60;

const MODES = {
  WORK: {
    duration: 25 * MINUTE,
    label: "Work",
  },
  SHORT_BREAK: {
    duration: 5 * MINUTE,
    label: "Short break",
  },
  LONG_BREAK: {
    duration: 15 * MINUTE,
    label: "Long break",
  },
};

const formatNumberClock = (n) => padStart(n, 2, "0");
const formatTime = (time) => {
  const minutes = Math.floor(time / MINUTE);
  const seconds = time % MINUTE;
  return `${formatNumberClock(minutes)}:${formatNumberClock(seconds)}`;
};

let interval;
const Timer = () => {
  const [mode, setMode] = useState("WORK");
  const [timeLeft, setTimeLeft] = useState(MODES.WORK.duration);

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  const changeMode = (modeKey) => {
    clearInterval(interval);
    setMode(modeKey);
    setTimeLeft(MODES[modeKey].duration);
  };

  const handleTick = () => {
    setTimeLeft((timeLeft) => {
      if (timeLeft < 1) {
        changeMode("WORK");
        return 0;
      }
      return timeLeft - 1;
    });
  };

  const startClock = () => {
    interval = setInterval(handleTick, 1000);
  };

  return (
    <div>
      {mode}
      <div>
        {Object.entries(MODES).map(([key, mode]) => (
          <button key={key} onClick={() => changeMode(key)}>
            {mode.label}
          </button>
        ))}
      </div>
      {formatTime(timeLeft)}
      <button onClick={startClock}>Start</button>
    </div>
  );
};

export default Timer;
