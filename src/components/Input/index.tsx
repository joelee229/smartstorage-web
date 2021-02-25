import  React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    // refs => Acessar elementos do react de forma direta
    const inputRef = useRef<HTMLInputElement>(null);
    // registerField => Registrar este campo no form
    const { registerField, fieldName, defaultValue, error } = useField(name);

    useEffect(() => {
        // Assim que renderizar o componente registrar ele no form
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

    return(
        <Container isErrored={!!error} >
            <input defaultValue={defaultValue} ref={inputRef} {...rest} />
            {error && 
                <Error title={error}>
                    <FiAlertCircle  color="#F52F2C" size={18} />   
                </Error>
            }
        </Container>
    );
};

export default Input;