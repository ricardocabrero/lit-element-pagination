import { css } from 'lit-element';

export const styles = css`
    .control {
        background: #dc3545;
        box-shadow: none;
        border: 1px solid #dc3545;
        color: #fff;
        cursor: pointer;
        outline: none;
        height: 22px;
        letter-spacing: .5px;
    }
    .control:disabled {
        opacity: .5;
        cursor: default;
    }
    .control.prev {
        border-radius: 3px 0 0 3px;
        margin-right: 5px;

    }
    .control.next {
        border-radius: 0 3px 3px 0;
        margin-left: 5px;
    }
`