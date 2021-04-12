import { css } from 'lit-element';

export const styles = css`
    button {
        background: #0dcaf0;
        border: 1px solid #0dcaf0;
        outline: none;
        box-shadow: none;
        margin: 0 1px;
        cursor: pointer;
        border-radius: 3px;
        height: 22px;
    }
    button.active {
        color: #fff;
        background: #000;
        border-color: #000;
        cursor: default;
    }
`