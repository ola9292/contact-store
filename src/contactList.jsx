import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ContactList({contact}){
    const navigate = useNavigate();
    
    function handleDelete(id){
        fetch("http://localhost:3001/contacts/"+id,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate('/')
    }

    return(
        <div className="contact-list">
            <h4>{contact.firstname} {contact.lastname}</h4>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <div className="buttons">
                    <Link to={`/edit/${contact.id}`}><button className="edit">Edit</button></Link>
                    
                    <button className="delete" onClick={()=>{handleDelete(contact.id)}}>Delete</button>
                </div>
                <div className="type">{contact.type}</div>
        </div>
    )
}