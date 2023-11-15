import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
   <> 
   <div className='container'>
   <NavBar/>
   <ItemListContainer greeting={'Heelloooo'}/>

   </div>
   
 
   </>
  )
}

export default App
