import {useState}
from "react";

import axios
from "axios";

function Order(){

const[name,setName]
=useState("");

const[cake,setCake]
=useState("");

const[quantity,
setQuantity]
=useState("");

function placeOrder(){

axios.post(

"http://localhost:5000/api/order",

{
customerName:name,
cakeName:cake,
quantity:quantity,
total:quantity*500
}

)

.then(()=>{

alert(
"Order Placed"
);

});

}

return(

<div>

<h1>Place Order</h1>

<input

type="text"

placeholder="Customer Name"

onChange={(e)=>

setName(
e.target.value
)

}

/>

<br/><br/>

<input

type="text"

placeholder="Cake Name"

onChange={(e)=>

setCake(
e.target.value
)

}

/>

<br/><br/>

<input

type="number"

placeholder="Quantity"

onChange={(e)=>

setQuantity(
e.target.value
)

}

/>

<br/><br/>

<button
onClick={placeOrder}
>

Order Now

</button>

</div>

)

}

export default Order;