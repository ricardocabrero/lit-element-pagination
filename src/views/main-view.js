import { html, LitElement } from 'lit-element';
import { callApi } from '../../utils/callApi';
import '../components/data-title';
import '../components/data-list';

export class MainView extends LitElement {

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

    constructor() {
        super();
        this.data = [];
        this.currentItems = [];
        this.itemsPerPage = 10;
        this.current = 1;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('update-current', this.handleCurrent);
        this.addEventListener('prev-event', this.handleCurrentPrev);
        this.addEventListener('next-event', this.handleCurrentNext);
    }

    handleCurrent({detail}) {
        this.current = detail;
    }

    handleCurrentPrev() {
        if(this.current === 1) {
            return;
        }

        this.current --;
     
    }

    handleCurrentNext() {

        if(this.current === this.itemsPerPage) {
            return;
        }

        this.current ++;
    }

    callFn() {
        const fetchApi = callApi();
        const dir = fetchApi.composeUrl('https://jsonplaceholder.typicode.com');
        const url = dir('posts');
        fetchApi.callFn(url)
            .then(data => this.data = data);
    }

    handleCurrentsItems(data) {
        const lastItem = this.current * this.itemsPerPage;
        const firstItem = lastItem - this.itemsPerPage;
        return data.slice(firstItem, lastItem);
    }

    firstUpdated() {
        this.callFn();
    }

    render() {
        return html`
        <data-title></data-title>
        <div class="main">
            <data-list 
            .itemsPerPage="${this.itemsPerPage}"
            .currentItems="${this.handleCurrentsItems(this.data)}"
            .current="${this.current}" 
            .data="${this.data}"></data-list>
        </div>
        `
    }
}

customElements.define('main-view', MainView);