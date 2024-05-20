import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 'header' 'content' 'footer';

  > main {
    grid-area: content;
    justify-self: center;
  }

  .tags {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    
    padding: .8rem;
    border-radius: .8rem;
    
    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }

    input {
      background-color: transparent;
    }
  }

  .price {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
    
    > button {
      padding: 1.2rem 2.4rem;
    }
   
    .delete {
      max-width: 16rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
   
    .save {
   
      &:disabled {
        opacity: 1;
        background: ${({ theme }) => theme.COLORS.LIGHT_RED};
      }
    }
  }

  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;
    
    > main {
      width: 100%;
      overflow-y: auto;
   
      ::-webkit-scrollbar {
        width: .8rem;
      }
   
      ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        border-radius: .8rem;
      }
    }
   
    .buttons {
      justify-content: flex-end;
   
      .delete {
        max-width: 13.5rem;
      }
   
      .save {
        max-width: 17.2rem;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 36.4rem;
  margin: 1.1rem auto 5.3rem;
  margin-inline: max(3.2rem, calc((100% - 36.4rem) / 2));

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > header {
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 2.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
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
      border-radius: .8rem;
    }
  }

  @media (min-width: 1024px) {
    max-width: 112rem;
    margin: 4.0rem auto 11.6rem;
    margin-inline: max(12.4rem, calc((100% - 112rem) / 2));
    gap: 3.2rem;

    > div {
      flex-direction: row;
      gap: 3.2rem;
      
      :first-of-type {
        section:nth-of-type(1) {
          max-width: 22.9rem;
        }
        
        section:nth-of-type(2) {
          max-width: 46.3rem;
        }

        section:nth-of-type(3) {
          max-width: 36.4rem;
        }
      }
    
      :nth-of-type(2) {
        section:nth-of-type(1) {
          max-width: 83.7rem;
        }
        
        section:nth-of-type(2) {
          max-width: 25.1rem;
        }
      }
    }
  }
`

export const Image = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  position: relative;
  padding: 1.2rem 3.2rem;
  border-radius: .8rem;
  
  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
  
  > label {
    display: flex;
    gap: .8rem;
    cursor: pointer;
  
    span {
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;
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
    input {
      max-width: 22.9rem;
    }
  }
`

export const Category = styled.div`
  > label {
    position: relative;
    
    select {
      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: .8rem;
      border: none;      
      cursor: pointer;
      
      background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
    }
    
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      
      position: absolute;
      top: 0;
      right: 1.6rem;
      cursor: pointer;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`