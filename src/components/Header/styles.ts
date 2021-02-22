import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;

  flex: 1;

  position: fixed;

  height: 56px;
  max-width: 100vw;
  width: 100vw;

  background: #fff;

  filter: drop-shadow(0 -2px 4px ${p => lighten(0.1, p.theme.colors.black)});

  span {
    display: flex;
    align-items: center;
    justify-content: space-around;

    text-transform: uppercase;

    height: 100%;
    min-width: 250px;

    background: ${p => p.theme.colors.darkBlue};
    color: ${p => p.theme.colors.white};
    font-size: 24px;
    font-weight: bold;

    p {
      font-weight: 300;
      font-size: 14px;
      text-transform: none;
    }

    svg {
      transition: color 200ms ease;

      cursor: pointer;

      &:hover {
        color: ${p => lighten(0.1, p.theme.colors.red)};
      }
    }
  }
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: 30px;

  cursor: pointer;

  svg {
    margin-left: 5px;
  }
`;

export const UserImage = styled.div`
  height: 40px;
  width: 40px;
  background: ${p => p.theme.colors.lightBlue};
  border-radius: 8px;
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.lightBlue};
  background: none;

  margin: 0 10px;

  cursor: pointer;
`;
