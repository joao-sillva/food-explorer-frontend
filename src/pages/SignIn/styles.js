import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  margin-inline: 6.5rem 4.7rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Brand = styled.div`
  display: flex;
  margin-inline: auto;

  > svg {
    width: 27.8rem;
    height: 4.4rem;
  }

  @media (min-width: 1024px) {
    margin-inline: 0;
    
    > svg {
      width: 32.4rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 31.6rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h2 {
   display: none;
  }

  > section h2 {
    margin-bottom: .8rem;
  }

  > section input {
    background: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: .8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;
  }

  @media (min-width: 1024px) {
    min-width: 47.6rem;
    padding: 6.4rem;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    > h2 {
      display: initial;
      font-family: 'Poppins', sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;
      text-align: center;
    }
    
    > section input {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: .5rem;
    }
  }
`