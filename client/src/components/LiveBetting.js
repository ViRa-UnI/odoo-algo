```javascript
import React, { useState, useEffect } from 'react';

const LiveBetting = () => {
  const [liveEvents, setLiveEvents] = useState([]);

  useEffect(() => {
    // Fetch live events from the server
    const fetchLiveEvents = async () => {
      try {
        const response = await fetch('/api/live-events');
        const data = await response.json();
        setLiveEvents(data);
      } catch (error) {
        console.error('Error fetching live events:', error);
      }
    };

    fetchLiveEvents();
  }, []);

  return (
    <div>
      <h2>Live Betting</h2>
      {liveEvents.length > 0 ? (
        <ul>
          {liveEvents.map((event) => (
            <li key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <button>Place Bet</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No live events available</p>
      )}
    </div>
  );
};

export default LiveBetting;
```
This is the code for the file `client/src/components/LiveBetting.js`. It is a functional component that displays a list of live events for betting. It fetches the live events from the server using the `/api/live-events` endpoint and updates the state with the fetched data. The live events are then rendered in a list with their name, description, and a "Place Bet" button. If there are no live events available, a message is displayed instead.