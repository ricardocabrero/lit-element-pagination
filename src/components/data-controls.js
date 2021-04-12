import { html, LitElement } from 'lit-element';
import { styles } from '../styles/data-controls-styles';

export class DataControls extends LitElement {

    static get properties() {
        return {
            control: {
                type: String,
            },
            text: {
                type: String,
            },
            disabled: {
                type: Boolean,
            }
        }
    }

    static get styles() {
        return [styles];
    }

    handleEvent(value) {
        this.dispatchEvent(new CustomEvent(`${value}-event`, {
            bubbles: true,
            composed: true,
        }))
    }

    handleClick({target}) {

        const value = target.textContent;
        
        const actions = {
            'prev' : () => this.handleEvent(value),
            'next' : () => this.handleEvent(value),
        }
        
        const action = actions[value];

        if(action) {
            action();
        }

    }

    render() {
        return html`
            <button 
            .disabled=${this.disabled}
            @click=${this.handleClick}
            class="control ${this.control}">${this.text}</button>
        `
    }
}

customElements.define('data-controls', DataControls);