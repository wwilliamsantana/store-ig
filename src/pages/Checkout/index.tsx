import { FormProvider, useForm } from 'react-hook-form'
import {
  FormComponent,
  formSchema,
  FormSchemaProps,
} from '../../components/FormComponent'
import { OrderSummary } from '../../components/OrderSummary'
import { CheckoutContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Checkout() {
  const formMethods = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
  })

  const { addOrder } = useContext(CoffeeContext)

  function submitForm(data: FormSchemaProps) {
    const { rua, numero, cidade, uf, methodPayment } = data

    addOrder({
      cidade,
      methodPayment,
      numero,
      rua,
      uf,
    })
  }

  return (
    <FormProvider {...formMethods}>
      <CheckoutContainer onSubmit={formMethods.handleSubmit(submitForm)}>
        <FormComponent />
        <OrderSummary />
      </CheckoutContainer>
    </FormProvider>
  )
}
