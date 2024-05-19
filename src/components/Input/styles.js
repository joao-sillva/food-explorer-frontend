import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 5px;

  > input {
    width: 100%;
    height: 48px;
    padding: 12px 14px;

    color: ${({ theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
  
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`