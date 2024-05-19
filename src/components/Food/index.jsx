import { Container, Title, Order } from './styles'
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { RxCaretRight } from 'react-icons/rx'
import { BiPencil } from 'react-icons/bi'

import { NumberPicker } from '../NumberPicker'
import { Button } from '../Button'

import theme from '../../styles/theme'

export function Food({ data, isAdmin, isChecked, ...rest }) {
  const fillFiHeart = <FiHeart fill={theme.COLORS.GRAY_200} />
  
  return (
    <Container {...rest}>
      { isAdmin
        ? <BiPencil />
        : isChecked
        ? fillFiHeart
        : <FiHeart />
      }

      <img src={data.src} alt="Imagem do prato de comida" />

      <Title>
        <h2>{data.title}</h2>
        <RxCaretRight />
      </Title>

      <p>{data.description}</p>
      <span>R$ {data.price}</span>

      { isAdmin &&
        <Order>
          <NumberPicker />
          <Button title='Incluir' />
        </Order>
      }        
    </Container>
  )
}