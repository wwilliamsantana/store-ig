import { useContext } from 'react'
import { OptionCoffee } from '../OptionCoffee'
import { CoffeeListContainer, CoffeeListContent } from './styles'
import { CoffeeContext } from '../../context/CoffeeContext'

export function CoffeeList() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeListContent>
        {coffees.map((item) => {
          return <OptionCoffee key={item.id} coffee={item} />
        })}
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
