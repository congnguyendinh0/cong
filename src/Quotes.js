import React, { useState, useEffect } from "react";
import 'fontsource-roboto';
import {Badge} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function Quotes(props) {




  useEffect(() => {
    fetchQuotes();
  }, []);

  const [quotes, setQuotes] = useState({});

  const [count,setCount] = useState(0);

  const fetchQuotes = async () => {
    const data = await fetch(
      "https://api.kanye.rest/"
    );

    const quotes = await data.json();
    console.log(quotes);
    setQuotes(quotes);
  };

  return (
    <div>
        
        <h2> Kanye West Jokes:   {quotes.quote}</h2>
        <p>How much do you like this quote? You liked it {count}</p>
  <button onClick={()=> setCount(count+1)}>Like = {count}</button>

  <Badge badgeContent={count} color="primary">
  <ThumbUpIcon />
</Badge>
       
    </div>
  );
}
export default Quotes;
