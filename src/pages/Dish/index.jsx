import { Container, Content } from './styles'
import { RxCaretLeft } from 'react-icons/rx'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'
import { NumberPicker } from '../../components/NumberPicker'
import { Button } from '../../components/Button'
import { Menu } from '../../components/Menu'

import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

export function Dish({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      {!isDesktop &&
        <Menu isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      }

      <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main>
        <div>
          <header>
            <ButtonText>
              <RxCaretLeft />
              Voltar
            </ButtonText>
          </header>

          <Content>
            <img src='../../assets/salada-ravanello.png" alt="Salada Ravanello' />

            <div>
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

              <section>
                <Tag title='alface' />
                <Tag title='cebola' />
                <Tag title='pão naan' />
                <Tag title='pepino' />
                <Tag title='rabanete' />
                <Tag title='tomate' />
              </section>

              <div className='buttons'>
                {isAdmin
                  ? <Button title='Editar prato' className='edit' />
                  : <>
                    <NumberPicker />
                    <Button title='incluir ∙ R$ 25,00' className='include' />
                  </>
                }
              </div>
            </div>
          </Content>
        </div>
      </main>
      <Footer />
    </Container>
  )
}