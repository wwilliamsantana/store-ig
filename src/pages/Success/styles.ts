import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 70rem;
  margin: 5rem auto 0;
  width: 100%;

  h1 {
    color: ${(props) => props.theme.yellowDark};
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
  }

  h2 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const AddressContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2.5rem;

  img {
    width: 30.75rem;
    height: 18.375rem;
  }
`

export const AddressContent = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  border: 1px solid ${(props) => props.theme.purple};
  border-top-right-radius: 16px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 6px;
`

interface ItemDeliveryProps {
  color: 'purple' | 'yellow' | 'yellowDark'
}

export const ItemDelivery = styled.div<ItemDeliveryProps>`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  div:first-child {
    background-color: ${(props) =>
    props.color === 'yellow'
      ? props.theme.yellow
      : props.color === 'yellowDark'
        ? props.theme.yellowDark
        : props.theme.purple};
    padding: 0.5rem;
    border-radius: 9999px;
    display: grid;
    place-items: center;

    svg {
      color: ${(props) => props.theme.white};
      width: 1rem;
      height: 1rem;
    }
  }

  div:last-child {
    color: ${(props) => props.theme.baseText};
  }
`

// linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
