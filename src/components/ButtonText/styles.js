import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;

  display: flex;
  align-items: center;

  > svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (min-width: 1024px) {
    font-weight: 700;
  }
`