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

  > span {
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

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      > p {
        font-weight: 300;
        font-size: 14px;
        text-transform: none;
        cursor: default;
      }

      > svg {
        transition: color 200ms ease;
        margin-left: 6px;

        cursor: pointer;

        &:hover {
          color: ${p => lighten(0.1, p.theme.colors.red)};
        }
      }
    }

    @media only screen and (max-width: 489px) {
      width: 100%;
    }
  }
`;

export const UserData = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  margin-left: auto;
  margin-right: 30px;

  cursor: pointer;

  svg {
    margin-left: 5px;
    color: ${p => p.theme.colors.lightBlue};
  }

  @media only screen and (max-width: 489px) {
    display: none;
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

export const UserFloatDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 56px;

  width: 235px;
  height: auto;

  background: #fff;

  border: 1px solid ${p => p.theme.colors.lightBlue};
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-width: 0;

  &.hide {
    display: none;
  }

  &.show {
    display: flex;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    align-self: flex-end;

    background: ${p => p.theme.colors.lightBlue};
    color: ${p => p.theme.colors.white};

    font-size: 16px;

    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    height: 30px;
    width: 100%;

    svg {
      margin-right: 8px;
    }
  }
`;
