import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../server/api'
import { useNavigate } from 'react-router-dom'

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

interface OrderProps {
  rua: string
  numero: number
  cidade: string
  uf: string
  methodPayment: 'credit' | 'debit' | 'money'
  order?: CartProps[]
}

interface CardContextProps {
  coffees: CoffeeProps[]
  order: OrderProps | undefined
  cart: CartProps[]
  addCart: (data: CartProps) => void
  updateCart: (data: UpdateCartProps) => void
  removeCart: (id: number) => void
  addOrder: (data: OrderProps) => void
}

export const CoffeeContext = createContext({} as CardContextProps)

interface CardProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CardProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [cart, setCart] = useState<CartProps[]>([])
  const [order, setOrder] = useState<OrderProps>()
  const navigate = useNavigate()

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

  function addOrder(order: OrderProps) {
    setOrder({
      ...order,
      order: cart,
    })
    navigate('/success')
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
      value={{
        coffees,
        addCart,
        cart,
        updateCart,
        removeCart,
        addOrder,
        order,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
