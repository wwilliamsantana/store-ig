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

interface CardContextProps {
  coffees: CoffeeProps[]
}

export const CardContext = createContext({} as CardContextProps)

interface CardProviderProps {
  children: ReactNode
}

export function CardContextProvider({ children }: CardProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  async function loadedCoffee() {
    const response = await api.get('/coffees')

    setCoffees(response.data)
  }

  useEffect(() => {
    loadedCoffee()
  }, [])

  return (
    <CardContext.Provider value={{ coffees }}>{children}</CardContext.Provider>
  )
}
