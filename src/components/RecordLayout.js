import React from 'react'
import { FaTimes } from 'react-icons/fa'
import axios from 'axios'
import './RecordLayout.css'
const RecordLayout = ({id,name,description,cost}) => {
    const delet = () => {
        axios.delete(`http://localhost:5000/api/expense-tracker/${id}`)
       .then(res => {
        console.log(res.data) 
        window.location.href='/home'
       }) ;
    }
    return (
        <div className = 'item'>
            <p><strong>Reasone:</strong> {name}</p>
            <p><strong>Short description:</strong> {description}</p>
            <p><strong>Cost:</strong> {cost} taka</p>
            <FaTimes className = 'cross'
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={delet}
                />
            
        </div>
    )
}
RecordLayout.defaultProps={ 
    name: 'lol',
    description: 'llololol',
    cost : 500
}

export default RecordLayout
