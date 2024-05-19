import { Container } from './styles'
import { FiMinus, FiPlus } from 'react-icons/fi'

export function NumberPicker() {
  return (
    <Container>
      <FiMinus />
      <span>01</span>
      <FiPlus />
    </Container>
  )
}