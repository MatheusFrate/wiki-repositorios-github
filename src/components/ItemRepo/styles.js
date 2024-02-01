import styled from "styled-components";

export const ItemContainer = styled.div`

    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }
    
    a {
        color: #AAAAFF;
        text-decoration: none;
        &:hover {
            color: #AAAAFFAA;
        }
    }

    button.remover {

        border: none;
        background-color: transparent;
        color: #FF0000;
        cursor: pointer;
        &:hover {
            color: #FF0000AA;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0; 
    }
`