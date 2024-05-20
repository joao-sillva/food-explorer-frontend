import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  display: flex;
  padding-left: 14px;
  border-radius: 5px;
  flex-grow: 1;
  
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
  
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  
  input {
    max-width: 282px;
    
    &:focus {
      border: none;
    }
  }
`