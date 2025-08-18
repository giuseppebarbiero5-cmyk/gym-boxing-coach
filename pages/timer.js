import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(180); // 3 minuti
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const resetTimer = () => {
    setTime(180);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">⏱️ Round Timer</h1>
      <p className="text-6xl font-mono mb-8">{time}s</p>

      <div className="flex gap-4">
        <button
          onClick={() => setIsRunning(true)}
          className="bg-green-600 px-6 py-3 rounded-xl"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="bg-yellow-600 px-6 py-3 rounded-xl"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-600 px-6 py-3 rounded-xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
