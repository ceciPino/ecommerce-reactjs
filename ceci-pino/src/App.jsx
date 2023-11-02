import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
   <>
   
   <Navbar/>
   <ItemListContainer greeting={'Heelloooo'}/>
   </>
  )
}

export default App
