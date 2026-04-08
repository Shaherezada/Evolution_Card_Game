import { HeaderComponent }   from "../../components/header/index.js";
import { CardDetailComponent } from "../../components/card-detail/index.js";

export class CardDetailPage {
    constructor(parent, card, onBack) {
        this.parent = parent;
        this.card   = card;
        this.onBack = onBack;   // колбэк возврата на главную (render() той же MainPage)
    }

    get pageRoot() {
        return document.getElementById('detail-page');
    }

    getHTML() {
        return `<div id="detail-page" class="container py-4"></div>`;
    }

    render() {
        this.parent.innerHTML = '';

        // Хедер — кнопка «Домой» вызывает колбэк от MainPage
        const header = new HeaderComponent(this.parent);
        header.render(() => this.onBack());

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        const detail = new CardDetailComponent(this.pageRoot);
        detail.render(this.card);
    }
}
