import { HeaderComponent }  from "../../components/header/index.js";
import { FilterComponent }  from "../../components/filter/index.js";
import { CardItemComponent } from "../../components/card-item/index.js";
import { CardDetailPage }   from "../card-detail/index.js";
import { findLongestCardStreak, isCardNamePalindrome, isCardNamePalindromeV2 } from "../../hw1/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.activeFilter = 'Все';
        this.cards = this.getData();
    }

    getData() {
        return [
            {
                id: 1,
                name: "Норное",
                nameEn: "Burrowing",
                type: "Свойство",
                foodCost: 0,
                effect: "Накормленное животное не может быть атаковано хищником.",
                img: "assets/cards_images/1.png",
            },
            {
                id: 2,
                name: "Большой",
                nameEn: "High Body Weight",
                type: "Свойство",
                foodCost: 1,
                effect: "Может быть атаковано только хищником со свойством Большой.",
                img: "assets/cards_images/7.png",
            },
            {
                id: 3,
                name: "Спячка",
                nameEn: "Hibernation Ability",
                type: "Свойство",
                foodCost: 0,
                effect: "В свою фазу питания животное считается накормленным. Нельзя использовать два хода подряд и в последний ход.",
                img: "assets/cards_images/3.png",
            },
            {
                id: 4,
                name: "Паразит",
                nameEn: "Parasite",
                type: "Свойство",
                foodCost: 2,
                effect: "Сыграть только на животное другого игрока.",
                img: "assets/cards_images/2.png",
            },
            {
                id: 5,
                name: "Взаимодействие",
                nameEn: "Communication",
                type: "Взаимодействие",
                foodCost: 0,
                effect: "Парное. Когда одно животное ест из кормовой базы - второе ест вне очереди.",
                img: "assets/cards_images/9.png",
            },
            {
                id: 6,
                name: "Ядовитое",
                nameEn: "Poisonous",
                type: "Свойство",
                foodCost: 0,
                effect: "Хищник, съевший это животное, погибает в фазу вымирания текущего хода.",
                img: "assets/cards_images/6.png",
            },
            {
                id: 7,
                name: "Сотрудничество",
                nameEn: "Cooperation",
                type: "Взаимодействие",
                foodCost: 0,
                effect: "Парное. Когда одно животное ест - второе сразу получает одну синюю еду.",
                img: "assets/cards_images/4.png",
            },
            {
                id: 8,
                name: "Падальщик",
                nameEn: "Scavenger",
                type: "Свойство",
                foodCost: 0,
                effect: "Получает синюю еду, когда хищник съедает другое животное. Несовместимо со свойством Хищник.",
                img: "assets/cards_images/8.png",
            },
            {
                id: 9,
                name: "Симбиоз",
                nameEn: "Symbiosis",
                type: "Взаимодействие",
                foodCost: 0,
                effect: "Парное. Одно животное защищает второе от хищников, но второе ест только после симбионта.",
                img: "assets/cards_images/5.png",
            }
        ];
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

    clickDetails(e) {
        const id = parseInt(e.target.dataset.id);
        const card = this.cards.find(c => c.id === id);
        const detailPage = new CardDetailPage(this.parent, card, () => this.render());
        detailPage.render();
    }

    clickDelete(e) {
        const id = parseInt(e.target.dataset.id);
        this.cards = this.cards.filter(c => c.id !== id);
        this.render();
    }

    clickAdd() {
        // Копируем первую видимую карточку (первую из отфильтрованного списка)
        const visible = this.getFilteredCards();
        if (visible.length === 0) return;
        const copy = { ...visible[0], id: Date.now() };
        this.cards.push(copy);
        this.render();
    }

    clickFilter(type) {
        this.activeFilter = type;
        this.render();
    }

    _initHw1Block() {
        const matchInput = document.getElementById('hw1-match-input');
        const streakEl   = document.getElementById('hw1-streak');
        const palinInput = document.getElementById('hw1-palin-input');
        const palinEl    = document.getElementById('hw1-palin-result');

        const updateStreak = () => {
            const val = matchInput.value.replace(/[^01]/g, '');
            matchInput.value = val;
            streakEl.textContent = findLongestCardStreak(val);
        };

        const updatePalin = () => {
            const name = palinInput.value.trim();
            if (!name) { palinEl.textContent = ''; return; }
            const result1 = isCardNamePalindrome(name);
            const result2 = isCardNamePalindromeV2(name);
            palinEl.innerHTML = result1
                ? `<span class="badge bg-success">палиндром</span>`
                : `<span class="badge bg-secondary">не палиндром</span>`;
        };

        matchInput.addEventListener('input', updateStreak);
        palinInput.addEventListener('input', updatePalin);

        // начальный расчёт
        updateStreak();
        updatePalin();
    }

    render() {
        this.parent.innerHTML = '';

        // Хедер — кнопка «Домой» сбрасывает фильтр
        const header = new HeaderComponent(this.parent);
        header.render(() => {
            this.activeFilter = 'Все';
            this.render();
        });

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        // Фильтр
        const filter = new FilterComponent(this.pageRoot);
        filter.render(this.activeFilter, type => this.clickFilter(type));

        // Кнопка добавления
        this.pageRoot.insertAdjacentHTML('beforeend', `
            <button id="btn-add" class="btn btn-success mb-3">+ Добавить карту</button>
        `);
        document.getElementById('btn-add').addEventListener('click', () => this.clickAdd());

        // ДЗ1: блок алгоритмов
        this.pageRoot.insertAdjacentHTML('beforeend', `
            <div class="card mb-3 p-3" style="background:#fff8f0; border-color:#c8a97a;">
                <div class="row g-3 align-items-end">
                    <div class="col-auto">
                        <label class="form-label mb-1 fw-semibold" style="font-size:0.85em;">
                            История партий (0 и 1):
                        </label>
                        <input id="hw1-match-input" class="form-control form-control-sm" style="width:180px;"
                               maxlength="30" placeholder="напр. 11011101001" value="11011101001">
                        <div class="mt-1" style="font-size:0.85em;">
                            Макс. серия побед: <strong id="hw1-streak">3</strong>
                        </div>
                    </div>
                    <div class="col-auto">
                        <label class="form-label mb-1 fw-semibold" style="font-size:0.85em;">
                            Проверка палиндрома:
                        </label>
                        <input id="hw1-palin-input" class="form-control form-control-sm" style="width:180px;"
                               placeholder="введите слово" value="Норное">
                        <div class="mt-1" style="font-size:0.85em;">
                            <span id="hw1-palin-result"></span>
                        </div>
                    </div>
                </div>
            </div>
        `);
        this._initHw1Block();

        // Список карточек
        this.pageRoot.insertAdjacentHTML('beforeend', `<div id="cards-list" class="cards-grid"></div>`);
        const cardsList = document.getElementById('cards-list');

        this.getFilteredCards().forEach(card => {
            const cardItem = new CardItemComponent(cardsList);
            cardItem.render(
                card,
                this.clickDetails.bind(this),
                this.clickDelete.bind(this)
            );
        });
    }
}
