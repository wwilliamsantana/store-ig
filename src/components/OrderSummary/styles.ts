import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;

  h2 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const SummaryContent = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1rem;
`

export const SummaryListCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SummaryMoney = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.baseText};
    font-size: 0.875rem;
  }

  div:last-child {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.25rem;
    font-weight: 900;
  }
`
export const ButtonFinished = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  border: none;
  outline: none;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 160%;

  cursor: pointer;

  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.yellowDark};
  }
`
