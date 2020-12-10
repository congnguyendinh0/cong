import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Jokes(props) {
  useEffect(() => {
    fetchJokes();
  }, []);

  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    const data = await fetch(
      "https://official-joke-api.appspot.com/random_ten"
    );

    const jokes = await data.json();
    console.log(jokes);
    setJokes(jokes);
  };

  return (
    <div>
      {jokes.map((joke) => (
        <div>
          <h3 key={joke.id}>
            <Link to={`/jokes/${joke.id}`}> Set Up:{joke.setup}</Link>
          </h3>
      <details>{joke.punchline}</details>
        </div>
      ))}
    </div>
  );
}
export default Jokes;
