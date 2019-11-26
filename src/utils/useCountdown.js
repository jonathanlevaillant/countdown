import { useState, useEffect } from 'react';

import { getDuration } from './duration';

const useCountdown = (lastUpdate, recurrence) => {
  const [countdown, setCountdown] = useState(getDuration(lastUpdate, recurrence));

  useEffect(() => {
    setCountdown(getDuration(lastUpdate, recurrence));

    const timer = setInterval(() => setCountdown(getDuration(lastUpdate, recurrence)), 1000);

    return () => clearInterval(timer);
  }, [lastUpdate, recurrence]);

  return countdown;
};

export default useCountdown;
