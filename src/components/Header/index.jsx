import { Container, Brand, Search, Logout } from './styles'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Button } from '../Button'
import { Input } from '../Input'

import brand from '../../assets/brand.svg'
import brandAdmin from '../../assets/brand-admin.svg'

export function Header({ isAdmin }) {
  const logo = isAdmin ? brandAdmin : brand
  
  return (
    <Container>
      <Brand>
        <img src={logo} alt='logo Food Explorer' />
      </Brand>

      <Search>
        <Input 
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
      </Search>

      { isAdmin 
        ? <Button title='Novo prato' />
        : <Button title='Pedidos' isCustomer $orderCount={0} />
      } 

      <Logout>
        <FiLogOut />
      </Logout>    
    </Container>
  )
}