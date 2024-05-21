import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

import { Container, Form, Brand } from './styles'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import brand from '../../assets/brand.svg'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!');
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      // one or more characters followed by an '@', 
      // followed by one or more characters, 
      // followed by a '.', followed by one or more characters
      return alert("Digite um e-mail válido!");
    }

    if (password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres!");
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar.')
        }
      }
    )
  }

  return (
    <Container>
      <Brand>
        <img src={brand} alt="Logo Food Explorer" />
      </Brand>

      <Form>
        <h2>Crie sua conta</h2>

        <Section title='Seu nome'>
          <Input
            placeholder='Exemplo: João da Silva'
            type='text'
            onChange={e => setName(e.target.value)}
          />
        </Section>

        <Section title='Email'>
          <Input
            placeholder='Exemplo: exemplo@exemplo.com.br'
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
        </Section>

        <Section title='Senha'>
          <Input
            placeholder='No mínimo 6 caracteres'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </Section>

        <Button title='Criar conta' onClick={handleSignUp} />

        <Link to='/'>
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}