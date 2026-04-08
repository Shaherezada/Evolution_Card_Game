export class FilterComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(onFilter) {
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.addEventListener('click', e => {
                onFilter(e.target.dataset.filter);
            });
        });
    }

    getHTML(activeType) {
        const types = ['Все', 'Свойство', 'Взаимодействие'];
        const buttons = types.map(t => `
            <button class="btn ${activeType === t ? 'btn-primary' : 'btn-outline-secondary'} me-2"
                    data-filter="${t}">${t}</button>
        `).join('');
        return `<div class="mb-3">${buttons}</div>`;
    }

    render(activeType, onFilter) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(activeType));
        this.addListeners(onFilter);
    }
}
