import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";
import Contact from "./pages/Contact";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Cakes from "./Pages/Cakes";
import CakeCard from "./CakeCard";

function App() {

return (

<BrowserRouter>

<Navbar />

<Routes>
  <Route
path="/contact"
element={<Contact />}
/>

<Route
path="/cart"
element={<Cart />}
/>

<Route
path="/"
element={<Home />}
/>

<Route
path="/cakes"
element={<Cakes />}
/>

</Routes>

<Footer />

</BrowserRouter>

);

}

export default App;