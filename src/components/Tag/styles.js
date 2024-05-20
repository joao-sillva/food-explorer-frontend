import styled from 'styled-components'

export const Container = styled.span`
  padding: .4rem .8rem;
  border-radius: .5rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`