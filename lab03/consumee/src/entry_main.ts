export default (text = 'Hello world') => {
  const foo = document.createElement('div')
  foo.style.color = 'red'
  foo.textContent = 'main: src/entry_main.ts'
  return {
    foo
  }
}
