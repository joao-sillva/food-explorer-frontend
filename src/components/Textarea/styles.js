import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 17.2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;
  border-radius: .8rem;
  padding: 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`