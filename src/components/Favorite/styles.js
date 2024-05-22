import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  gap: 1.3rem;

  > img {
    width: 7.2rem;
    height: fit-content;
  }
  
  > div {
    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;    
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  
    button {
      color: ${({ theme }) => theme.COLORS.LIGHT_RED};
      background: none;
      border: 0;
      font-size: 1.2rem;
      line-height: 160%;
    }
  }
  @media (min-width: 1024px) {
    width: 23.1rem;
  }
`