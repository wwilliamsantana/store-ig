import { Clock, MapPin } from '@phosphor-icons/react'
import {
  AddressContainer,
  SuccessContainer,
  AddressContent,
  ItemDelivery,
} from './styles'
import illustration from '../../assets/Illustration.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Success() {
  const { order } = useContext(CoffeeContext)
  const paymentsOption = {
    credit: 'Crédito',
    money: 'Dinheiro',
    debit: 'Débito',
  }

  return (
    <SuccessContainer>
      {order ? (
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </div>
      ) : (
        <div>
          <h1>Tivemos algum problema com seus dados</h1>
          <h2>Tente novamente fazer o pedido</h2>
        </div>
      )}

      <AddressContainer>
        {order && (
          <AddressContent>
            <ItemDelivery color="purple">
              <div>
                <MapPin />
              </div>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    Rua {order.rua}, {order.cidade}
                  </strong>
                </p>
                <p>
                  {order.cidade} - {order.uf}
                </p>
              </div>
            </ItemDelivery>

            <ItemDelivery color="yellow">
              <div>
                <Clock />
              </div>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min </strong>
              </div>
            </ItemDelivery>

            <ItemDelivery color="yellowDark">
              <div>
                <MapPin />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{paymentsOption[order.methodPayment]}</strong>
              </div>
            </ItemDelivery>
          </AddressContent>
        )}

        <img src={illustration} alt="" />
      </AddressContainer>
    </SuccessContainer>
  )
}
