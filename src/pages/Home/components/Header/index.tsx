import {
  HeaderContainer,
  ImageContainer,
  MainContainer,
  MainContent,
} from './styles'
import imageCoffeeHome from '../../../../assets/coffee-Home.svg'

export function HeaderHome() {
  return (
    <HeaderContainer>
      <MainContainer>
        <MainContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <div>
            <div>
              <span>Compra simples e segura</span>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <span>Embalagem mantém o café intacto</span>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </MainContent>
        <ImageContainer>
          <img src={imageCoffeeHome} alt="" />
        </ImageContainer>
      </MainContainer>
    </HeaderContainer>
  )
}
