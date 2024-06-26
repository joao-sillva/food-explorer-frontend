import { Container, Brand, Copyright } from './styles'
import brand from '../../assets/footer-brand.svg'

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={brand} alt='Brand Food Explorer' />
      </Brand>

      <Copyright>
        © 2024 - Todos os direitos reservados.
      </Copyright>
    </Container>
  )
}