import React, { useState, useEffect } from 'react';

const PageVisitCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const storedCounter = localStorage.getItem('pageVisitCounter');
    if (storedCounter) {
      setCounter(parseInt(storedCounter));
    } else {
      localStorage.setItem('pageVisitCounter', counter.toString());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pageVisitCounter', counter.toString());
  }, [counter]);

  return (
    <div>
      <h1>Page Visit Counter</h1>
      <p>Number of visits: {counter}</p>
    </div>
  );
};

export default PageVisitCounter;
