const express = require('express');
const {
    handleGetAllCards,
    handleGetCardById,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
} = require('../controllers/evolutionCardsController');

const evolutionCardsRouter = express.Router();

evolutionCardsRouter.get('/',       handleGetAllCards);
evolutionCardsRouter.get('/:id',    handleGetCardById);
evolutionCardsRouter.post('/',      handleCreateCard);
evolutionCardsRouter.patch('/:id',  handleUpdateCard);
evolutionCardsRouter.delete('/:id', handleDeleteCard);

module.exports = evolutionCardsRouter;
