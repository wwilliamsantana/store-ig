import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
  }
`

export const LocationButtonCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div:first-child {
    background-color: ${(props) => props.theme.purpleLight};
    border-radius: 6px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    span {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme.purpleDark};
    }

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${(props) => props.theme.purple};
    }
  }
`
export const ButtonCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.yellowLight};
  border: 0;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme.yellowDark};
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;

    display: grid;
    place-items: center;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 100%;
    background-color: ${(props) => props.theme.yellowDark};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    line-height: 130%;
    font-weight: bold;
  }
`
