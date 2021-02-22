/* eslint-disable react/jsx-props-no-spreading */
import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputComponent: React.FC<InputProps> = ({
  icon: Icon,
  name,
  ...rest
}) => {
  const { fieldName, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [inputError, setInputError] = useState(false);

  const verifyInputField = useCallback(() => {
    if (fieldName === 'email') {
      if (!inputRef.current?.value) {
        setInputError(false);
      } else {
        const searchAt = inputRef.current?.value.includes('@');
        const searchDot = inputRef.current?.value.includes('.');

        if (!searchDot || !searchAt) {
          setInputError(true);
        } else {
          setInputError(false);
        }
      }
    }

    if (fieldName === 'password') {
      if (
        inputRef.current?.value &&
        inputRef.current.value.length > 0 &&
        inputRef.current.value.length < 4
      ) {
        setInputError(true);
      } else {
        setInputError(false);
      }
    }
  }, [fieldName]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);

    verifyInputField();
  }, [verifyInputField]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      inputError={inputError}
      isFilled={isFilled}
      isFocused={isFocused}
      onClick={() => inputRef.current?.focus()}
    >
      {Icon && <Icon size={25} />}
      <input
        onFocus={() => setIsFocused(true)}
        onChange={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default InputComponent;
