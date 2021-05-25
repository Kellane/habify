import { useEffect, useState } from "react";
import { padStart } from "lodash";
import { Button } from "../ui";

const MINUTE = 60;

const MODES = {
  WORK: {
    duration: (25 / 50) * MINUTE,
    label: "Work",
  },
  SHORT_BREAK: {
    duration: (5 / 50) * MINUTE,
    label: "Short break",
  },
  LONG_BREAK: {
    duration: (15 / 50) * MINUTE,
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
const Timer = ({ task, onBack = () => {}, onFinish = () => {} }) => {
  const [mode, setMode] = useState("WORK");
  const [timeLeft, setTimeLeft] = useState(MODES.WORK.duration);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  const changeMode = (modeKey) => {
    clearInterval(interval);
    setMode(modeKey);
    setTimeLeft(MODES[modeKey].duration);
    setIsPlaying(false);
  };

  const handleTick = () => {
    setTimeLeft((timeLeft) => {
      if (timeLeft < 1) {
        changeMode(mode);
        return 0;
      }
      return timeLeft - 1;
    });
  };

  const startClock = () => {
    setIsPlaying(true);
    interval = setInterval(handleTick, 1000);
  };

  const stopClock = () => {
    changeMode(mode);
  };

  return (
    <div className="rounded-xl shadow-md w-5/12">
      <div className="bg-white p-5 mt-5">
        {task && (
          <h2 className="text-5xl text-primary text-center font-bold mb-4">
            {task.title}
          </h2>
        )}
        <div className="py-3 text-center mb-4">
          {Object.entries(MODES).map(([key, modeI]) => (
            <Button
              key={key}
              type={key === mode ? "primary" : "default"}
              disabled={isPlaying}
              className={`${isPlaying && (key === mode ? "" : "opacity-50")} ${
                isPlaying ? "cursor-default" : ""
              }`}
              onClick={() => changeMode(key)}
            >
              {modeI.label}
            </Button>
          ))}
        </div>
        <div className="text-6xl text-center my-5">{formatTime(timeLeft)}</div>
        <div className="py-3 text-center mb-1">
          <Button type="default" onClick={stopClock} disabled={!isPlaying}>
            Stop
          </Button>
          <Button type="success" onClick={startClock} disabled={isPlaying}>
            Start
          </Button>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 text-right">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onFinish}>Finish Task</Button>
      </div>
    </div>
  );
};

export default Timer;
