import { useState, useEffect } from 'react';

const useCountdownIsOver = countdown => {
  const [countdownIsOver, setCountdownIsOver] = useState(false);

  useEffect(() => setCountdownIsOver(countdown.asSeconds() <= 0), [countdown]);

  return countdownIsOver;
};

export default useCountdownIsOver;
