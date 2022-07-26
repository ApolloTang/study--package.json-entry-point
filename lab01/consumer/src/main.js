import component from './component'

const elements = component()
window.el = elements
console.log(elements)

document.body.appendChild(elements.foo)
