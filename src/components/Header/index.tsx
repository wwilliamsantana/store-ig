import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import LogoCoffee from '../../assets/logoCoffee.svg'
import {
  ButtonCard,
  HeaderContainer,
  LocationButtonCardContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CoffeeContext)

  const qtdTotalCart = cart.reduce((acc, current) => acc + current.qtd, 0)

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={LogoCoffee} alt="" />
      </Link>
      <LocationButtonCardContainer>
        <div>
          <MapPin weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <Link to={'/checkout'}>
          <ButtonCard>
            <ShoppingCart weight="fill" />
            <span>{qtdTotalCart}</span>
          </ButtonCard>
        </Link>
      </LocationButtonCardContainer>
    </HeaderContainer>
  )
}
