import { useContext } from 'react'
import { SummaryItemCoffee } from '../SummaryItemCoffee'
import {
  SummaryListCoffee,
  SummaryContainer,
  SummaryContent,
  SummaryMoney,
  ButtonFinished,
} from './styles'
import { CoffeeContext } from '../../context/CoffeeContext'

export function OrderSummary() {
  const { cart } = useContext(CoffeeContext)

  return (
    <SummaryContainer>
      <h2>Cafés selecionados</h2>
      <SummaryContent>
        <SummaryListCoffee>
          {cart.map((item) => {
            return <SummaryItemCoffee key={item.id} data={item} />
          })}
        </SummaryListCoffee>

        <SummaryMoney>
          <div>
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ 10,00</span>
          </div>
          <div>
            <p>Total</p>
            <span>R$ 39,70</span>
          </div>
        </SummaryMoney>

        <ButtonFinished>Confirmar pedido</ButtonFinished>
      </SummaryContent>
    </SummaryContainer>
  )
}
