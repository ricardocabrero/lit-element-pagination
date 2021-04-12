import { html, LitElement } from 'lit-element';
import { styles } from '../styles/data-btn-styles';

export class DataBtn extends LitElement {
    
    static get properties() {
        return {
            active: {
                type: String,
            },
            text: {
                type: Number,
            }
        }
    }

    static get styles() {
        return [styles];
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('update-current', {
            bubbles: true,
            composed: true,
            detail: this.text,
        }));
    }

    render() {
        return html`
        <button 
        @click=${this.handleClick}
        class=${this.active}>${this.text}
        </button>
        `
    }
}

customElements.define('data-btn', DataBtn);