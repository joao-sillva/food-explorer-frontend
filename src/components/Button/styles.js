import styled from 'styled-components'

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  border: none;
  border-radius: 5px;
  padding: 12px 32px;

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 24px;

  &:disabled {
    opacity: .5;
  }
`