import React from 'react';

import {
  AiOutlineHome,
  AiOutlineArrowRight,
  AiOutlineFire,
  AiOutlineSetting,
  AiOutlineStock,
} from 'react-icons/ai';
import { FaTree } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { GiFuelTank, GiClothes, GiGasMask } from 'react-icons/gi';

import { useMenu } from '../../context/MenuContext';

import { Container, TabDescription, MenuOption } from './styles';

const menuOptions = [
  {
    descricaoAba: 'Transporte',
    options: [
      {
        name: 'Lenha',
        icon: <FaTree size={20} />,
      },
      {
        name: 'Carvão',
        icon: <AiOutlineFire size={20} />,
      },
    ],
  },
  {
    descricaoAba: 'Manutenção',
    options: [
      {
        name: 'Manutenção em geral',
        icon: <AiOutlineSetting size={20} />,
      },
      {
        name: 'Combustível',
        icon: <GiFuelTank size={20} />,
      },
      {
        name: 'Troca de peças',
        icon: <FiTruck size={20} />,
      },
    ],
  },
  {
    descricaoAba: 'Estoque',
    options: [
      {
        name: `EPI's`,
        icon: <GiGasMask size={20} />,
      },
      {
        name: 'Uniformes',
        icon: <GiClothes size={20} />,
      },
    ],
  },
  {
    descricaoAba: 'Financeiro',
    options: [
      {
        name: 'Receitas / Despesas',
        icon: <AiOutlineStock size={20} />,
      },
    ],
  },
];

const LeftMenu: React.FC = () => {
  const { menuState } = useMenu();

  return (
    <Container menuState={menuState}>
      <MenuOption>
        <AiOutlineHome size={20} />
        Início
        <AiOutlineArrowRight size={15} />
      </MenuOption>

      {menuOptions.map(option => (
        <>
          <TabDescription>{option.descricaoAba}</TabDescription>
          {option.options.map(item => (
            <MenuOption>
              {item.icon}
              {item.name}
              <AiOutlineArrowRight size={15} />
            </MenuOption>
          ))}
        </>
      ))}
    </Container>
  );
};

export default LeftMenu;
