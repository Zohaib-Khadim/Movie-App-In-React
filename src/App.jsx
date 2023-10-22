import './App.css'
import Home from './components/Home'
import SingleMovie from './components/SingleMovie';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Movies from './components/Movies';
function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movie/:id" element={<SingleMovie/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        
    </>
  )
}

export default App
