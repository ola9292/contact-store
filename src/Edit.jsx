import React,{ useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function Edit(){

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [type, setType] = useState("")
    const navigate = useNavigate();

    const {id} = useParams()
    console.log(id)


    useEffect(()=>{
        fetch("http://localhost:3001/contacts/"+id)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFirstName(data.firstname)
            setLastName(data.lastname)
            setPhone(data.phone)
            setEmail(data.email)
            setType(data.type)
        })
    },[id])


function handleSubmit(e){
    e.preventDefault()
    let contact = {
        firstname, lastname, email, type, phone,type
    }
    fetch("http://localhost:3001/contacts/"+id,{
        method:'PUT',
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
              <button type="submit" className="submit-btn">Update Contact</button>
        </form>
    )
}