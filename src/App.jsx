import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Info from './components/informations'
import Terms from './components/terms'
import './App.css'
import TermsAndConditions from './components/terms-and-conditions'
import { Route,RouterProvider,Routes,BrowserRouter } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Info />} /> */}
      <Route path="/" element={<Terms />} />
      {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}
      </Routes> 
       
    </BrowserRouter>
    </div>
  )
}




export default App
