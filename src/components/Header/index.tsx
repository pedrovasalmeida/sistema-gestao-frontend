import React from 'react';

import { AiOutlineArrowDown } from 'react-icons/ai';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';

import { useAuth } from '../../context/AuthContext';
import { useMenu } from '../../context/MenuContext';

import { Container, UserData, UserImage, UserName } from './styles';

const Header: React.FC = () => {
  const { menuState, toggleMenu } = useMenu();
  const { user } = useAuth();

  return (
    <Container>
      <span>
        Empresa
        <p>Menu</p>
        {menuState === 'show' ? (
          <FiToggleRight size={25} onClick={toggleMenu} />
        ) : (
          <FiToggleLeft size={25} onClick={toggleMenu} />
        )}
      </span>

      {user && (
        <UserData>
          <UserImage />
          <UserName>{user.email}</UserName>
          <AiOutlineArrowDown size={12} />
        </UserData>
      )}
    </Container>
  );
};

export default Header;
