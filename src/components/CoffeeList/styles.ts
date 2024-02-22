import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;

  h2 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 2rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
  }
`
export const CoffeeListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3.375rem;
`
