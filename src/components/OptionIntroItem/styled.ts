import styled from 'styled-components'

interface OptionColorProps {
  color: 'yellow' | 'grey' | 'yellowLight' | 'purple'
}

const colors = {
  yellow: 'yellowDark',
  grey: 'baseText',
  yellowLight: 'yellow',
  purple: 'purple',
}

export const OptionItem = styled.div<OptionColorProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    padding: 0.5rem;
    background-color: ${(props) => props.theme[colors[props.color]]};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1rem;
      height: 1rem;
      color: ${(props) => props.theme.white};
    }
  }

  span {
    color: ${(props) => props.theme.baseText};
    line-height: 130%;
  }
`
