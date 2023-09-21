```javascript
import React, { useEffect, useState } from 'react';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommendations from the server
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('/api/recommendations');
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((recommendation) => (
            <li key={recommendation.id}>{recommendation.name}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available</p>
      )}
    </div>
  );
};

export default Recommendations;
```
This code generates the code for the file `client/src/components/Recommendations.js`. It imports the necessary dependencies, sets up a functional component `Recommendations`, and fetches personalized recommendations from the server using the `useEffect` hook. The fetched recommendations are stored in the `recommendations` state variable and rendered in a list if available. If no recommendations are available, a message is displayed. Finally, the `Recommendations` component is exported as the default export.