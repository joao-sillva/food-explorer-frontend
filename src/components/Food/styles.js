import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
  border-radius: .8rem;

  max-width: 21rem;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  position: relative;

  svg {
    cursor: pointer;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  > img {
    max-width: 8.8rem;
    margin-top: ${({ isAdmin }) => isAdmin ? '4.6rem' : 'none'};
  }

  > span {
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: ${({ isAdmin }) => isAdmin ? '4.6rem' : 'none'};
  }

  @media (min-width: 1024px) {
    max-width: 30.4rem;
    gap: 1.5rem;
    
    > svg {
      right: 1.8rem;
    }
    
    > img {
      max-width: 17.6rem;
      margin-top: ${({ isAdmin }) => isAdmin ? '3.2rem' : 'none'};
    }
    
    > p {
      font-size: 1.4rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > span {
      font-size: 3.2rem;
      line-height: 160%;
      margin-bottom: ${({ isAdmin }) => isAdmin ? '3.2rem' : 'none'};
    }
  }
`

export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  display: flex;
  align-items: center;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  @media (min-width: 1024px) {
    > h2 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    }
  }
`

export const Order = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  
  @media (min-width: 1024px) {
    width: fit-content;
    flex-direction: row;
  }
`