import styled from 'styled-components'
import backgroundBlur from '../../../../assets/background-header-home.svg'

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 34rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${backgroundBlur});

  display: grid;
  place-items: initial;
`
export const MainContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`
export const ImageContainer = styled.div`
  width: 30rem;
  height: 16rem;
`
export const MainContent = styled.div``
