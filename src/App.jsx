import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Info from './components/informations'
import './App.css'
import TermsAndConditions from './components/terms-and-conditions'
import { Route,RouterProvider,Routes,BrowserRouter } from 'react-router-dom'
import Terms from './components/terms'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Info />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}
      <Route path="/" element={<Terms />}/>
      </Routes> 
       
    </BrowserRouter>
    </div>
  )
}




export default App
