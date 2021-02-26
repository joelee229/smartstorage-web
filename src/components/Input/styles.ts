import styled, { css } from 'styled-components';
import { FiCheckCircle } from 'react-icons/fi';

import Tooltip from '../../components/Tooltip';

interface ContainerProps {
    isErrored: boolean;
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex: 1;
    margin-top: 0.2em;
    background: white;
    border-radius: 6px;
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

    ${(props) => props.isFocused && css`
            border-color: #F79D14;  
    `}

    ${(props) => props.isErrored && css`
            border-color: #F52F2C;  
    `}

    ${(props) => props.isFilled && !props.isErrored && css`
        border-color: #0DCA00;
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

export const CheckIcon = styled(FiCheckCircle)<ContainerProps>`
    opacity: 0;
    transition: opacity 0.2s;

    ${(props) => props.isFilled && !props.isErrored && css`
        opacity: 1;
    `}
`;

