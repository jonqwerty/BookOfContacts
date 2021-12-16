import React, { useEffect, useState } from 'react'  
import { useParams } from 'react-router-dom'


const Contact = (props) => {
    const idFromUrl = useParams()
    const id = +idFromUrl['id']
    const data = JSON.parse(localStorage.getItem('data'))
    const chosenContact = data.find(item => item.id === id)

    const [contact, setContact] = useState()
    const [fieldName, setFieldName] = useState('')
    const [fieldValue, setFieldValue] = useState('')
    const [flag, setFlag] = useState(true)
   
    
    useEffect(() => {
        setContact(chosenContact)
    }, [])

    
    const handleAddField = (e) => {
        e.preventDefault()
        const pair = {}
        pair[fieldName] = fieldValue
        const obj = {...contact, ...pair}
        setContact(obj)
        setFieldName('')
        setFieldValue('')
    }

    const handleDeleteField = (e) => {
        e.preventDefault()
        const someValue =  e.target.value
        const result = window.confirm(`Are you sure you want to delete field ${someValue}`)
        if (result === true) {
            delete contact[someValue]
            setFlag(!flag)
        }
    }

    const handleFieldName = (e) => {
        setFieldName(e.target.value)
    }

    const handleFieldValue = (e) => {
        setFieldValue(e.target.value)
    }

    if (!contact) {
       return <div>hi</div>
    }
    return (
        <div>
            <h1>Information about contact</h1>
            <input type="text" value={fieldName} onChange={handleFieldName}  />
            <input type="text" value={fieldValue} onChange={handleFieldValue}  />
            {
                fieldValue && fieldName
                ? <button onClick={handleAddField} >Add field</button>
                : <button onClick={handleAddField} disabled>Add field</button>
            }
            
            <br />
                   
            {    
                Object.entries(contact).map((item, index) => (
                     
                    <label key={index} style={{display: 'block'}}>
                    {item[0]}:   
                        <input
                            value={item[1]}
                            type="text" 
                             placeholder = "Enter name" 
                                
                        />
                        <button value={item[0]} onClick={handleDeleteField} >Delete field</button>
                    </label >
                    ))
                }         
        </div>
    )
}

export default Contact