import { useState } from "react";

function Contact() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");

function submitForm(){

if(name===""){
alert("Enter Name");
return;
}

if(email===""){
alert("Enter Email");
return;
}

alert("Message Submitted Successfully");

}

return(

<div className="contact">

<h1>Contact Us</h1>

<input
type="text"
placeholder="Enter Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
type="email"
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<button onClick={submitForm}>
Submit
</button>

</div>

)

}

export default Contact;