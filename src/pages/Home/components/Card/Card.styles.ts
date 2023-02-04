import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 32px;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    line-height: 32px;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const Content = styled.div`
  color: ${(props) => props.theme['base-text']};
  line-height: 26px;
`;
