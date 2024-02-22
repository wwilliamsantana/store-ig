import styled from 'styled-components'

export const OptionCoffeeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 8px;

  img {
    width: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  & > strong {
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    line-height: 130%;
    background-color: ${(props) => props.theme.yellowLight};
    color: ${(props) => props.theme.yellowDark};
    border-radius: 100px;
    margin-top: 0.75rem;
  }
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
  padding: 0 1.25rem;

  h3 {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
  }

  span {
    text-align: center;
    color: ${(props) => props.theme.baseLabel};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const ValuesInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem 1.25rem;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseText};
    line-height: 130%;

    strong {
      font-size: 1.5rem;
      font-family: 'Baloo 2', sans-serif;
      line-height: 130%;
      color: ${(props) => props.theme.baseText};
    }
  }
`

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const Qtd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme.baseButton};

  & > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    border: 0;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const AddCart = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.purpleDark};
  color: ${(props) => props.theme.white};
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;

  display: grid;
  place-items: center;
`
