import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 'header' 'content' 'footer';
  
  > main {
    grid-area: content;
    width: 100vw;
    justify-self: center;
  
    > div {
      max-width: 40.4rem;
      margin: 4.4rem auto 2.5rem;
      margin-left: max(2.4rem, calc(100% - 40.4rem));
    
      header {
        max-width: 37.6rem;
        height: 12.0rem;
        margin-inline: 1.2rem 1.6rem;
  
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background: linear-gradient(
          180deg, 
          ${({ theme }) => theme.COLORS.GRADIENT_100} 0%, 
          ${({ theme }) => theme.COLORS.GRADIENT_200} 100%
        );
  
        border-radius: .3rem;      
        position: relative;

        img {
          width: 19.1rem;
          height: auto;
          position: absolute;
          left: -3.0rem;
          bottom: 0;
        }
        
        div {
          width: 20.2rem;
          position: absolute;
          top: 3.6rem;
          right: 2.1rem;
          color: ${({ theme }) => theme.COLORS.GRAY_200};
        
          h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 140%;
            margin-bottom: .3rem;
          }
        
          p {
            font-size: 1.2rem;
            line-height: 140%;
          }
        }
      }
    }
  }
  
  @media (min-width: 768px) {
    > main > div {
      max-width: 72rem;
      margin-inline: max(2.4rem, calc((100% - 72rem) / 2));
    }
  
    > main > div header {
      max-width: 71.8rem;
    }
  }
  
  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;
  
    > main {
      overflow-y: auto;
  
      ::-webkit-scrollbar {
        width: .8rem;
      }
  
      ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        border-radius: .8rem;
      }
  
      > div {
        max-width: 112.2rem;
        margin: 17.2rem auto 4.8rem;
        margin-inline: max(12.3rem, calc((100% - 112.2rem) / 2));
        
        header {
          max-width: 112rem;
          height: 26.0rem;
          margin-inline: .1rem;
          border-radius: .8rem;
        
          img {
            width: 65.6rem;
            left: -7rem;
            bottom: -1.4rem;
          }
        
          div {
            width: 42.2rem;
            top: 8.8rem;
            right: 10rem;
        
            h1 {
              font-weight: 500;
              font-size: 4rem;
              margin-bottom: .8rem;
            }
        
            p {
              font-size: 1.6rem;
              line-height: 100%;
            }
          }
        }
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 6.2rem;
  
  section > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
  
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 2.4rem;
  }
  
  swiper-slide {
    max-width: 21.0rem;
  }
  
  @media (min-width: 1024px) {
    gap: 4,8rem;
  
    section > h2 {
      font-size: 3,2rem;
    }
  
    swiper-slide {
      max-width: 30,4rem;
    }
  }
`