import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  inputError: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;

  border: 2px solid #ddd;
  border-radius: 12px;
  height: 50px;

  margin-bottom: 30px;

  svg {
    position: absolute;
    left: 15px;
    top: 12px;

    color: ${p => p.theme.colors.lightBlue};
  }

  ${p =>
    p.isFocused &&
    css`
      border: 2px solid ${shade(0.2, p.theme.colors.lightBlue)};

      svg {
        color: ${shade(0.2, p.theme.colors.lightBlue)};
      }
    `}
  ${p =>
    p.isFilled &&
    css`
      border: 2px solid ${shade(0.2, p.theme.colors.green)};

      svg {
        color: ${shade(0.2, p.theme.colors.green)};
      }
    `}
  ${p =>
    p.inputError &&
    css`
      border: 2px solid ${p.theme.colors.red};

      svg {
        color: ${p.theme.colors.red};
      }
    `}

  input {
    width: 100%;

    margin-left: 60px;
    margin-right: 20px;

    background: #eee;
    border: 0;

    color: ${p => p.theme.colors.darkBlue};
    font-weight: 700;
  }
`;
