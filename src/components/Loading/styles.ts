import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 1%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 150px;

  pointer-events: none;

  span {
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
    color: #eee;
    text-transform: uppercase;
  }
`;
