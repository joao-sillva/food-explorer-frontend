import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.GRAY_400};
  outline: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  padding-right: 1.6rem; 
  border-radius: .8rem;

  > button {
    background: none;
    border: none;
    display: flex;
    align-items: center;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
  }

  > input {
    width: 100%;
    height: 3.2rem;
    padding: .8rem .8rem .1.6rem;
    border: none;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`