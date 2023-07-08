import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'
import "./styles/global.css"
import { Header } from './components/Header/Header'
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      < ToastContainer autoClose={2500}/>
    </div>
  )
}

export default App