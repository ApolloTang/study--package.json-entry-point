import {componentOne, componentTwo} from 'consumee2'

const container = document.createElement('div')
container.style.border = 'red 1px solid'
container.style.padding = '10px'
container.style.width = '100px'

container.append(componentOne())
container.append(componentTwo())

export {
  container
}
