import React from 'react';
// import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { formateDate } from '../../../../utils/formateDate';
import { Issue } from '../../Home';

import { Container, Title, Content } from './Card.styles';

interface Cardprop {
  issue: Issue;
}

export const Card: React.FC<Cardprop> = ({ issue }) => {
  const date = new Date(issue.created_at);

  return (
    <Container>
      <Link to={`description/${issue.number}`}>
        <Title>
          <p>{issue.title}</p>
          <span>{formateDate(date)}</span>
        </Title>

        <Content>{issue.body.slice(0, 150)}...</Content>
        {/* <ReactMarkdown>{issue.body}</ReactMarkdown> */}
      </Link>
    </Container>
  );
};
