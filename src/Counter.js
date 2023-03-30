import React, { useState, useEffect } from 'react';

const Counter = ({ from, to }) => {
	  const [batchStart, setBatchStart] = useState(from);
	  const [batchEnd, setBatchEnd] = useState(from + 100);

	  useEffect(() => {
		      if (batchEnd < to) {
			            const timeoutId = setTimeout(() => {
					            setBatchStart(batchEnd);
					            setBatchEnd(batchEnd + 100);
					          }, 0);

			            return () => clearTimeout(timeoutId);
			          }
		    }, [batchStart, batchEnd, to]);

	  const consecutiveNumbers = [...Array(batchEnd - batchStart).keys()].map(i => i + batchStart);

	  return (
		      <div>
		        {consecutiveNumbers.map(n => <p key={n}>{n}</p>)}
		      </div>
		    );
};

export default Counter;

