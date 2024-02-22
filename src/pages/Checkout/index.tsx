import { FormCheckout } from '../../components/FormCheckout'
import { OrderSummary } from '../../components/OrderSummary'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormCheckout />
      <OrderSummary />
    </CheckoutContainer>
  )
}
