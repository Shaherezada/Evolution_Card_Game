import { HeaderComponent }       from "../../components/header/index.js";
import { CardEditFormComponent } from "../../components/card-edit-form/index.js";

import { ajax }              from "../../modules/ajax.js";
import { evolutionCardUrls } from "../../modules/evolutionCardUrls.js";

export class CardEditPage {
    /**
     * @param {HTMLElement} parent
     * @param {number|null} cardId  null — режим добавления, число — режим редактирования
     * @param {function}    onBack
     */
    constructor(parent, cardId, onBack) {
        this.parent = parent;
        this.cardId = cardId;
        this.onBack = onBack;
        this.card   = null;
    }

    get pageRoot() {
        return document.getElementById('edit-page');
    }

    getHTML() {
        const title = this.cardId ? 'Редактирование карточки' : 'Добавление карточки';
        return `
            <div id="edit-page" class="container py-4">
                <h3 class="mb-3">${title}</h3>
                <p class="text-muted" style="font-size:0.9em;">
                    Кнопка «Сохранить» появится в лабораторной №6.
                    Сейчас можно только заполнить поля.
                </p>
            </div>
        `;
    }

    /**
     * Если редактирование — подгружаем карточку с бэка по id.
     */
    loadEvolutionCard() {
        if (!this.cardId) {
            this.renderForm({});
            return;
        }
        const url = evolutionCardUrls.getEvolutionCardById(this.cardId);
        ajax.get(url, (data, status) => {
            if (status !== 200 || !data) {
                this.pageRoot.insertAdjacentHTML('beforeend', `
                    <div class="alert alert-danger">Карточка не найдена (status ${status})</div>
                `);
                return;
            }
            this.card = data;
            this.renderForm(this.card);
        });
    }

    renderForm(cardData) {
        const form = new CardEditFormComponent(this.pageRoot);
        form.render(cardData);
    }

    render() {
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(() => this.onBack());

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        this.loadEvolutionCard();
    }
}
