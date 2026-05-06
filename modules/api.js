/**
 * API-обёртка над fetch. Возвращает промисы, бросает ошибку
 * на не-2xx статусах и автоматически парсит JSON.
 */
class Api {
    async _request(url, options = {}) {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        // 204 No Content
        if (response.status === 204) return null;
        return response.json();
    }

    async get(url) {
        return this._request(url, { method: 'GET' });
    }

    async delete(url) {
        return this._request(url, { method: 'DELETE' });
    }

    async post(url, body) {
        return this._request(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }

    async patch(url, body) {
        return this._request(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }
}

export const api = new Api();
