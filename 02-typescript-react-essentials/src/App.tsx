import Component from './starter/05-challenge'

function App() {
  return (
    <main>
      <Component />
      <Component type='basic' name='susan' />
      <Component type='advanced' name='anna' email='anna@email.com' />
    </main>
  )
}

export default App