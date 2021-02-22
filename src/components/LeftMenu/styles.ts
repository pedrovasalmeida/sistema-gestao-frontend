import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  menuState: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 56px);
  width: 250px;
  padding: 10px;

  background: ${p => p.theme.colors.darkBlue};
  /* overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.black};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${p => p.theme.colors.lightBlue};
  } */

  ${p =>
    p.menuState === 'hide' &&
    css`
      display: none;
    `}
`;

export const TabDescription = styled.span`
  color: ${p => p.theme.colors.gray};
  font-weight: bold;

  margin: 20px 0;

  cursor: default;
`;

export const MenuOption = styled.span`
  display: flex;

  color: ${p => p.theme.colors.white};
  margin: 12px 0;

  cursor: pointer;

  transition: color 200ms ease;

  > svg {
    align-self: center;
    margin-right: 15px;
  }

  svg + svg {
    margin-left: auto;
  }

  &:hover {
    color: ${p => lighten(0.1, p.theme.colors.red)};
  }
`;
