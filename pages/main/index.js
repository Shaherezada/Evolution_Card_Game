import { HeaderComponent }  from "../../components/header/index.js";
import { FilterComponent }  from "../../components/filter/index.js";
import { CardItemComponent } from "../../components/card-item/index.js";
import { CardDetailPage }   from "../card-detail/index.js";

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
                matchLog: "11011101",
                model3d: "assets/models/mouse.glb",
            },
            {
                id: 2,
                name: "Большой",
                nameEn: "High Body Weight",
                type: "Свойство",
                foodCost: 1,
                effect: "Может быть атаковано только хищником со свойством Большой.",
                img: "assets/cards_images/7.png",
                matchLog: "1111100",
                model3d: "assets/models/Dinosaur.glb",
            },
            {
                id: 3,
                name: "Спячка",
                nameEn: "Hibernation Ability",
                type: "Свойство",
                foodCost: 0,
                effect: "В свою фазу питания животное считается накормленным. Нельзя использовать два хода подряд и в последний ход.",
                img: "assets/cards_images/3.png",
                matchLog: "10101011",
                model3d: "assets/models/black-bear.glb",
            },
            {
                id: 4,
                name: "Паразит",
                nameEn: "Parasite",
                type: "Свойство",
                foodCost: 2,
                effect: "Сыграть только на животное другого игрока.",
                img: "assets/cards_images/2.png",
                matchLog: "001110",
                model3d: "assets/models/worm.glb",
            },
            {
                id: 5,
                name: "Взаимодействие",
                nameEn: "Communication",
                type: "Взаимодействие",
                foodCost: 0,
                effect: "Парное. Когда одно животное ест из кормовой базы - второе ест вне очереди.",
                img: "assets/cards_images/9.png",
                matchLog: "110110",
                model3d: "assets/models/Ant.glb",
            },
            {
                id: 6,
                name: "Ядовитое",
                nameEn: "Poisonous",
                type: "Свойство",
                foodCost: 0,
                effect: "Хищник, съевший это животное, погибает в фазу вымирания текущего хода.",
                img: "assets/cards_images/6.png",
                matchLog: "11111011",
                model3d: "assets/models/salamander.glb",
            },
            {
                id: 7,
                name: "Сотрудничество",
                nameEn: "Cooperation",
                type: "Взаимодействие",
                foodCost: 0,
                effect: "Парное. Когда одно животное ест - второе сразу получает одну синюю еду.",
                img: "assets/cards_images/4.png",
                matchLog: "0110110",
                model3d: "assets/models/salamander.glb",
            },
            {
                id: 8,
                name: "Падальщик",
                nameEn: "Scavenger",
                type: "Свойство",
                foodCost: 0,
                effect: "Получает синюю еду, когда хищник съедает другое животное. Несовместимо со свойством Хищник.",
                img: "assets/cards_images/8.png",
                matchLog: "1001110",
                model3d: "assets/models/Wolf.glb",
            },
            {
                id: 9,
                name: "Симбиоз",
                nameEn: "Symbiosis",
                type: "Взаимодействие",
                foodCost: 0,
                effect: "Парное. Одно животное защищает второе от хищников, но второе ест только после симбионта.",
                img: "assets/cards_images/5.png",
                matchLog: "111000111",
                model3d: "assets/models/Crocodile.glb",
            },
            {
                id: 10,
                name: "Шалаш",
                nameEn: "Shalash",
                type: "Свойство",
                foodCost: 0,
                effect: "Демонстрационная карточка с палиндромным названием.",
                img: "assets/cards_images/1.png",
                matchLog: "1110011111",
                model3d: "assets/models/mouse.glb",
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
