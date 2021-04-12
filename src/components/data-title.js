import { html, LitElement } from 'lit-element';
import { styles } from '../styles/data-title-styles'

export class DataTitle extends LitElement {

    static get properties(){
        return {
            text: {
                type: String,
            }
        }
    }

    static get styles() {
        return [styles];
    }

    constructor() {
        super();
        this.text = 'Pagination';
    }

    render() {
        return html`
        <header>
            <h1>${this.text}</h1>
        </header>
        `
    }
}

customElements.define('data-title', DataTitle);