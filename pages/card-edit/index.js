import { HeaderComponent }       from "../../components/header/index.js";
import { CardEditFormComponent } from "../../components/card-edit-form/index.js";

import { api }               from "../../modules/api.js";
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
            </div>
        `;
    }

    async loadEvolutionCard() {
        if (!this.cardId) {
            this.renderForm({});
            return;
        }
        try {
            this.card = await api.get(evolutionCardUrls.getEvolutionCardById(this.cardId));
            this.renderForm(this.card);
        } catch (err) {
            console.error('Карточка не найдена:', err);
            this.pageRoot.insertAdjacentHTML('beforeend', `
                <div class="alert alert-danger">Карточка не найдена</div>
            `);
        }
    }

    /**
     * Сбор данных из формы.
     */
    collectFormData() {
        const form = document.getElementById('card-edit-form');
        const formData = new FormData(form);
        return {
            name:     formData.get('name')?.trim(),
            nameEn:   formData.get('nameEn')?.trim(),
            type:     formData.get('type'),
            foodCost: parseInt(formData.get('foodCost')) || 0,
            isPaired: formData.get('isPaired') === 'on',
            effect:   formData.get('effect')?.trim(),
        };
    }

    async clickSave() {
        const cardData = this.collectFormData();

        try {
            if (this.cardId) {
                // Редактирование — PATCH
                await api.patch(evolutionCardUrls.updateEvolutionCardById(this.cardId), cardData);
            } else {
                // Добавление — POST
                await api.post(evolutionCardUrls.createEvolutionCard(), cardData);
            }
            this.onBack();
        } catch (err) {
            console.error('Ошибка сохранения карточки:', err);
            const errorBlock = document.getElementById('save-error');
            if (errorBlock) errorBlock.textContent = `Ошибка: ${err.message}`;
        }
    }

    renderForm(cardData) {
        const form = new CardEditFormComponent(this.pageRoot);
        form.render(cardData, /* showSaveButton = */ true);

        document.getElementById('btn-save')
            .addEventListener('click', () => this.clickSave());
    }

    render() {
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(() => this.onBack());

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        this.loadEvolutionCard();
    }
}
