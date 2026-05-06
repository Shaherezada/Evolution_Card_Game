import { HeaderComponent }  from "../../components/header/index.js";
import { FilterComponent }  from "../../components/filter/index.js";
import { CardItemComponent } from "../../components/card-item/index.js";
import { CardDetailPage }   from "../card-detail/index.js";
import { CardEditPage }     from "../card-edit/index.js";

import { api }                    from "../../modules/api.js";
import { evolutionCardUrls }      from "../../modules/evolutionCardUrls.js";
import { decorateEvolutionCard }  from "../../modules/evolutionCardPresentation.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.activeFilter = 'Все';
        this.nameQuery = '';
        this.cards = [];
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    getHTML() {
        return `<div id="main-page" class="container-fluid px-4 py-2"></div>`;
    }

    getFilteredCards() {
        if (this.activeFilter === 'Все') return this.cards;
        return this.cards.filter(card => card.type === this.activeFilter);
    }

    /**
     * Загрузка карточек через fetch (async/await).
     */
    async loadEvolutionCards() {
        try {
            const data = await api.get(evolutionCardUrls.getEvolutionCards(this.nameQuery));
            this.cards = Array.isArray(data) ? data.map(decorateEvolutionCard) : [];
        } catch (err) {
            console.error('Не удалось получить карточки:', err);
            this.cards = [];
        }
        this.renderCardsList();
    }

    clickDetails(e) {
        const id = parseInt(e.target.dataset.id);
        const detailPage = new CardDetailPage(this.parent, id, () => this.render());
        detailPage.render();
    }

    clickEdit(e) {
        const id = parseInt(e.target.dataset.id);
        const editPage = new CardEditPage(this.parent, id, () => this.render());
        editPage.render();
    }

    async clickDelete(e) {
        const id = parseInt(e.target.dataset.id);
        try {
            await api.delete(evolutionCardUrls.removeEvolutionCardById(id));
            await this.loadEvolutionCards();
        } catch (err) {
            console.error('Ошибка удаления карточки:', err);
        }
    }

    clickAdd() {
        const editPage = new CardEditPage(this.parent, null, () => this.render());
        editPage.render();
    }

    clickFilter(type) {
        this.activeFilter = type;
        this.renderCardsList();
    }

    onNameQueryChange(value) {
        this.nameQuery = value.trim();
        this.loadEvolutionCards();
    }

    renderCardsList() {
        const cardsList = document.getElementById('cards-list');
        if (!cardsList) return;
        cardsList.innerHTML = '';
        this.getFilteredCards().forEach(card => {
            const cardItem = new CardItemComponent(cardsList);
            cardItem.render(
                card,
                this.clickDetails.bind(this),
                this.clickDelete.bind(this),
                this.clickEdit.bind(this),
            );
        });
    }

    render() {
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(() => {
            this.activeFilter = 'Все';
            this.nameQuery = '';
            this.render();
        });

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        // Поле поиска по имени (query-параметр на API)
        this.pageRoot.insertAdjacentHTML('beforeend', `
            <div class="mb-3">
                <input id="card-name-query"
                       type="text"
                       class="form-control"
                       placeholder="Поиск по названию карточки..."
                       value="${this.nameQuery}"
                       style="max-width: 360px;">
            </div>
        `);
        document.getElementById('card-name-query')
            .addEventListener('input', e => this.onNameQueryChange(e.target.value));

        // Фильтр по типу (клиентский)
        const filter = new FilterComponent(this.pageRoot);
        filter.render(this.activeFilter, type => this.clickFilter(type));

        // Кнопка добавления
        this.pageRoot.insertAdjacentHTML('beforeend', `
            <button id="btn-add" class="btn btn-success mb-3">+ Добавить карту</button>
        `);
        document.getElementById('btn-add').addEventListener('click', () => this.clickAdd());

        // Список карточек
        this.pageRoot.insertAdjacentHTML('beforeend', `<div id="cards-list" class="cards-grid"></div>`);

        this.loadEvolutionCards();
    }
}
