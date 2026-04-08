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
        return `
            <div class="card evolution-card">
                <img class="card-img-top"
                     src="${data.img}"
                     alt="${data.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${data.name} ${foodBadge}</h5>
                    <p class="card-text text-muted" style="font-size: 0.8em;">${data.type}</p>
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
