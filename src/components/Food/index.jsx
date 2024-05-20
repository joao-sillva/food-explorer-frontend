import { Container, Title, Order } from './styles'
import { FiHeart } from 'react-icons/fi'
import { RxCaretRight } from 'react-icons/rx'
import { BiPencil } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive';

import { NumberPicker } from '../NumberPicker'
import { Button } from '../Button'

import theme from '../../styles/theme'

export function Food({ data, isAdmin, isChecked, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const fillFiHeart = <FiHeart size={24} fill={theme.COLORS.GRAY_200} />;
  
  return (
    <Container {...rest}>
      { isAdmin
        ? <BiPencil size={24} />
        : isChecked
        ? fillFiHeart
        : <FiHeart size={24} />
      }

      <img src={data.src} alt='Imagem do prato de comida' />

      <Title>
        <h2>{data.title}</h2>
        <RxCaretRight size={isDesktop ? '24px' : '14'} />
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