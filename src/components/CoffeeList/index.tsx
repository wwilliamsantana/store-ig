import { OptionCoffee } from '../OptionCoffee'
import { CoffeeListContainer, CoffeeListContent } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeListContent>
        <OptionCoffee />
        <OptionCoffee />
        <OptionCoffee />
        <OptionCoffee />
        <OptionCoffee />
        <OptionCoffee />
        <OptionCoffee />
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
