import React, { useEffect, useState } from 'react';

import { api } from '../../lib/axios';
import { Header, Search, Card } from './components';

import cover from '../../assets/cover.svg';

import { Container, Publications, Main } from './Home.styles';

export interface Issue {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
}

interface UserIssues {
  total_count: number;
  items: Issue[];
}

export const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [issues, setIssues] = useState<UserIssues>();

  const hasQuery = (query: string) => {
    setQuery(query);
    loadingIssues(query);
  };

  const loadingIssues = async (query: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query}repo:RuthMaria/ignite-githubBlog`,
      },
    });

    setIssues(response.data);
    setQuery('');
  };

  useEffect(() => {
    loadingIssues(query);
  }, []);

  const getIssuesCount = () => {
    const issuesCount = issues?.total_count | 0;

    return issuesCount > 1
      ? `${issuesCount} publicações`
      : `${issuesCount} publicação`;
  };

  return (
    <Container>
      <img src={cover} alt="" />

      <Header />

      <section>
        <Publications>
          <p>Publicações</p>
          <span>{getIssuesCount()}</span>
        </Publications>

        <Search hasQuery={hasQuery} />

        <Main>
          {issues?.items?.map((issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
        </Main>
      </section>
    </Container>
  );
};
