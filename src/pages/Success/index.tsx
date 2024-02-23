import { Clock, MapPin } from '@phosphor-icons/react'
import {
  AddressContainer,
  SuccessContainer,
  AddressContent,
  ItemDelivery,
} from './styles'
import illustration from '../../assets/Illustration.svg'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <AddressContainer>
        <AddressContent>
          <ItemDelivery color="purple">
            <div>
              <MapPin />
            </div>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 10</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </div>
          </ItemDelivery>
        </AddressContent>

        <img src={illustration} alt="" />
      </AddressContainer>
    </SuccessContainer>
  )
}
