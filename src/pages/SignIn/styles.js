import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  margin-inline: 65px 47px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Brand = styled.div`
  display: flex;
  margin-inline: auto;

  > svg {
    width: 278px;
    height: 44px;
  }

  @media (min-width: 1024px) {
    margin-inline: 0;
    
    > svg {
      width: 324px;
      height: 48px;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 316px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > h2 {
   display: none;
  }

  > section h2 {
    margin-bottom: 8px;
  }

  > section input {
    background: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 8px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }

  @media (min-width: 1024px) {
    min-width: 476px;
    padding: 64px;
    border-radius: 16px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    > h2 {
      display: initial;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 140%;
      text-align: center;
    }
    
    > section input {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 5px;
    }
  }
`