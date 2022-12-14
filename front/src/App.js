
import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails} from './components/products/ProductDetails';
//router traido desde react-router-dom para enrrutar desde el front(no confundir con el express que enruta desde el back ) 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">

        <Header />  {/*nav-bar */}
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/producto/:id" element={<ProductDetails />}/>
          </Routes>

        </div>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
