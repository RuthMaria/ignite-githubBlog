import ReactMarkdown from 'react-markdown';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { api } from '../../lib/axios';
import { formateDate } from '../../utils/formateDate';

import github from '../../assets/github.svg';
import calendar from '../../assets/calendar.svg';
import comment from '../../assets/comment.svg';
import chevronLeft from '../../assets/chevron-left.svg';
import arrowUpRight from '../../assets/arrow-up-right-from-square.svg';

import { Container, Group, Title, Span, Nav, Icon } from './Post.styles';

export interface Issue {
  comments: string;
  title: string;
  created_at: string;
  body: string;
}

interface User {
  login: string;
  html_url: string;
}

export const Post: React.FC = () => {
  const { number } = useParams();
  const [user, setUser] = useState<User>();
  const [issue, setIssue] = useState<Issue>();

  const loadingIssue = async () => {
    const response = await api.get(
      `/repos/RuthMaria/ignite-githubBlog/issues/${number}`
    );

    setIssue(response.data);
  };

  const loadingUserGithub = async () => {
    const response = await api.get('/users/RuthMaria');

    setUser(response.data);
  };

  useEffect(() => {
    loadingIssue();
    loadingUserGithub();
  }, []);

  return (
    <Container>
      <div>
        <Nav>
          <button onClick={() => window.history.back()}>
            <img src={chevronLeft} alt="" />
            <span>VOLTAR</span>
          </button>
          <Link to={String(user?.html_url)}>
            <span>GITHUB</span>
            <img src={arrowUpRight} />
          </Link>
        </Nav>

        <Title>{issue?.title}</Title>

        <Group>
          <div>
            <Icon src={github} alt="" />
            <Span>{user?.login}</Span>
          </div>

          <div>
            <Icon src={calendar} alt="" />
            <Span>{issue && formateDate(new Date(issue?.created_at))}</Span>
          </div>

          <div>
            <Icon src={comment} alt="" />
            <Span>{issue?.comments} Comentários</Span>
          </div>
        </Group>
      </div>

      <section>
        <ReactMarkdown>{issue?.body}</ReactMarkdown>
      </section>
    </Container>
  );
};
