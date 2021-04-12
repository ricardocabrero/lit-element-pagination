import { css } from 'lit-element';

export const styles = css`
    .list {
        display: flex;
        margin: 25px 10px 50px;
        padding: 0;
        list-style: none;
        flex-wrap: wrap;
    }

    .list li {
        width: 17%;
        margin: 0px 1.5% 5px;
    }

    @media(max-width: 1220px) {
        .list li {
            width: 22%;
        }   
    }

    @media(max-width: 900px) {
        .list li {
            width: 30.33%;
        }   
    }

    @media(max-width: 800px) {
        .list li {
            width: 47%;
        }   
    }

    .list .title {
        font-size: 14px;
        text-transform: capitalize;
    }
    .list .body {
        text-transform: capitalize;
        font-size: 12px;
        line-height: 16px;
    }
`