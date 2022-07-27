export default (text = 'Hello world') => {
  const foo = document.createElement('div')
  foo.style.color = 'red'
  foo.textContent = 'module: src/entry_module.ts'
  return {
    foo
  }
}
