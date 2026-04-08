export class HeaderComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(onHome) {
        document.getElementById('btn-home').addEventListener('click', onHome);
    }

    getHTML() {
        return `
            <header class="app-header">
                <h1 class="header-title">Эволюция — Карты</h1>
                <button id="btn-home" class="btn btn-outline-light">Домой</button>
            </header>
        `;
    }

    render(onHome) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        this.addListeners(onHome);
    }
}
