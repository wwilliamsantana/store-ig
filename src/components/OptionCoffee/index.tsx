import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  Action,
  AddCart,
  InfoContent,
  OptionCoffeeContainer,
  Qtd,
  TagsContainer,
  ValuesInfoContainer,
} from './styles'
import coffee1 from '../../assets/Coffee1.svg'

export function OptionCoffee() {
  return (
    <OptionCoffeeContainer>
      <img src={coffee1} alt="" />
      <TagsContainer>
        <strong>Especial</strong>
      </TagsContainer>
      <InfoContent>
        <h3>Expresso Tradicional</h3>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </InfoContent>

      <ValuesInfoContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <Action>
          <Qtd>
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </Qtd>
          <AddCart>
            <ShoppingCart weight="fill" />
          </AddCart>
        </Action>
      </ValuesInfoContainer>
    </OptionCoffeeContainer>
  )
}
