import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { LoginSignup } from './Pages/LoginSignup'
import { Cart } from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import homedecor_banner from './Components/Assets/banner_homedecor.png'
import art_banner from './Components/Assets/banner_arts.png'
import fashion_banner from './Components/Assets/banner_fashion.png'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/homedecor" element={<ShopCategory banner={homedecor_banner} category="home_decor" />} />
          <Route path="/art" element={<ShopCategory banner={art_banner} category="art" />} />
          <Route path="/fashion" element={<ShopCategory banner={fashion_banner} category="fashion" />} />
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignup />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App