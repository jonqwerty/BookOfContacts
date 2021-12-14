import React, { useEffect, useState } from 'react'  
import { useParams } from 'react-router-dom'


const Contact = (props) => {
//debugger
    const idFromUrl = useParams()
    const id = +idFromUrl['id']
    const data = JSON.parse(localStorage.getItem('data'))
    const chosenContact = data.find(item => item.id === id)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')

    console.log(idFromUrl)
    console.log(idFromUrl['id'])
    
    useEffect(() => {
        //debugger
        
        console.log(chosenContact)
        setName(chosenContact.name)
        setSurname(chosenContact.surname)
        setPhone(chosenContact.phone)
        setEmail(chosenContact.email)
        setCountry(chosenContact.country)

    }, [])
    
    const handleCancel = () => {
        props.setShowForm(false)
     }
 
     const handleName = (e) => {
         setName(e.target.value)
     }
 
     const handleSurname = (e) => {
         setSurname(e.target.value)
     }
 
     const handlePhone = (e) => {
         setPhone(e.target.value)
     }
 
     const handleEmail = (e) => {
         setEmail(e.target.value)
     }
 
     const handleCountry = (e) => {
         setCountry(e.target.value)
     }
    
    return (
        <div>
            <h1>Information about contact</h1>
            <form id="myPrompt" style={{position: 'absolute', top: '90px', left: '25%',  right: '25%', width: '400px', zIndex: '12345', margin: '5px auto', backgroundColor: 'white', border:'solid black 5px' }}>
                    <br />
                    <label style={{display: 'block'}}>
                    Name:
                    <input
                        value={name}
                        type="text" 
                        placeholder = "Enter name" 
                        onChange={handleName} 
                       />
                       <button >Delete field</button>
                    </label >
                    <br />
                    <label style={{display: 'block'}}>
                    Surname:
                    <input
                        value={surname}
                        type="text"          
                        placeholder = "Enter surename"
                        onChange={handleSurname}  
                        />
                        <button >Delete field</button>
                    </label>
                    <br />
                    <label style={{display: 'block'}}>
                    Phone:
                    <input
                        value={phone}
                        type="text"          
                        placeholder = "Enter phone"
                        onChange={handlePhone}  
                        />
                        <button >Delete field</button>
                    </label>
                    <br />
                    <label style={{display: 'block'}}>
                    Email:
                    <input
                        value={email}
                        type="text"          
                        placeholder = "Enter email"
                        onChange={handleEmail}  
                        />
                        <button >Delete field</button>
                    </label>
                    <br />
                    <label style={{display: 'block'}}>
                    Country:
                    <input
                        value={country}
                        type="text"          
                        placeholder = "Enter country"
                        onChange={handleCountry}  
                        />
                        <button >Delete field</button>
                    </label>
                    <br />                    
                    <button >Add field</button>
                    <button >Cancel</button>
                    <button >Save</button>
                </form>
            
        </div>
    )
}

export default Contact