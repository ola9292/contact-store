import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create(){

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [type, setType] = useState("")
    const navigate = useNavigate();
    
function handleSubmit(e){
    e.preventDefault()
    let contact = {
        firstname, lastname, email, type, phone
    }
    fetch("http://localhost:3001/contacts",{
        method:'POST',
                headers:{"content-type": "application/json"},
                body:JSON.stringify(contact)
    })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate('/');
}

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
                    name="firstname"
                    placeholder="first name"
                    value={firstname}
                    onChange={(e)=> setFirstName(e.target.value)}/>
            <input type="text" 
                    name="lastname"
                    placeholder="last name"
                    value={lastname}
                    onChange={(e)=> setLastName(e.target.value)}/>
            <input type="text" 
                    name="phone"
                    placeholder="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}/>
            <input type="text" 
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
             <select
                value={type}
                name="type"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Personal">Personal</option>
                <option value="Professional">Professional</option>
              </select>
              <button type="submit" className="submit-btn">Add Contact</button>
        </form>
    )
}