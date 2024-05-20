import { Container, Form, Image, Category } from './styles'
import { FiUpload } from 'react-icons/fi'
import { RxCaretLeft } from 'react-icons/rx'
import { RiArrowDownSLine } from 'react-icons/ri'

import { useState } from 'react';
import { useMediaQuery } from "react-responsive";

import { Header } from '../../components/Header'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { FoodItem } from '../../components/FoodItem'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Menu } from "../../components/Menu";

export function New({ isNew, isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
       {!isDesktop && 
        <Menu isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      }

      <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main>
        <Form>
          <header>
            <ButtonText>
              <RxCaretLeft />
              Voltar
            </ButtonText>

            <h1>{isNew ? "Adicionar prato" : "Editar prato"}</h1>
          </header>

          <div>
            <Section title='Imagem do prato'>
              <Image className='image'>
                <label htmlFor='image'>
                  <FiUpload size={'2.4rem'} />
                  <span>Selecione imagem</span>

                  <Input
                    type='file'
                    id='image'
                  />
                </label>
              </Image>
            </Section>

            <Section title='Nome'>
              <Input className='name'
                placeholder={isNew ? "Ex.: Salada Ceasar" : "Salada Ceasar"}
                type='text'
              />
            </Section>

            <Section title='Categoria'>
              <Category className='category'>
                <label htmlFor='category'>
                  <select id='category'>
                    <option value='meal'>Refeição</option>
                    <option value='dessert'>Sobremesa</option>
                    <option value='beverage'>Bebida</option>
                  </select>

                  <RiArrowDownSLine size={'2.4rem'} />
                </label>
              </Category>
            </Section>
          </div>

          <div>
            <Section title='Ingredientes'>
              <div className='tags'>
                <FoodItem value='Pão Naan' />
                <FoodItem isNew placeholder='Adicionar' />
              </div>
            </Section>

            <Section title='Preço'>
              <Input className='price'
                placeholder='R$ 00,00'
                type='number'
              />
            </Section>
          </div>

          <Section title='Descrição'>
              <Textarea placeholder={isNew 
                  ? 'Fale brevemente sobre o prato, seus ingredientes e composição'
                  : 'A Salada César é uma opção refrescante para o verão.'
                } 
              />
          </Section>

          <div className='buttons'>
          {!isNew &&
            <Button title="Excluir prato" className="delete" />
          }
            <Button title="Salvar alterações" className="save" disabled />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  )
}