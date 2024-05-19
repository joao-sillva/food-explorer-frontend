import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  margin-inline: 154px 108px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Brand = styled.div`
  display: flex;

  > svg {
    width: 524px;
    height: 48px;
  }
`

export const Form = styled.form`
  min-width: 476px;
  padding: 64px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
  }

  > section h2 {
    margin-bottom: 8px;
  }

  > section input {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }
`