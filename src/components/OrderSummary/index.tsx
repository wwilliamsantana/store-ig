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
import { useFormContext } from 'react-hook-form'

export function OrderSummary() {
  const { cart } = useContext(CoffeeContext)
  const {
    formState: { isValid },
  } = useFormContext()

  const amount = cart.reduce(
    (acc, current) => acc + current.value * current.qtd,
    0,
  )

  const formatAmout = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <SummaryContainer>
      <h2>Cafés selecionados</h2>
      <SummaryContent>
        <SummaryListCoffee>
          {cart.map((item) => {
            return <SummaryItemCoffee key={item.id} data={item} />
          })}
        </SummaryListCoffee>

        {cart.length > 0 ? (
          <SummaryMoney>
            <div>
              <p>Total de itens</p>
              <span>{formatAmout.format(amount)}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 10,00</span>
            </div>
            <div>
              <p>Total</p>
              <span>
                {amount > 0 ? formatAmout.format(amount + 10) : 'R$ 0,00'}
              </span>
            </div>
          </SummaryMoney>
        ) : (
          <strong className="order">Carrinho vazio</strong>
        )}

        <ButtonFinished
          type="submit"
          disabled={!(isValid && !(cart.length === 0))}
        >
          Confirmar pedido
        </ButtonFinished>
      </SummaryContent>
    </SummaryContainer>
  )
}
