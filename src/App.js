import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <div className = "App">
      
        <BrowserRouter>

          <NavBar />

          <Routes>

              <Route
                path='/'
                element={<ItemListContainer/>}
              />

              <Route 
                path='/category/:CategoryId'
                element= { <ItemListContainer/>}
              />

              <Route
                path='/item/:idUser'
                element={<ItemDetailContainer/>}
              />

          </Routes>

          <Footer />

        </BrowserRouter>

    </div>
  );
}

export default App;
