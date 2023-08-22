import React from "react";
import { useNavigate } from "react-router-dom";

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
                    <button className="edit">Edit</button>
                    <button className="delete" onClick={()=>{handleDelete(contact.id)}}>Delete</button>
                </div>
                <div className="type">{contact.type}</div>
        </div>
    )
}