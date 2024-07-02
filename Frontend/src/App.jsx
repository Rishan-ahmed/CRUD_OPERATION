import { useState } from 'react'
import DisplayEmployee from './components/displayEmployee'
import AddEmployee from './components/AddEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditEmployee from './components/EditEmployee'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DisplayEmployee/>}/>
    <Route path='/add' element={<AddEmployee/>}/>
    <Route path='/editEmployee' element={<EditEmployee/>}/>
    </Routes>
    </BrowserRouter>
  //  <div>
  //    <DisplayEmployee/>
  //   {/* <AddEmployee/> */}
  //  </div>
  )
}

export default App
