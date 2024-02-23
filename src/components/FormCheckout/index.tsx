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

export function FormCheckout() {
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
            <input type="number" placeholder="CEP" className="cep" />
            <input type="text" placeholder="Rua" className="rua" />

            <div className="numberComplement">
              <input type="number" placeholder="Número" className="numero" />
              <input
                type="text"
                placeholder="Complemento"
                className="complemento"
              />
              <span>Opcional</span>
            </div>

            <div>
              <input type="text" placeholder="Bairro" className="bairro" />
              <input type="text" placeholder="Cidade" className="cidade" />
              <input type="text" placeholder="UF" className="uf" />
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

          <Root>
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
        </PaymentOption>
      </FormContent>
    </FormContainer>
  )
}
