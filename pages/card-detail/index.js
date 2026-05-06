import { HeaderComponent }     from "../../components/header/index.js";
import { CardDetailComponent } from "../../components/card-detail/index.js";

import { ajax }                  from "../../modules/ajax.js";
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
     * AJAX GET карточки по id.
     */
    loadEvolutionCard() {
        const url = evolutionCardUrls.getEvolutionCardById(this.cardId);
        ajax.get(url, (data, status) => {
            if (status !== 200 || !data) {
                this.pageRoot.insertAdjacentHTML('beforeend', `
                    <div class="alert alert-danger">Карточка не найдена (status ${status})</div>
                `);
                return;
            }
            this.card = decorateEvolutionCard(data);
            this.renderCard();
        });
    }

    clickDelete() {
        const url = evolutionCardUrls.removeEvolutionCardById(this.cardId);
        ajax.delete(url, (data, status) => {
            if (status === 200 || status === 204) {
                this.onBack();
            } else {
                console.error('Ошибка удаления карточки:', status, data);
            }
        });
    }

    renderCard() {
        const detail = new CardDetailComponent(this.pageRoot);
        detail.render(this.card);

        // Кнопка удаления через DELETE-запрос
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
