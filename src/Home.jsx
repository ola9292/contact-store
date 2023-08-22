import React,{useEffect, useState} from "react";
import ContactList from "./contactList";
export default function Home(){

    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState("")
    const [filteredResults, setFilteredResults] = useState([])

    //callint the api
    useEffect(()=>{
        fetch("http://localhost:3001/contacts")
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            setContacts(data)
        })

    },[])

    //search function
    const searchItems = (searchValue) =>{
        setSearch(searchValue)

        if(search !== ""){
          const filteredContacts = contacts.filter((contact) =>{
                //using the object.values searches against all properties of the contact
                return Object.values(contact).join('').toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredContacts)
        }
        
    }

    let allContacts = contacts.map((contact)=>{
            return <ContactList key={contact.id} contact={contact}/>
    })
    return(
        <div>
     
            <div className="contact-box">
                <input type="text" 
                    class="search" 
                    value={search} 
                    name="search" 
                    onChange={(e)=> searchItems(e.target.value)}
                    placeholder="Search Contact..."/>

                 {search.length > 0 ? 
                 (filteredResults.map((contact)=>{
                         return <ContactList key={contact.id} contact={contact}/>
                         })) 
                     : allContacts}
            </div>
           
        </div>
    )
}