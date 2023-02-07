import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  gap: 1rem;
  width: 900px;

  input {
    flex: 1; // para ocupar o máximo de espaço possível
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;
