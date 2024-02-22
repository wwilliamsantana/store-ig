import {
  HeaderContainer,
  ImageContainer,
  MainContainer,
  OptionContainer,
  OptionWrapper,
  TitleSubtitle,
} from './styles'
import imageCoffeeHome from '../../assets/coffee-Home.svg'

import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { OptionIntroItems } from '../OptionIntroItem'

export function Intro() {
  return (
    <HeaderContainer>
      <MainContainer>
        <div>
          <TitleSubtitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleSubtitle>

          <OptionContainer>
            <OptionWrapper>
              <OptionIntroItems text="Compra simples e segura" color="yellow">
                <ShoppingCart weight="fill" />
              </OptionIntroItems>
              <OptionIntroItems
                text="Entrega rápida e rastreada"
                color="yellowLight"
              >
                <Timer weight="fill" />
              </OptionIntroItems>
            </OptionWrapper>
            <OptionWrapper>
              <OptionIntroItems
                text="Embalagem mantém o café intacto"
                color="grey"
              >
                <Package weight="fill" />
              </OptionIntroItems>
              <OptionIntroItems
                text="O café chega fresquinho até você"
                color="purple"
              >
                <Coffee weight="fill" />
              </OptionIntroItems>
            </OptionWrapper>
          </OptionContainer>
        </div>
        <ImageContainer>
          <img src={imageCoffeeHome} alt="" />
        </ImageContainer>
      </MainContainer>
    </HeaderContainer>
  )
}
