import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { ItemCoffee, ItemContainer, ItemContent, Qtd } from './styles'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

interface SummaryItemCoffeeProps {
  data: {
    id: number
    title: string
    qtd: number
    value: number
    image: string
  }
}

export function SummaryItemCoffee({ data }: SummaryItemCoffeeProps) {
  const [qtdCoffee, setQtdCoffee] = useState<number>(data.qtd)
  const { updateCart, removeCart } = useContext(CoffeeContext)

  function addQtd() {
    setQtdCoffee((state) => state + 1)
    updateCart({
      id: data.id,
      qtd: qtdCoffee + 1,
    })
  }

  function decreaseQtd() {
    if (qtdCoffee > 0) {
      setQtdCoffee((state) => state - 1)
      updateCart({
        id: data.id,
        qtd: qtdCoffee - 1,
      })
    }
  }

  function handleRemoveCart() {
    removeCart(data.id)
  }

  const formatPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(data.value)

  return (
    <ItemCoffee>
      <ItemContainer>
        <img src={data.image} alt="" />
        <ItemContent>
          <span>{data.title}</span>
          <div>
            <Qtd>
              <button className="qtdButton" onClick={decreaseQtd}>
                <Minus />
              </button>
              <span>{qtdCoffee}</span>
              <button className="qtdButton" onClick={addQtd}>
                <Plus />
              </button>
            </Qtd>
            <button className="remove" onClick={handleRemoveCart}>
              <Trash />
              Remover
            </button>
          </div>
        </ItemContent>
      </ItemContainer>
      <strong>{formatPrice}</strong>
    </ItemCoffee>
  )
}
