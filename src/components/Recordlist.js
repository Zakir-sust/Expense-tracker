import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Dateprinter from './Dateprinter'
import RecordLayout from './RecordLayout'

const Recordlist = ({useid}) => {
    const [items,setItems] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/expense-tracker/item')
        .then(res => {
            console.log(res.data) 
            setItems(res.data)
       }) ;
    },[]) 
    const d=new Date('5555-10-10')
    localStorage.setItem('dt', d);
    const ath=useid
    return (
        <div>
            <div className="optionmenu">
                <ul>
                {
                   items.map(item => (
                       

                       (ath==item.user_id)?
                       
                        <li key={item._id}>
                            
                            
                        <Dateprinter date={item.date}/>

                        <RecordLayout id={item._id} name={item.name} description={item.description} cost={item.cost} />
                        </li>
                        :''
                   ))
                }
                </ul>
            </div>
        </div>
    )
}

export default Recordlist
