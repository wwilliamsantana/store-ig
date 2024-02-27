import * as z from 'zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import {
  AddressWrapper,
  FormContainer,
  FormContent,
  TitleSubtitle,
  Inputs,
  PaymentOption,
  Root,
  Item,
} from './styles'
import { Controller, useFormContext } from 'react-hook-form'

export const formSchema = z.object({
  cep: z
    .number()
    .gte(10000000, 'Preencha todos os dados')
    .lte(99999999, 'Preencha todos os dados'),
  rua: z.string().min(1, 'Preencha todos os dados'),
  numero: z.number().min(1, 'Preencha todos os dados'),
  complemento: z.string().optional(),
  bairro: z.string().min(1, 'Preencha todos os dados'),
  cidade: z.string().min(1, 'Preencha todos os dados'),
  uf: z.string().min(1, 'Preencha todos os dados'),
  methodPayment: z.enum(['credit', 'debit', 'money'], {
    required_error: "'Preencha todos os dados'",
  }),
})

export type FormSchemaProps = z.infer<typeof formSchema>

export function FormComponent() {
  const { register, control } = useFormContext()

  return (
    <FormContainer>
      <h2>Complete seu pedido</h2>
      <FormContent>
        <AddressWrapper>
          <TitleSubtitle>
            <MapPin color="#C47F17" />{' '}
            <div>
              <span>Endereço de entrega</span>{' '}
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleSubtitle>

          <Inputs>
            <input
              type="number"
              placeholder="CEP"
              className="cep"
              {...register('cep', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Rua"
              className="rua"
              {...register('rua')}
            />

            <div className="numberComplement">
              <input
                type="number"
                placeholder="Número"
                className="numero"
                {...register('numero', { valueAsNumber: true })}
              />
              <input
                type="text"
                placeholder="Complemento"
                className="complemento"
                {...register('complemento')}
              />
              <span>Opcional</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Bairro"
                className="bairro"
                {...register('bairro')}
              />
              <input
                type="text"
                placeholder="Cidade"
                className="cidade"
                {...register('cidade')}
              />
              <input
                type="text"
                placeholder="UF"
                className="uf"
                {...register('uf')}
              />
            </div>
          </Inputs>
        </AddressWrapper>

        <PaymentOption>
          <TitleSubtitle>
            <CurrencyDollar color="#8047f8" />{' '}
            <div>
              <span>Pagamento</span>{' '}
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </TitleSubtitle>

          <Controller
            control={control}
            name="methodPayment"
            render={({ field }) => {
              return (
                <Root value={field.value} onValueChange={field.onChange}>
                  <Item value="credit">
                    <CreditCard />
                    Cartão de crédito
                  </Item>
                  <Item value="debit">
                    <Bank />
                    Cartão de débito
                  </Item>
                  <Item value="money">
                    <Money />
                    Dinehiro
                  </Item>
                </Root>
              )
            }}
          />
        </PaymentOption>
      </FormContent>
    </FormContainer>
  )
}
