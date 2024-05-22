import styled from 'styled-components'

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  background: none;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;

  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
  }
  
  @media (min-width: 1024px) {
    font-weight: 700;
  }
`