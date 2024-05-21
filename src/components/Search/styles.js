import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  display: flex;
  padding-left: 1.4rem;
  border-radius: .5rem;
  flex-grow: 1;
  
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