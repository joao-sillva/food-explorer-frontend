import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Form, Brand } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'

import brand from '../../assets/brand.svg'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()

  function handleSignIn() {
    setLoading(true)

    signIn({ email, password }).finally(() => setLoading(false))
  }
  
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
            onChange={e => setEmail(e.target.value)}
          />
        </Section>

        <Section title='Senha'>
          <Input
            type='password' 
            placeholder='No mínimo 6 caracteres'
            onChange={e => setPassword(e.target.value)}
          />
        </Section>
  
        <Button title='Entrar' onClick={handleSignIn} loading={loading} />

        <Link to='/register'>
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )
}