import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import useAxios from "./useAxios";
import formatPlayingCard from "./formatPlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clear] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw",
    formatPlayingCard
  );
  const handleButtonClick = (evt) => {
    addCard();
  }
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleButtonClick}>Add a playing card!</button>
        <button onClick={clear}>Clear all cards</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
