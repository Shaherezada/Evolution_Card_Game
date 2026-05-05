const {
    getAllEvolutionCards,
    getEvolutionCardById,
    createEvolutionCard,
    updateEvolutionCard,
    deleteEvolutionCard,
} = require('../services/evolutionCardsService');

function handleGetAllCards(req, res) {
    const cardNameFilter = req.query.name || '';
    const isPairedFilter = req.query.isPaired !== undefined
        ? req.query.isPaired === 'true'
        : undefined;
    const cardList = getAllEvolutionCards(cardNameFilter, isPairedFilter);
    res.json(cardList);
}

function handleGetCardById(req, res) {
    const cardId = parseInt(req.params.id);
    if (isNaN(cardId)) {
        return res.status(400).json({ error: 'Некорректный id карточки' });
    }
    const foundCard = getEvolutionCardById(cardId);
    if (!foundCard) {
        return res.status(404).json({ error: 'Карточка не найдена' });
    }
    res.json(foundCard);
}

function handleCreateCard(req, res) {
    const { name, nameEn, type, foodCost, effect } = req.body;
    if (!name || !nameEn || !type || effect === undefined) {
        return res.status(400).json({ error: 'Обязательные поля: name, nameEn, type, effect' });
    }
    const createdCard = createEvolutionCard({ name, nameEn, type, foodCost: foodCost ?? 0, effect });
    res.status(201).json(createdCard);
}

function handleUpdateCard(req, res) {
    const cardId = parseInt(req.params.id);
    if (isNaN(cardId)) {
        return res.status(400).json({ error: 'Некорректный id карточки' });
    }
    const cardUpdates = req.body;
    if (Object.keys(cardUpdates).length === 0) {
        return res.status(400).json({ error: 'Тело запроса не может быть пустым' });
    }
    const updatedCard = updateEvolutionCard(cardId, cardUpdates);
    if (!updatedCard) {
        return res.status(404).json({ error: 'Карточка не найдена' });
    }
    res.json(updatedCard);
}

function handleDeleteCard(req, res) {
    const cardId = parseInt(req.params.id);
    if (isNaN(cardId)) {
        return res.status(400).json({ error: 'Некорректный id карточки' });
    }
    const deletedCard = deleteEvolutionCard(cardId);
    if (!deletedCard) {
        return res.status(404).json({ error: 'Карточка не найдена' });
    }
    res.json(deletedCard);
}

module.exports = {
    handleGetAllCards,
    handleGetCardById,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
};
