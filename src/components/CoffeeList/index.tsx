import { useContext } from 'react'
import { OptionCoffee } from '../OptionCoffee'
import { CoffeeListContainer, CoffeeListContent } from './styles'
import { CardContext } from '../../context/CardContext'

export function CoffeeList() {
  const { coffees } = useContext(CardContext)

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
