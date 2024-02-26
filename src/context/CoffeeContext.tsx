import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../server/api'

interface CoffeeProps {
  id: number
  title: string
  subtitle: string
  tags: string[]
  value: number
  image: string
}

interface CartProps {
  id: number
  title: string
  qtd: number
  value: number
  image: string
}

interface UpdateCartProps {
  id: number
  qtd: number
}

interface CardContextProps {
  coffees: CoffeeProps[]
  addCart: (data: CartProps) => void
  cart: CartProps[]
  updateCart: (data: UpdateCartProps) => void
  removeCart: (id: number) => void
}

export const CoffeeContext = createContext({} as CardContextProps)

interface CardProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CardProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [cart, setCart] = useState<CartProps[]>([])

  function updateCart(data: UpdateCartProps) {
    if (data.qtd > 0) {
      const newData = cart.map((item) => {
        if (item.id === data.id) {
          item.qtd = data.qtd
        }
        return item
      })
      return setCart(newData)
    }
    removeCart(data.id)
  }

  function removeCart(id: number) {
    const newData = cart.filter((item) => item.id !== id)

    setCart(newData)
  }

  function addCart(data: CartProps) {
    setCart((state) => [...state, data])
  }

  async function loadedCoffee() {
    const response = await api.get('/coffees')

    setCoffees(response.data)
  }

  useEffect(() => {
    loadedCoffee()
  }, [])

  return (
    <CoffeeContext.Provider
      value={{ coffees, addCart, cart, updateCart, removeCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
