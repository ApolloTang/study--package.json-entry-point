// @ts-ignore
import component from 'dependency-one'

declare global {
  interface Window {
    el: HTMLDivElement
  }
}

const elements = component()
window.el = elements.foo
console.log(elements)

document.body.appendChild(elements.foo)
