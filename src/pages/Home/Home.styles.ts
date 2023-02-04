import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 100vw;
  }

  section {
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
    margin-bottom: 234px;
  }
`;

export const Publications = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  margin-top: 176px;
  width: 900px;

  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 28.8px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
    color: ${(props) => props.theme['base-span']};
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 48px;
  width: 900px;
`;
