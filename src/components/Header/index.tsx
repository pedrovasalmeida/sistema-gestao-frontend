import React, { useState } from 'react';

import { AiOutlineArrowDown } from 'react-icons/ai';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';

import { useAuth } from '../../context/AuthContext';
import { useMenu } from '../../context/MenuContext';

import {
  Container,
  UserData,
  UserImage,
  UserName,
  UserFloatDiv,
} from './styles';

const Header: React.FC = () => {
  const { menuState, toggleMenu } = useMenu();
  const { user, signOut } = useAuth();

  const [userFloatDivState, setUserFloatDivState] = useState('hide');

  return (
    <Container>
      <span>
        Empresa
        <div>
          <p>Menu</p>
          {menuState === 'show' ? (
            <FiToggleRight size={25} onClick={toggleMenu} />
          ) : (
            <FiToggleLeft size={25} onClick={toggleMenu} />
          )}
        </div>
      </span>

      {user && (
        <>
          <UserData
            onClick={() => setUserFloatDivState('hide')}
            onMouseEnter={() => setUserFloatDivState('show')}
            onMouseLeave={() => setUserFloatDivState('hide')}
          >
            <UserImage />
            <UserName>{user.email}</UserName>
            <AiOutlineArrowDown size={12} />
          </UserData>
          <UserFloatDiv
            className={userFloatDivState}
            onMouseEnter={() => setUserFloatDivState('show')}
            onMouseLeave={() => setUserFloatDivState('hide')}
          >
            <button type="button" onClick={signOut}>
              <ImExit size={15} />
              Sair
            </button>
          </UserFloatDiv>
        </>
      )}
    </Container>
  );
};

export default Header;
