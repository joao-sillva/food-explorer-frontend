import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
  border-radius: 8px;

  max-width: 304px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;

  svg {
    cursor: pointer;
  }

  > svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    position: absolute;
    top: 16px;
    right: 18px;
  }

  > img {
    max-width: 176px;
    margin-top: 31px;
  }

  > p {
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > span {
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    margin-bottom: 31px;
  }
`

export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  display: flex;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    line-height: 140%;
  }

  > svg {
    width: 34px;
    height: 34px;
  }
`

export const Order = styled.div`
  display: flex;
  gap: 16px;
`