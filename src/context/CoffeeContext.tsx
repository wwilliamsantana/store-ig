import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../server/api'

interface CoffeeProps {
  id: string
  title: string
  subtitle: string
  tags: string[]
  value: number
  image: string
}

interface CartProps {
  title: string
  qtd: number
  value: number
}

interface CardContextProps {
  coffees: CoffeeProps[]
  addCart: (data: CartProps) => void
  cart: CartProps[]
}

export const CoffeeContext = createContext({} as CardContextProps)

interface CardProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CardProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [cart, setCart] = useState<CartProps[]>([])

  async function loadedCoffee() {
    const response = await api.get('/coffees')

    setCoffees(response.data)
  }

  function addCart(data: CartProps) {
    setCart((state) => [...state, data])
  }

  useEffect(() => {
    loadedCoffee()
  }, [])

  return (
    <CoffeeContext.Provider value={{ coffees, addCart, cart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
