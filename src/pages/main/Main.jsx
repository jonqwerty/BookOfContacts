import { getDefaultNormalizer } from '@testing-library/react'
import React, { isValidElement, useEffect, useState } from 'react'  
import { NavLink } from 'react-router-dom'
import Form from '../../components/Form'

// const data = [
//     {id: 1, name: 'eeeeee', surname: 'tttt', phone: 56789, email: 'rrr', country: 'usa'},
//     {id: 2, name: 'f', surname: 'l', phone: 56789, email: 'rrr', country: 'usa'},
//     {id: 3, name: 'ddd', surname: 'hhh', phone: 56789, email: 'rrr', country: 'usa'},
//     {id: 4, name: 'eeesseee', surname: 'll', phone: 56789, email: 'rrr', country: 'usa'},
// ]

const Main = () => {
    const [contacts, setContacts] = useState([])
    const [trigger, setTrigger] = useState(true)
    const [showForm, setShowForm] = useState(false)

    

    useEffect(() =>{
        const data = JSON.parse(localStorage.getItem('data'));
        setContacts(data)

    },[])

    useEffect(() =>{
        const data = JSON.parse(localStorage.getItem('data'));
        setContacts(data)

    },[trigger, showForm])

    useEffect(() =>{
        const data = JSON.parse(localStorage.getItem('data'));
        setContacts(data)

    },[trigger])


    const handleDelete = (e) => {
        e.preventDefault()
        const id =  e.target.value
        const result = window.confirm(`Are you sure you want to delete contact with id ${id}`)
        if (result === true) {
            const filteredContacts = contacts.filter(item => item.id !== +id)
            localStorage.setItem('data', JSON.stringify(filteredContacts))
            setContacts(filteredContacts)
        }
    }

    const handleAdd = () => {
        setShowForm(true)
    }

    if (contacts === null || contacts === undefined ) {
        return (
            <div>
                <h1 style={{textAlign:'center'}} >
                    Contacts is not found!!!!
                </h1>
                <button onClick={handleAdd}>Add contact</button>
            
                {showForm && <Form contacts={contacts} setContacts={setContacts} trigger={trigger} setTrigger={setTrigger} setShowForm={setShowForm} />}
  
            </div>     
        )
    }
    return (
        <div >
            <div>List of contacts</div>
            <button onClick={handleAdd}>Add contact</button>
            
            {contacts.map(contact => 
                <div key={contact.id}>
                    <div style={{display:'flex', justifyContent:'space-Between', border:'solid black 1px', width: '600px', height: '40px', margin: '5px auto'}}>
                        <NavLink style={{textDecoration:'none'}} to={'/contact/' + contact.id}>
                                {contact.name} {contact.surname}
                        </NavLink>
                        <div>
                            <button value = {contact.id} onClick={handleDelete}>Delete contact</button>
                                
                        </div>
                    </div>
                </div>
            )}

            {showForm && <Form contacts={contacts} setContacts={setContacts} trigger={trigger} setTrigger={setTrigger} setShowForm={setShowForm} />}

        </div>
    )
}

export default Main