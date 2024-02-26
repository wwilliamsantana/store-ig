import { FormProvider, useForm } from 'react-hook-form'
import { FormCheckout } from '../../components/FormCheckout'
import { OrderSummary } from '../../components/OrderSummary'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const methodsForm = useForm()

  function submitForm(data: any) {
    console.log('Test')
  }

  return (
    <FormProvider {...methodsForm}>
      <CheckoutContainer onSubmit={methodsForm.handleSubmit(submitForm)}>
        <FormCheckout />
        <OrderSummary />
      </CheckoutContainer>
    </FormProvider>
  )
}

// Tranforme CheckoutContainer em form, adicionando o provider do useForm , é teriamos acesso as funções em ambos componentes
