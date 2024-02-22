import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import LogoCoffee from '../../assets/logoCoffee.svg'
import {
  ButtonCard,
  HeaderContainer,
  LocationButtonCardContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffee} alt="" />
      <LocationButtonCardContainer>
        <div>
          <MapPin weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <ButtonCard>
          <ShoppingCart weight="fill" />
          <span>2</span>
        </ButtonCard>
      </LocationButtonCardContainer>
    </HeaderContainer>
  )
}
