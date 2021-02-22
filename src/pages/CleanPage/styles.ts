import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 56px);
  width: 100%;

  background-color: ${p => p.theme.colors.background};
`;
