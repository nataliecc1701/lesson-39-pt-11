function formatPlayingCard(cardData) {
    console.log(cardData.cards[0]);
    const image = cardData.cards[0].image
    return { image }
}

export default formatPlayingCard;