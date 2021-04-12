import { html, LitElement } from 'lit-element';
import { styles } from '../styles/data-list-styles';
import './data-pagination';

export class DataList extends LitElement {

    static get properties() {
        return {
            data: {
                type: Array,
            },
            itemsPerPage: {
                type: Number,
            },
            current: {
                type: Number,
            },
            currentItems: {
                type: Array,
            }
        }
    }

    static get styles() {
        return [styles];
    }

    get _templateList() {
        return html`
        <ul class="list">
            ${this.currentItems.map(item => html`<li id=${item.id}>${this._templateItem(item)}</li>`)}
        </ul>`
    }

    _templateItem(item) {

        const { title, body } = item;

        return html`
            <h2 class="title">${title}</h2>
            <p class="body">${body}</p>
        `
    }

    render() {
        return html`
            ${this._templateList}
            <data-pagination 
            .current=${this.current} 
            .itemsPerPage=${this.itemsPerPage} 
            .items=${this.data}></data-pagination>
        `
    }
}

customElements.define('data-list', DataList);