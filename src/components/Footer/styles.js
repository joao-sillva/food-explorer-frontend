import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 77px;
  padding: 30px;

  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  @media (min-width: 1024px) {
    padding: 24px 123px;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 142px;
    height: 18px;
  }

  @media (min-width: 1024px) {
    > img {
      width: 186px;
      height: 30px;
    }
  }
`

export const Copyright = styled.span`
  display: flex;
  align-items: center;

  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 160%;
  }
`