import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 2,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset timer when it reaches 0
          return { minutes: 2, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="text-3xl mb-2">⏰</div>
      <p className="text-lg mb-4 animate-pulse">
        CHEGIRMA TUGAYDI!
      </p>
      <div className="flex justify-center items-center space-x-4">
        <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
          <div className="text-3xl">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm opacity-80">daqiqa</div>
        </div>
        <div className="text-2xl animate-ping">:</div>
        <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
          <div className="text-3xl">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm opacity-80">soniya</div>
        </div>
      </div>
      <p className="text-sm mt-4 opacity-90">
        Tezroq ro'yhatdan o'ting!
      </p>
    </div>
  );
}