export default (text = 'Hello world') => {
  const foo = document.createElement('div')
  foo.style.color = 'blue'
  foo.textContent = text
  return {
    foo
  }
}
