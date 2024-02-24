import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { ItemCoffee, ItemContainer, ItemContent, Qtd } from './styles'
import coffee1 from '../../../public/Coffee1.svg'

export function SummaryItemCoffee() {
  return (
    <ItemCoffee>
      <ItemContainer>
        <img src={coffee1} alt="" />
        <ItemContent>
          <span>Expresso Tradicional</span>
          <div>
            <Qtd>
              <button className="qtdButton">
                <Minus />
              </button>
              <span>1</span>
              <button className="qtdButton">
                <Plus />
              </button>
            </Qtd>
            <button className="remove">
              <Trash />
              Remover
            </button>
          </div>
        </ItemContent>
      </ItemContainer>
      <strong>R$ 9, 90</strong>
    </ItemCoffee>
  )
}
