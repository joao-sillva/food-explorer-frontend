import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  button {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: none;
    border: none;
    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }

    @media (min-width: 1024px) {
      svg,
      span {
        font-size: 2rem;
        font-weight: 700;
        line-height: 160%;
      }
    }
  }
`