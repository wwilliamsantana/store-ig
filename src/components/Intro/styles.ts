import styled from 'styled-components'
import backgroundBlur from '../../assets/background-header-home.svg'

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 34rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

export const TitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 130%;
    font-weight: 900;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.baseTitle};
  }
  span {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.25rem;
  }
`

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 4.125rem;
`
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`
