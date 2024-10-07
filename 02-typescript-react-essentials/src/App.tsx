import Component from './starter/02-props'

function App() {
  return (
    <main>
      <Component name='john' id={1} >
        <h2>Hello World</h2>
      </Component>
      <Component name='peter' id={2} />
    </main>
  )
}

export default App