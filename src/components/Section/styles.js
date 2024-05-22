import styled from 'styled-components'

export const Container = styled.section`
  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
`