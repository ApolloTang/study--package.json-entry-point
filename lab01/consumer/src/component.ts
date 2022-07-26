export default (text = 'Hello world') => {
  const foo = document.createElement('div')
  foo.style.color = 'red'
  foo.textContent = text
  return {
    foo
  }
}
