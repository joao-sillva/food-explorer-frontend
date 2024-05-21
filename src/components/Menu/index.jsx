import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'
import { Header } from '../../components/Header'
import { Search } from '../Search'
import { ButtonText } from '../ButtonText'

export function Menu({ isAdmin, isMenuOpen, setIsMenuOpen, setSearch, isDisabled }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleNew() {
    navigate("/new");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main>
        <Search setSearch={setSearch} isDisabled={isDisabled} />

        {isAdmin ? (
            <ButtonText onClick={handleNew}>
              Novo prato
            </ButtonText>
          ) : null
        } 

        <ButtonText onClick={handleSignOut}>
          Sair
        </ButtonText>
      </main>
    </Container>
  )
}