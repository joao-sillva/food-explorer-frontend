import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
  
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`