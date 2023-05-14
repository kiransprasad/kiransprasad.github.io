import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Importing React Components
import AboutMe from './sections/AboutMe.jsx'
import Projects from './sections/Projects.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Kiran Prasad</h1>
      <AboutMe />
      <Projects />
    </>
  )
}

export default App

/*
<button onClick={() => setCount((count) => count + 1)}>
    count is {count}
</button>
*/
