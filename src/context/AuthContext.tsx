import React, { useState, createContext, useContext } from 'react';

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserCredentials {
  email: string;
  password: string;
  token: string;
}

interface UserProps {
  email: string;
  token: string;
}

interface AuthContextProps {
  user: UserProps | null;
  signIn: (credentials: SignInCredentials) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [
    userCredentials,
    setUserCredentials,
  ] = useState<UserCredentials | null>(() => {
    const userFromStorage = localStorage.getItem('@GestaoMarilia:user');

    if (!userFromStorage) return null;

    const userData = JSON.parse(userFromStorage);

    return userData;
  });

  const signIn = ({ email, password }: SignInCredentials) => {
    if (email !== 'admin@marilia.com' && password !== '1234') {
      setUserCredentials(null);
      return;
    }

    if (email && password) {
      const token = `${email + password}19215u`;

      localStorage.setItem(
        '@GestaoMarilia:user',
        JSON.stringify({ email, password, token }),
      );

      setUserCredentials({ email, password, token });
    }
  };

  const signOut = () => {
    localStorage.removeItem('@GestaoMarilia:user');
    setUserCredentials(null);
  };

  return (
    <AuthContext.Provider value={{ user: userCredentials, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');

  return context;
}
