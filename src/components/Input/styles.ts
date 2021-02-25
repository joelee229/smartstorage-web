import styled, { css } from 'styled-components';

import Tooltip from '../../components/Tooltip';

interface ContainerProps {
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex: 1;
    margin-top: 0.2em;
    background: white;
    border-radius: 6px;
    border: 0;
    padding: 16px;
    width: 100%;
    border: 2px solid white;

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #6c6c80;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
    }

    ${(props) => props.isErrored && css`
            border-color: #F52F2C;  
    `}

`;

export const Error = styled(Tooltip)`
    margin-left: 16px;

    span {
        background: #c53030;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;

