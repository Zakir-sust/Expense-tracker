import React from 'react'
import { FaTimes } from 'react-icons/fa'
import axios from 'axios'

const RecordLayout = ({id,name,description,cost}) => {
    const delet = () => {
        axios.delete(`http://localhost:5000/api/expense-tracker/${id}`)
       .then(res => {
        console.log(res.data) 
        window.location.href='/home'
       }) ;
    }
    return (
        <div>
            {name}
            <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={delet}
                />
            <br></br>
            {description}<br></br>
            {cost}<br></br>
            <br></br>
        </div>
    )
}
RecordLayout.defaultProps={ 
    name: 'lol',
    description: 'llololol',
    cost : 500
}

export default RecordLayout
