class EvolutionCardUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getEvolutionCards(nameQuery) {
        const url = `${this.baseUrl}/cards`;
        if (nameQuery) {
            return `${url}?name=${encodeURIComponent(nameQuery)}`;
        }
        return url;
    }

    getEvolutionCardById(cardId) {
        return `${this.baseUrl}/cards/${cardId}`;
    }

    createEvolutionCard() {
        return `${this.baseUrl}/cards`;
    }

    removeEvolutionCardById(cardId) {
        return `${this.baseUrl}/cards/${cardId}`;
    }

    updateEvolutionCardById(cardId) {
        return `${this.baseUrl}/cards/${cardId}`;
    }
}

export const evolutionCardUrls = new EvolutionCardUrls();
