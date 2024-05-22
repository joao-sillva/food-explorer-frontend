import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 1.4rem;
  border-radius: 0.5rem;
  display: flex;
  flex-grow: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
  
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    max-width: 28.2rem;

    &:focus {
      border: none;
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`