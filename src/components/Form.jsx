import React, { useEffect, useState } from 'react'  


const Form = (props) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')

    const nameFormat = /^[a-zA-Z_-]{3,15}$/
    const surnameFormat = /^[a-zA-Z_-]{3,15}$/
    const mailFormat = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    //const phoneFormat = /^\+\d{2}\(\d{3}\)\d{7}$/
    const phoneFormat = /^\d{10}$/
    
    
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

    const handleSave = (e) => {
        e.preventDefault()
        if ( localStorage.getItem('data') === null) {
            const data = [{id: Date.now(), name: name, surname: surname, phone: phone, email: email, country: country}]
            localStorage.setItem('data', JSON.stringify(data))
        }

        if (props.contacts ) {
            const data = [...props.contacts, {id: Date.now(), name: name, surname: surname, phone: phone, email: email, country: country}]
            localStorage.setItem('data', JSON.stringify(data))
        }
        setName('')
        setSurname('')
        setPhone('')
        setEmail('')
        setCountry('')
        props.setTrigger(!props.trigger)
        props.setShowForm(false)
    }
    
    return (
        <>
        <form id="myPrompt" style={{position: 'absolute', top: '50px', left: '25%',  right: '25%', width: '400px', zIndex: '12345', margin: '5px auto', backgroundColor: 'white', border:'solid black 5px' }}>
                    <br />
                    <label style={{display: 'block'}}>
                    Name:
                    <input
                        value={name}
                        type="text" 
                        placeholder = "Must contains 3 ... 15 symbols" 
                        onChange={handleName} 
                       />
                    </label >

                    <br />
                    <label style={{display: 'block'}}>
                    Surname:
                    <input
                        value={surname}
                        type="text"          
                        placeholder = "Must contains 3 ... 15 symbols"
                        onChange={handleSurname}  
                        />
                        
                    </label>
                    <br />
                    <label style={{display: 'block'}}>
                    Phone:
                    <input
                        value={phone}
                        type="text"          
                        placeholder = "1234567890"
                        onChange={handlePhone}  
                        />
                    </label>
                    <br />
                    <label style={{display: 'block'}}>
                    Email:
                    <input
                        value={email}
                        type="text"          
                        placeholder = "nick@gmail.com"
                        onChange={handleEmail}  
                        />
                    </label>
                    <br />
                    <label style={{display: 'block'}}>
                    Country:
                    <input
                        value={country}
                        type="text"          
                        placeholder = "USA or Ukraine"
                        onChange={handleCountry}  
                        />
                    </label>
                    <br /> 
                                    
                    <button onClick={handleCancel}>Cancel</button>

                    {
                        name.match(nameFormat) && surname.match(surnameFormat) 
                        && phone.match(phoneFormat) && email.match(mailFormat) 
                        && country.match('USA') || country.match('Ukraine')

                        ?<button onClick={handleSave}>Save</button>
                        :<button onClick={handleSave} disabled>Save</button>

                    }
                </form>
                   
                </>
    )
}

export default Form