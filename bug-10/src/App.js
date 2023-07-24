import React, { useState, useEffect } from "react";

function Fetcher() {
  const [clicks, setClicks] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const result = [
        {
          category: "cat1",
          description: "desc1",
          id: "1546514491119",
          name: "randomname2",
          photo: null,
          rating: "3",
        },
        {
          category: "cat2",
          description: "desc1",
          id: "1546837819818",
          name: "randomname1",
          rating: "5",
        },
      ];
      console.log("result =", result);
      setMovies(result);
      console.log("movies =", movies);
    } catch (e) {
      console.error(e);
    }
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>CLICK</button>
    </div>
  );
}

export default Fetcher;
