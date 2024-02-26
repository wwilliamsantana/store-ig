import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;

  h2 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const FormContent = styled.div`
  margin-top: 1rem;
`

export const AddressWrapper = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  padding: 2.5rem;
  border-radius: 6px;
  width: 100%;
`

export const TitleSubtitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  div span {
    color: ${(props) => props.theme.baseSubtitle};
    line-height: 130%;
  }

  div p {
    color: ${(props) => props.theme.baseText};
    font-size: 0.875rem;
    line-height: 130%;
  }
`
export const Inputs = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background-color: ${(props) => props.theme.baseInput};
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid transparent;
    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme.baseLabel};
      font-size: 0.875rem;
    }

    &:hover {
      border-color: ${(props) => props.theme.yellowDark};
    }
  }

  input.cep {
    width: 12.5rem;
  }

  input.rua {
    flex: 1;
  }

  div.numberComplement {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;

    input.numero {
      width: 12.5rem;
    }

    input.complemento {
      flex: 1;
    }

    span {
      color: ${(props) => props.theme.baseLabel};
      font-style: italic;
      font-size: 0.75rem;
      position: absolute;
      right: 20px;
      opacity: 0.7;
    }
  }

  div:last-child {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    input.bairro {
      width: 12.5rem;
    }

    input.cidade {
      flex: 1;
    }

    input.uf {
      width: 3.75rem;
    }
  }
`

export const PaymentOption = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  padding: 2.5rem;
  border-radius: 6px;
  width: 100%;
  margin-top: 0.75rem;
`

export const Root = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const Item = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid transparent;
  color: ${(props) => props.theme.baseText};
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 160%;

  svg {
    color: ${(props) => props.theme.purple};
    width: 1rem;
    height: 1rem;
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.purpleLight};
    border-color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.baseHover};
  }
`
