export class CardDetailComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        const foodBadge = data.foodCost > 0
            ? `<span class="badge bg-danger ms-2">+${data.foodCost} к еде</span>`
            : '';
        return `
            <div class="card mx-auto" style="max-width: 480px;">
                <img src="${data.img}"
                     class="detail-img"
                     alt="${data.name}">
                <div class="card-body">
                    <h4 class="card-title" style="font-family: 'Noto Serif', serif; color: #931417;">
                        ${data.name} ${foodBadge}
                    </h4>
                    <p class="text-muted mb-1" style="font-size: 0.9em;">
                        ${data.nameEn} &nbsp;·&nbsp; ${data.type}
                    </p>
                    <hr>
                    <p class="card-text">${data.effect}</p>
                </div>
            </div>
        `;
    }

    render(data) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
    }
}
