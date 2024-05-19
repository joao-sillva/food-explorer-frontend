import styled from 'styled-components'

export const Container = styled.span`
  padding: 4px 8px;
  margin-right: 12px;
  border-radius: 5px;

  font-size: 14px;
  line-height: 24px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`