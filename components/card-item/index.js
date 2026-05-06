import { findLongestCardStreak, isCardNamePalindrome } from "../../hw1/index.js";

export class CardItemComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(data, onDetails, onDelete, onEdit) {
        document.getElementById(`btn-details-${data.id}`)
            .addEventListener('click', onDetails);

        document.getElementById(`btn-delete-${data.id}`)
            .addEventListener('click', onDelete);

        const editBtn = document.getElementById(`btn-edit-${data.id}`);
        if (editBtn && onEdit) editBtn.addEventListener('click', onEdit);
    }

    getHTML(data) {
        const foodBadge = data.foodCost > 0
            ? `<span class="badge bg-danger ms-1">+${data.foodCost} к еде</span>`
            : '';

        // ДЗ1 — палиндром
        const isCardPalindrome = isCardNamePalindrome(data.name);
        const palindromeBadge = isCardPalindrome
            ? `<span class="evolution-badge evolution-badge-filled" title="Название — палиндром">палиндром</span>`
            : `<span class="evolution-badge evolution-badge-outline" title="Название не палиндром">не палиндром</span>`;

        // ДЗ1 — серия побед
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
                   <div class="card-streak-label">Серия побед: <strong>${cardMaxStreak}</strong></div>
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
                        <button class="btn btn-sm btn-warning"
                                id="btn-edit-${data.id}"
                                data-id="${data.id}">Редактировать</button>
                        <button class="btn btn-sm btn-danger"
                                id="btn-delete-${data.id}"
                                data-id="${data.id}">X</button>
                    </div>
                </div>
            </div>
        `;
    }

    render(data, onDetails, onDelete, onEdit) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        this.addListeners(data, onDetails, onDelete, onEdit);
    }
}
