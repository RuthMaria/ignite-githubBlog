import { Outlet } from 'react-router-dom';
import cover from '../assets/cover.svg';

import { Container } from './DefaultLayout.styles';

/* Dependendo da rota que estiver sendo acessada, o componente Outlet irá renderizar o componente da rota ativa no momento */

export const DefaultLayout: React.FC = () => {
  return (
    <Container>
      <img src={cover} alt="" />
      <Outlet />
    </Container>
  );
};
