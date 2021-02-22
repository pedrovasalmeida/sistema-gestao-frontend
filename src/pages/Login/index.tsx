import React, { useRef, useState } from 'react';

import { FiUser } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import { useAuth } from '../../context/AuthContext';

import Input from '../../components/Input';
import sendToast from '../../components/SendToast';
import Loading from '../../components/Loading';

import { Container, Label, LoginButton } from './styles';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const userData: any = formRef.current?.getData();

    if (!userData.email && !userData.password) {
      sendToast('Insira seu e-mail/senha', 'error');
      setLoading(false);
      return;
    }

    if (!userData.email.includes('@') || !userData.email.includes('.')) {
      sendToast('Insira um e-mail válido', 'error');
      setLoading(false);
      return;
    }

    if (!userData.password || userData.password.length < 4) {
      sendToast('Insira uma senha de, no mínimo, 4 caracteres', 'error');
      setLoading(false);
      return;
    }

    if (userData.email && userData.password.length > 3) {
      const { email, password } = userData;

      if (email === 'admin@marilia.com' && password === '1234') {
        sendToast('Logado. Entrando...', 'success');
        setLoading(false);

        setTimeout(() => {
          signIn({ email, password });
        }, 2000);
      } else {
        setTimeout(() => {
          setLoading(false);
          sendToast('Login/senha incorretos', 'error');
        }, 1000);
      }
    }
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Label>Seu e-mail</Label>
        <Input name="email" icon={FiUser} type="text" />

        <Label>Sua senha</Label>
        <Input name="password" icon={RiLockPasswordLine} type="password" />

        <LoginButton type="submit">
          <span>Login</span>
        </LoginButton>
      </Form>

      {loading && <Loading />}
    </Container>
  );
};

export default Login;
