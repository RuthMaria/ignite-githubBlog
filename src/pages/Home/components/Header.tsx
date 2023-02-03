import React, { useEffect, useState } from 'react';

import { api } from '../../../lib/axios';

import github from '../../../assets/github.svg';
import building from '../../../assets/building.svg';
import userGroup from '../../../assets/user-group.svg';
import arrowUpRight from '../../../assets/arrow-up-right-from-square.svg';

import {
  Container,
  Img,
  Name,
  Bio,
  Span,
  Icon,
  Title,
  Group,
} from './Header.styles';
import { Link } from 'react-router-dom';

interface User {
  name: string;
  bio: string;
  avatar_url: string;
  login: string;
  company: string;
  followers: string;
  html_url: string;
}

export const Header: React.FC = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getUserGithub() {
      const response = await api.get('/users/RuthMaria');

      setUser(response.data);
    }

    getUserGithub();
  }, []);

  return (
    <Container>
      <Img src={user?.avatar_url} alt="" />

      <div>
        <Title>
          <Name>{user?.name}</Name>
          <Link to={String(user?.html_url)}>
            <span>GITHUB</span>
            <img src={arrowUpRight} />
          </Link>
        </Title>

        <Bio>{user?.bio}</Bio>

        <Group>
          <div>
            <Icon src={github} alt="" />
            <Span>{user?.login}</Span>
          </div>

          <div>
            <Icon src={building} alt="" />
            <Span>{user?.company}</Span>
          </div>

          <div>
            <Icon src={userGroup} alt="" />
            <Span>{user?.followers} seguidores</Span>
          </div>
        </Group>
      </div>
    </Container>
  );
};
