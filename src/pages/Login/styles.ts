import styled from 'styled-components';

import BackgroundImg from '../../assets/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100vw;
  width: 100vw;
  height: 100vh;

  padding: 50px;

  background: url(${BackgroundImg}) no-repeat fixed center;
  background-size: cover;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 20px;

    width: 633px;
    height: 350px;
    background: #eee;

    border-radius: 12px;

    @media only screen and (max-width: 655px) {
      width: 95vw;
    }
  }
`;

export const Label = styled.label`
  color: ${p => p.theme.colors.lightBlue};

  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 60px;
  width: 100%;

  background: #eee;

  margin-bottom: 50px;

  border: 2px solid ${p => p.theme.colors.lightBlue};
  border-radius: 12px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 60px;

  border: 0;
  border-radius: 12px;

  background: ${p => p.theme.colors.darkBlue};

  transition: all 200ms ease;

  span {
    font-weight: bold;
    color: ${p => p.theme.colors.white};
    font-size: 20px;
  }

  &:hover {
    background: ${p => p.theme.colors.lightBlue};
  }
`;
