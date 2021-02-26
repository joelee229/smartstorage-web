import  React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error, CheckIcon } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isFilled, setIsFilled] = useState<boolean>(false);


    // refs => Acessar elementos do react de forma direta
    const inputRef = useRef<HTMLInputElement>(null);
    // registerField => Registrar este campo no form
    const { registerField, fieldName, defaultValue, error } = useField(name);

    const handleInputFocus = useCallback(() => setIsFocused(true), []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        // Assim que renderizar o componente registrar ele no form
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

    return(
        <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error} >
            <input 
                defaultValue={defaultValue} 
                ref={inputRef} 
                {...rest} 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            <CheckIcon isFocused={isFocused} isFilled={isFilled} isErrored={!!error} color="#00CE38" size={20} />

            {error &&
                <Error title={error}>
                    <FiAlertCircle  color="#F52F2C" size={18} />   
                </Error>
            }
        </Container>
    );
};

export default Input;