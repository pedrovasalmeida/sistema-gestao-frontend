import React, { useContext, createContext, useState } from 'react';

interface MenuContext {
  menuState: string;
  toggleMenu: () => void;
}

const MenuContext = createContext({} as MenuContext);

export const MenuProvider: React.FC = ({ children }) => {
  const [menuState, setMenuState] = useState(() => {
    const menuStateFromStorage = localStorage.getItem(
      '@GestaoMarilia:menuOption',
    );

    if (menuStateFromStorage) return menuStateFromStorage;

    localStorage.setItem('@GestaoMarilia:menuOption', 'show');

    return 'show';
  });

  const toggleMenu = () => {
    const newMenuState = menuState === 'show' ? 'hide' : 'show';

    localStorage.setItem('@GestaoMarilia:menuOption', newMenuState);
    setMenuState(newMenuState);
  };

  return (
    <MenuContext.Provider value={{ menuState, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu(): MenuContext {
  const context = useContext(MenuContext);

  if (!context)
    throw new Error('useMenu deve ser usado dentro de um MenuProvider');

  return context;
}
