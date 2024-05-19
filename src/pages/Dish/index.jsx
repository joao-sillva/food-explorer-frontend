import { Container } from './styles'
import { RxCaretLeft } from 'react-icons/rx'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Dish() {
  return (
    <Container>
      <Header />

      <ButtonText>
        <RxCaretLeft />
        Voltar
      </ButtonText>

      <Tag title="alface" />
      <Tag title="cebola" />

      <Footer />
    </Container>
  )
}