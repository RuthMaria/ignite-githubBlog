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

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['blue']};
    color: ${(props) => props.theme['blue']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['blue']};
      border-color: ${(props) => props.theme['blue']};
      color: ${(props) => props.theme['base-text']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
