```javascript
import React, { useState, useEffect } from 'react';

const BettingHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch betting history from the server
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/bets');
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error('Error fetching betting history:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Betting History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((bet) => (
            <li key={bet.id}>
              <p>Game: {bet.game}</p>
              <p>Amount: {bet.amount}</p>
              <p>Result: {bet.result}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No betting history available.</p>
      )}
    </div>
  );
};

export default BettingHistory;
```
This is the code for the file `client/src/components/BettingHistory.js`. It is a functional component that displays the user's betting history.

The component uses the `useState` and `useEffect` hooks from React to manage the state and fetch the betting history from the server.

Inside the `useEffect` hook, the component makes an asynchronous request to the `/api/bets` endpoint to fetch the betting history data. The response is then converted to JSON and stored in the `history` state using the `setHistory` function.

The component renders a heading "Betting History" and conditionally renders either the betting history list or a message indicating that no betting history is available.

If there is betting history available, the component maps over the `history` array and renders a list item for each bet. Each list item displays the game, amount, and result of the bet.

Finally, the `BettingHistory` component is exported as the default export of the file.

Please note that this code assumes the existence of an API endpoint `/api/bets` that returns the betting history data in the expected format. You will need to implement this endpoint on the server side as part of the backend development process.