/** Packages */
import React from 'react';

import { useAuth } from '../../context/AuthContext';

/** My Components */
import { Container } from './styles';

const CleanPage: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <span>CleanPage</span>
      <button type="button" onClick={signOut}>
        Deslogar
      </button>
    </Container>
  );
};

export default CleanPage;
