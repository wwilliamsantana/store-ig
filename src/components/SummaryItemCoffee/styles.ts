import styled from 'styled-components'

export const ItemCoffee = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-weight: bold;
    color: ${(props) => props.theme.baseText};
  }
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.baseSubtitle};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button.remove {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.baseText};
      border-radius: 6px;
      background-color: ${(props) => props.theme.baseButton};
      font-size: 0.75rem;
      line-height: 160%;
      cursor: pointer;
      outline: none;
      padding: 0.5rem;
      border: 0;

      svg {
        width: 1rem;
        height: 1rem;
        color: ${(props) => props.theme.purple};
      }

      &:hover {
        background-color: ${(props) => props.theme.baseHover};
      }
    }
  }
`

export const Qtd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme.baseButton};

  button.qtdButton {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    border: 0;
    color: ${(props) => props.theme.purple};
    background-color: transparent;
    cursor: pointer;
    outline: none;

    &:hover {
      color: ${(props) => props.theme.purpleDark};
    }
  }
`
