import { useState } from "react";
import CakeCard from "../components/CakeCard";

function Cakes() {

const [search,setSearch] = useState("");

const cakes = [

{
id:1,
name:"Chocolate Cake",
price:500,
image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587"
},

{
id:2,
name:"Red Velvet Cake",
price:700,
image:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e"
},

{
id:3,
name:"Black Forest Cake",
price:600,
image:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
}

];

const filteredCakes =
cakes.filter((cake)=>
cake.name
.toLowerCase()
.includes(search.toLowerCase())
);

return(

<div>

<h1>Our Cakes</h1>

<input
type="text"
placeholder="Search Cake"
onChange={(e)=>
setSearch(e.target.value)
}
/>

<br/><br/>

<div className="container">

{
filteredCakes.map((cake)=>(
<CakeCard
key={cake.id}
name={cake.name}
price={cake.price}
image={cake.image}
/>
))
}

</div>

</div>

)

}

export default Cakes;