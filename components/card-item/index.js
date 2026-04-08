import { findLongestCardStreak, isCardNamePalindrome } from "../../hw1/index.js";

export class CardItemComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(data, onDetails, onDelete) {
        document.getElementById(`btn-details-${data.id}`)
            .addEventListener('click', onDetails);

        document.getElementById(`btn-delete-${data.id}`)
            .addEventListener('click', onDelete);

        // Инициализация Bootstrap popover (вариант 5 — информер)
        const popoverEl = document.getElementById(`popover-${data.id}`);
        new bootstrap.Popover(popoverEl);
    }

    getHTML(data) {
        const foodBadge = data.foodCost > 0
            ? `<span class="badge bg-danger ms-1">+${data.foodCost} к еде</span>`
            : '';

        // ДЗ1 — проверка названия карточки на палиндром
        const isCardPalindrome = isCardNamePalindrome(data.name);
        const palindromeBadge = isCardPalindrome
            ? `<span class="evolution-badge evolution-badge-filled" title="Название — палиндром">🔄 палиндром</span>`
            : `<span class="evolution-badge evolution-badge-outline" title="Название не палиндром">— не палиндром</span>`;

        // ДЗ1 — длиннейшая серия побед карточки в партиях (matchLog = история: 1=победа, 0=поражение)
        const cardMatchLog = data.matchLog || '';
        const cardMaxStreak = findLongestCardStreak(cardMatchLog);
        const highlightedMatchLog = cardMatchLog
            .split('')
            .map(ch => ch === '1'
                ? `<span class="match-win">1</span>`
                : `<span class="match-loss">0</span>`)
            .join('');
        const streakBlock = cardMatchLog
            ? `<div class="card-streak-block" title="История партий карточки">
                   <div class="card-streak-label">🏆 Серия побед: <strong>${cardMaxStreak}</strong></div>
                   <div class="card-streak-log">${highlightedMatchLog}</div>
               </div>`
            : '';

        return `
            <div class="card evolution-card">
                <img class="card-img-top"
                     src="${data.img}"
                     alt="${data.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${data.name} ${foodBadge}</h5>
                    <p class="card-text text-muted" style="font-size: 0.8em;">${data.type}</p>
                    <div class="mb-2">${palindromeBadge}</div>
                    ${streakBlock}
                    <div class="mt-auto d-flex gap-1 flex-wrap">
                        <button class="btn btn-sm btn-primary"
                                id="btn-details-${data.id}"
                                data-id="${data.id}">Подробнее</button>
                        <button class="btn btn-sm btn-outline-danger"
                                id="btn-delete-${data.id}"
                                data-id="${data.id}">✕</button>
                        <button class="btn btn-sm btn-outline-secondary"
                                id="popover-${data.id}"
                                data-bs-toggle="popover"
                                data-bs-trigger="hover focus"
                                data-bs-placement="top"
                                data-bs-content="${data.effect}"
                                title="${data.name}">?</button>
                    </div>
                </div>
            </div>
        `;
    }

    render(data, onDetails, onDelete) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        this.addListeners(data, onDetails, onDelete);
    }
}
