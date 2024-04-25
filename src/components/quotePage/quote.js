import React from "react";
import "../quotePage/quote.css";
const json = [
  {
    author: "John Smith",
    description:
      "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
  },
  {
    author: "Jane Doe",
    description:
      "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
  },
  {
    author: "Albert Einstein",
    description:
      "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
  },
  {
    author: "Mahatma Gandhi",
    description:
      "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
  },
  {
    author: "Julia Child",
    description:
      "The only time to eat diet food is while you're waiting for the steak to cook.",
  },
  {
    author: "Mark Twain",
    description:
      "Part of the secret of success in life is to eat what you like and let the food fight it out inside.",
  },
  {
    author: "Oscar Wilde",
    description:
      "After a good dinner one can forgive anybody, even one's own relations.",
  },
  {
    author: "Virginia Woolf",
    description:
      "One cannot think well, love well, sleep well, if one has not dined well.",
  },
];


const QuotePage = () => {
  return (
    <div className="quote">
      {json.map((item, index) => (
        <div className="box" key={index}>
          <p>{item.description}</p>
          <h3>{item.author}</h3>
        </div>
      ))}
    </div>
  );
};

export default QuotePage;