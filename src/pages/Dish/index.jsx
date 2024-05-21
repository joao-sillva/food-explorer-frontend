import { Container, Content } from './styles'
import { RxCaretLeft } from 'react-icons/rx'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'
import { NumberPicker } from '../../components/NumberPicker'
import { Button } from '../../components/Button'
import { Menu } from '../../components/Menu'

import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function Dish({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      {!isDesktop &&
        <Menu isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      }

      <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {data &&
        <main>
          <div>
            <header>
              <ButtonText>
                <RxCaretLeft />
                Voltar
              </ButtonText>
            </header>

            <Content>
              <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />

              <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>

                {
                  data.ingredients &&
                  <section>
                    {
                      data.ingredients.map(ingredient => (
                        <Tag
                          key={String(ingredient.id)}
                          title={ingredient.name}
                        />
                      ))
                    }
                  </section>
                }

                <div className='buttons'>
                  {isAdmin
                    ? <Button title='Editar prato' className='edit' />
                    : <>
                      <NumberPicker />
                      <Button
                        title={isDesktop ? `incluir ∙ R$ ${data.price}` : `pedir ∙ R$ ${data.price}`}
                        className="include"
                        isCustomer={!isDesktop}
                      />
                    </>
                  }
                </div>
              </div>
            </Content>
          </div>
        </main>
      }
      <Footer />
    </Container>
  )
}