import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas:'header''content';

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
  transition: opacity 0.7s ease-out, visibility 0.7s ease-out;

  > main {
    width: calc(100% - 5.6rem);
    margin: 3.6rem 2.8rem 1.4rem;
    grid-area: content;
    justify-self: center;

    > div {
      margin-bottom: 3.6rem;

      input {
        max-width: 100%;
      }
    }

    button {
      width: 100%;
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};      
      font-weight: 300;
    }
  }
`