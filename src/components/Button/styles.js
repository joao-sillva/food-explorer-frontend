import styled from 'styled-components'

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  width: 100%;
  padding: 1.2rem 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: none;
  border-radius: .5rem;
  position: relative;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  line-height: 2.4rem;

  > span {
    position: absolute;
    top: -0.4rem;
    right: -0.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_RED};
    border-radius: 9.9rem;
    padding-inline: .6rem;
  }

  &:disabled {
    opacity: .5;
  }

  @media (min-width: 1024px) {
    gap: .8rem;
    padding: 1.2rem 3.2rem;
    
    > span {
      position: initial;
      padding-inline: 0;
    }
  }
`