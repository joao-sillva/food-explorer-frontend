import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 96px;
  padding: 24px 123px;
  display: flex;
  gap: 32px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  > button:first-of-type {
    max-width: 216px;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 197px;
    height: 39px;
  }
`

export const Search = styled.div`
  display: flex;
  padding: 12px 14px;
  border-radius: 5px;
  flex-grow: 1;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    max-width: 282px;
  }
`
export const Logout = styled.div`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    width: 32px;
    height: 32px;
  }
`