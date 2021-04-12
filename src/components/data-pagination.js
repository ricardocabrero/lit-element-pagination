import { html, LitElement } from 'lit-element';
import { styles } from '../styles/data-pagination-styles';
import './data-btn';
import './data-controls';

export class DataPagination extends LitElement {

    static get properties() {
        return {
            items: {
                type: Array,
            },
            itemsPerPage: {
                type: Number,
            },
            btns: {
                type: Number,
            },
            current: {
                type: Number,
            }
        }
    }

    static get styles() {
        return [styles];
    }

    get _templateBtns() {

        const btnsBtn = [];

        this.btns = Math.ceil(this.items.length / this.itemsPerPage);

        const classActive = (param)  => (this.current === param) ? 'active' : '';
   
        for(let i = 0; i < this.btns; i++) {
            btnsBtn.push(html`
                <li>
                    <data-btn .active=${classActive(i+1)} .text=${i+1}></data-btn>
                </li>
                `
            );
        }

        return html`
            <ul class="btns">
                <data-controls .disabled=${this.current === 1} 
                control="prev" text="prev"></data-controls>
                ${btnsBtn}
                <data-controls .disabled=${this.current === this.itemsPerPage}
                control="next" text="next"></data-controls>
            </ul>
        `
    }

    render() {
        return html`
            ${this._templateBtns}
        `
    }
}

customElements.define('data-pagination', DataPagination);