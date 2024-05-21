import { Container, Title, Order } from './styles'
import { FiHeart } from 'react-icons/fi'
import { RxCaretRight } from 'react-icons/rx'
import { BiPencil } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import { api } from '../../services/api'

import { NumberPicker } from '../NumberPicker'
import { Button } from '../Button'

import theme from '../../styles/theme'

export function Food({ data, isAdmin, isChecked, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const fillFiHeart = <FiHeart size={'2.4rem'} fill={theme.COLORS.GRAY_200} />
  
  return (
    <Container {...rest} isAdmin={isAdmin}>
      { isAdmin
        ? <BiPencil size={'2.4rem'} />
        : isChecked
        ? fillFiHeart
        : <FiHeart size={'2.4rem'} />
      }

      <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem do prato." />

      <Title>
        <h2>{data.name}</h2>
        <RxCaretRight size={isDesktop ? '2.4rem' : '1.4rem'} />
      </Title>

      {isDesktop && <p>{data.description}</p>}
      <span>R$ {data.price}</span>

      { !isAdmin &&
        <Order>
          <NumberPicker />
          <Button title='Incluir' />
        </Order>
      }        
    </Container>
  )
}