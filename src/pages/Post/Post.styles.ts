import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 864px;
    padding: 32px 40px;
    background-color: ${(props) => props.theme['base-profile']};
    border-radius: 10px;
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
    margin-top: -90px;
    position: absolute;
  }

  section {
    width: 100%;
    max-width: 864px;
    margin-top: 90px;
    padding: 32px 40px;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;

  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8.38px;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.2rem;
    color: ${(props) => props.theme['blue']};
    background: transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue']};
    }

    img {
      max-width: 12px;
    }
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 1.95rem;
  margin-top: 20px;
  margin-bottom: 8px;
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
  color: ${(props) => props.theme['base-span']};
  line-height: 1.6rem;
`;
