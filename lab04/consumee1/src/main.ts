import {componentTwo} from 'lab04-consumee2'
import componentOne from './component-one'

const container = document.createElement('div')
container.style.border = 'red 1px solid'
container.style.padding = '10px'
container.style.width = '100px'

container.append(componentOne())
container.append(componentTwo())

export {
  container
}
