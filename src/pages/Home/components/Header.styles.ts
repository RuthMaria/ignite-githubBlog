import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  padding: 32px 40px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -90px;
  position: absolute;
`;

export const Img = styled.img`
  max-width: 148px;
  max-height: 148px;
  border-radius: 8px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8.38px;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.2rem;
    color: ${(props) => props.theme['blue']};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue']};
    }

    img {
      max-width: 12px;
    }
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 1.95rem;
`;

export const Bio = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6rem;
  width: 650px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const Icon = styled.img`
  max-width: 18px;
  max-height: 18px;
`;

export const Group = styled.div`
  display: flex;
  gap: 24px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.6rem;
`;
