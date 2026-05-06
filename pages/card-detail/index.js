import { HeaderComponent }     from "../../components/header/index.js";
import { CardDetailComponent } from "../../components/card-detail/index.js";

import { api }                   from "../../modules/api.js";
import { evolutionCardUrls }     from "../../modules/evolutionCardUrls.js";
import { decorateEvolutionCard } from "../../modules/evolutionCardPresentation.js";

export class CardDetailPage {
    constructor(parent, cardId, onBack) {
        this.parent = parent;
        this.cardId = cardId;
        this.onBack = onBack;
        this.card   = null;
    }

    get pageRoot() {
        return document.getElementById('detail-page');
    }

    getHTML() {
        return `<div id="detail-page" class="container py-4"></div>`;
    }

    /**
     * fetch GET карточки по id.
     */
    async loadEvolutionCard() {
        try {
            const data = await api.get(evolutionCardUrls.getEvolutionCardById(this.cardId));
            this.card = decorateEvolutionCard(data);
            this.renderCard();
        } catch (err) {
            console.error('Карточка не найдена:', err);
            this.pageRoot.insertAdjacentHTML('beforeend', `
                <div class="alert alert-danger">Карточка не найдена</div>
            `);
        }
    }

    async clickDelete() {
        try {
            await api.delete(evolutionCardUrls.removeEvolutionCardById(this.cardId));
            this.onBack();
        } catch (err) {
            console.error('Ошибка удаления карточки:', err);
        }
    }

    renderCard() {
        const detail = new CardDetailComponent(this.pageRoot);
        detail.render(this.card);

        this.pageRoot.insertAdjacentHTML('beforeend', `
            <div class="text-center mt-3">
                <button id="btn-detail-delete" class="btn btn-danger">Удалить карточку</button>
            </div>
        `);
        document.getElementById('btn-detail-delete')
            .addEventListener('click', () => this.clickDelete());
    }

    render() {
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(() => this.onBack());

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        this.loadEvolutionCard();
    }
}
