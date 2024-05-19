import { Link } from 'react-router-dom'
import { Container, Form, Brand } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'

import brand from '../../assets/brand.svg'

export function SignIn() {
  return (
    <Container>
      <Brand>
        <img src={brand} alt="Logo Food Explorer" />
      </Brand>

      <Form>
        <h2>Faça seu login</h2>

        <Section title='Email'>
          <Input
            type='text' 
            placeholder='Exemplo: exemplo@exemplo.com.br'
          />
        </Section>

        <Section title='Senha'>
          <Input
            type='password' 
            placeholder='No mínimo 6 caracteres'
          />
        </Section>
  
        <Button title='Entrar' />

        <Link to='/register'>
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )
}