import styled from 'styled-components'

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: none;
  background: none;
  border-radius: 5px;
  position: relative;

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 24px;

  > span {
    position: absolute;
    top: -4px;
    right: -5.54px;
    background: ${({ theme }) => theme.COLORS.DARK_RED};
    border-radius: 99px;
    padding-inline: 5px;
  }

  &:disabled {
    opacity: .5;
  }

  @media (min-width: 1024px) {
    gap: 8px;
    padding: 12px 32px;
    
    > span {
      position: initial;
      padding-inline: 0;
    }
  }
`