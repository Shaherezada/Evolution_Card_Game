const { readEvolutionCardsFromFile, writeEvolutionCardsToFile } = require('./cardFileService');

function getAllEvolutionCards(cardNameFilter) {
    const allCards = readEvolutionCardsFromFile();
    if (cardNameFilter) {
        const cardNameLower = cardNameFilter.toLowerCase();
        return allCards.filter(card =>
            card.name.toLowerCase().includes(cardNameLower) ||
            card.nameEn.toLowerCase().includes(cardNameLower)
        );
    }
    return allCards;
}

function getEvolutionCardById(cardId) {
    const allCards = readEvolutionCardsFromFile();
    return allCards.find(card => card.id === cardId) || null;
}

function createEvolutionCard(cardData) {
    const allCards = readEvolutionCardsFromFile();
    const newCardId = allCards.length > 0
        ? Math.max(...allCards.map(card => card.id)) + 1
        : 1;
    const newCard = { id: newCardId, ...cardData };
    allCards.push(newCard);
    writeEvolutionCardsToFile(allCards);
    return newCard;
}

function updateEvolutionCard(cardId, cardUpdates) {
    const allCards = readEvolutionCardsFromFile();
    const cardIndex = allCards.findIndex(card => card.id === cardId);
    if (cardIndex === -1) return null;
    allCards[cardIndex] = { ...allCards[cardIndex], ...cardUpdates, id: cardId };
    writeEvolutionCardsToFile(allCards);
    return allCards[cardIndex];
}

function deleteEvolutionCard(cardId) {
    const allCards = readEvolutionCardsFromFile();
    const cardIndex = allCards.findIndex(card => card.id === cardId);
    if (cardIndex === -1) return null;
    const deletedCard = allCards.splice(cardIndex, 1)[0];
    writeEvolutionCardsToFile(allCards);
    return deletedCard;
}

module.exports = {
    getAllEvolutionCards,
    getEvolutionCardById,
    createEvolutionCard,
    updateEvolutionCard,
    deleteEvolutionCard,
};
