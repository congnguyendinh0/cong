import React, { useState, useEffect } from "react";


function Joke(props) {
  useEffect(() => {
    fetchJoke();
  }, []);

  const [joke, setJoke] = useState([]);

  const fetchJoke= async () => {

  };

  return (
    <div>
      <h1>Api doesn't support this endpont yet :('</h1>

    </div>
  );
}
export default Joke;
