import { useState } from "react";

function Cart() {

const [quantity,setQuantity] = useState(1);

const price = 500;

const total = quantity * price;

return(

<div>

<h1>Your Cart</h1>

<h2>Chocolate Cake</h2>

<p>Price : ₹{price}</p>

<input
type="number"
value={quantity}
onChange={(e)=>
setQuantity(e.target.value)
}
/>

<h3>Total : ₹{total}</h3>

</div>

)

}

export default Cart;