export class CardEditFormComponent {
    constructor(parent) {
        this.parent = parent;
    }

    /**
     * @param {object} card  — данные карточки (или {} в режиме добавления)
     * @param {boolean} showSaveButton — показывать ли кнопку «Сохранить» (в ЛР №6 — да)
     */
    getHTML(card, showSaveButton) {
        const v = (x) => (x === undefined || x === null ? '' : String(x));
        const checked = card.isPaired ? 'checked' : '';
        const typeProp  = card.type === 'Свойство'        ? 'selected' : '';
        const typeInter = card.type === 'Взаимодействие'  ? 'selected' : '';

        const saveButton = showSaveButton
            ? `
                <div class="d-flex align-items-center gap-2 mt-3">
                    <button type="button" id="btn-save" class="btn btn-primary">Сохранить</button>
                    <span id="save-error" class="text-danger" style="font-size:0.9em;"></span>
                </div>
            `
            : `
                <p class="text-muted" style="font-size:0.85em;">
                    Кнопка «Сохранить» появится в ЛР №6.
                </p>
            `;

        return `
            <form id="card-edit-form" class="card p-4 mx-auto" style="max-width: 560px;" onsubmit="return false;">
                <div class="mb-3">
                    <label class="form-label">Название (RU)</label>
                    <input type="text" name="name"     class="form-control" value="${v(card.name)}">
                </div>
                <div class="mb-3">
                    <label class="form-label">Название (EN)</label>
                    <input type="text" name="nameEn"   class="form-control" value="${v(card.nameEn)}">
                </div>
                <div class="mb-3">
                    <label class="form-label">Тип</label>
                    <select name="type" class="form-select">
                        <option value="Свойство"        ${typeProp}>Свойство</option>
                        <option value="Взаимодействие"  ${typeInter}>Взаимодействие</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Стоимость еды</label>
                    <input type="number" name="foodCost" class="form-control" value="${v(card.foodCost)}" min="0">
                </div>
                <div class="form-check mb-3">
                    <input type="checkbox" name="isPaired" id="is-paired" class="form-check-input" ${checked}>
                    <label class="form-check-label" for="is-paired">Парная карточка</label>
                </div>
                <div class="mb-3">
                    <label class="form-label">Эффект</label>
                    <textarea name="effect" class="form-control" rows="3">${v(card.effect)}</textarea>
                </div>
                ${saveButton}
            </form>
        `;
    }

    render(card, showSaveButton = false) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(card || {}, showSaveButton));
    }
}
