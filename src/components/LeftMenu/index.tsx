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

import { useHistory } from 'react-router-dom';
import { useMenu } from '../../context/MenuContext';

import { Container, TabDescription, MenuOption } from './styles';

const menuOptions = [
  {
    descricaoAba: 'Transporte',
    options: [
      {
        name: 'Lenha',
        icon: <FaTree size={20} />,
        route: '',
      },
      {
        name: 'Carvão',
        icon: <AiOutlineFire size={20} />,
        route: '',
      },
    ],
  },
  {
    descricaoAba: 'Manutenção',
    options: [
      {
        name: 'Manutenção em geral',
        icon: <AiOutlineSetting size={20} />,
        route: '',
      },
      {
        name: 'Combustível',
        icon: <GiFuelTank size={20} />,
        route: '',
      },
      {
        name: 'Troca de peças',
        icon: <FiTruck size={20} />,
        route: '',
      },
    ],
  },
  {
    descricaoAba: 'Estoque',
    options: [
      {
        name: `EPI's`,
        icon: <GiGasMask size={20} />,
        route: '',
      },
      {
        name: 'Uniformes',
        icon: <GiClothes size={20} />,
        route: '',
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
  const history = useHistory();

  const handleNavigate = (route: string) => {
    history.push(route);
  };

  return (
    <Container menuState={menuState}>
      <MenuOption onClick={() => handleNavigate('/')}>
        <AiOutlineHome size={20} />
        Início
        <AiOutlineArrowRight size={15} />
      </MenuOption>

      {menuOptions.map(option => (
        <React.Fragment key={`key#${option.descricaoAba}`}>
          <TabDescription>{option.descricaoAba}</TabDescription>
          {(option.options as object[]).map((item: any) => (
            <React.Fragment key={item.name}>
              <MenuOption>
                {item.icon}
                {item.name}
                <AiOutlineArrowRight size={15} />
              </MenuOption>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default LeftMenu;
