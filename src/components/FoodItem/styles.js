import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.GRAY_400};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin: 0 16px 8px 0;
  padding: 0 16px 0 0; 
  border-radius: 8px;

  > button {
    background: none;
    border: none;
    display: flex;
    align-items: center;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
  }

  > input {
    width: 100%;
    height: 32px;
    padding: 8px 8px 16px;
    border: none;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`