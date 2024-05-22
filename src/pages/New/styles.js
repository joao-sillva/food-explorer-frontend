import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:'header''content''footer';
  
  > main {
    width: 100%;
    grid-area: content;
    justify-self: center;
  }

  .tags {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding: 0.8rem;
    border-radius: 0.8rem;
   
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem; 
    
    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }

    input {
      background: transparent;
    }
  }

  .price {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  .save {
    > button {
      padding: 1.2rem 2.4rem;
  
      &:disabled {
        background: ${({ theme }) => theme.COLORS.LIGHT_RED};
        opacity: 1;
      }
    }
  }
  
  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 0.8rem;
      }

      ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        border-radius: 0.8rem;
      }
    }

    .save {
      justify-content: flex-end;

      > button {
        max-width: 17.2rem;
      }
    }
  }
`;

export const Form = styled.form`
  width: calc(100% - 6.4rem);
  margin: 1.1rem 3.2rem 5.3rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > header {
    display: flex;
    flex-direction: column;

    h1 {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      margin-top: 2.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 140%;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    section {
      width: 100%;
    }

    section input {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      border-radius: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    width: calc(100% - 24.8rem);
    margin: 4rem 12.4rem 11.6rem;
    gap: 3.2rem;

    > div {
      flex-direction: row;
      gap: 3.2rem;

      :first-of-type {
        section:nth-of-type(1) {
          max-width: 22.9rem;
        }

        section:nth-of-type(3) {
          max-width: 36.4rem;
        }
      }

      :nth-of-type(2) {
        section:nth-of-type(2) {
          max-width: 25.1rem;
        }
      }
    }
  }
`;

export const Image = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  position: relative;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  > label {
    display: flex;
    gap: 0.8rem;
    cursor: pointer;

    span {
      max-width: calc(100vw - 16rem);
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    input {
      width: 100%;
      position: absolute;
      right: 0;
      z-index: -1;
    }

    svg, span {
      transition: filter 0.2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.9);
      }
    }
  }

  @media (min-width: 1024px) {
    > label {
      span {
        max-width: 13.3rem;
      }
      
      input {
        max-width: 22.9rem;
      }
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;

    select {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: 0.8rem;
      border: none;
      
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
      cursor: pointer;
    }
    
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      position: absolute;
      top: 0;
      right: 1.6rem;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`