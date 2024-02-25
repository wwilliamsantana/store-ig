import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  Action,
  AddCartCoffee,
  InfoContent,
  OptionCoffeeContainer,
  Qtd,
  TagsContainer,
  ValuesInfoContainer,
} from './styles'

import { useContext, useState } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

interface OptionCoffeeProps {
  coffee: {
    id: number
    title: string
    subtitle: string
    tags: string[]
    value: number
    image: string
  }
}

export function OptionCoffee({ coffee }: OptionCoffeeProps) {
  const [qtdCoffee, setQtdCoffee] = useState<number>(0)
  const { addCart } = useContext(CoffeeContext)

  function addQtd() {
    setQtdCoffee((state) => state + 1)
  }

  function decreaseQtd() {
    if (qtdCoffee > 0) {
      setQtdCoffee((state) => state - 1)
    }
  }

  function sendRequestCart() {
    if (qtdCoffee > 0) {
      const data = {
        title: coffee.title,
        qtd: qtdCoffee,
        value: coffee.value,
        image: coffee.image,
        id: coffee.id,
      }

      setQtdCoffee(0)
      addCart(data)
    }
  }

  const formatPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(coffee.value)

  return (
    <OptionCoffeeContainer>
      <img src={coffee.image} alt="" />
      <TagsContainer>
        {coffee.tags.map((tag) => {
          return <strong key={tag}>{tag}</strong>
        })}
      </TagsContainer>
      <InfoContent>
        <h3>{coffee.title}</h3>
        <span>{coffee.subtitle}</span>
      </InfoContent>

      <ValuesInfoContainer>
        <span>
          {formatPrice[0] + formatPrice[1]}
          <strong>{formatPrice.substring(2)}</strong>
        </span>
        <Action>
          <Qtd>
            <button className="qtdButton" onClick={decreaseQtd}>
              <Minus />
            </button>
            <span>{qtdCoffee}</span>
            <button className="qtdButton" onClick={addQtd}>
              <Plus />
            </button>
          </Qtd>
          <AddCartCoffee onClick={sendRequestCart}>
            <ShoppingCart weight="fill" />
          </AddCartCoffee>
        </Action>
      </ValuesInfoContainer>
    </OptionCoffeeContainer>
  )
}
