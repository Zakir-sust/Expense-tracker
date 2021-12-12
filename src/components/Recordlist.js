import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Dateprinter from './Dateprinter'
import RecordLayout from './RecordLayout'
import './Recordlist.css'
const Recordlist = ({useid}) => {
    const [items,setItems] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/expense-tracker/item?id=${useid}`)
        .then(res => {
            console.log(res.data) 
            setItems(res.data)
       }) ;
    },[])
    const getMinDate = ()=>{
        let minDate = new Date()
        for(let item of items){
            let date = new Date(item.date)
            if(minDate.valueOf()>date.valueOf())minDate = date
        }
        return minDate
    }
    const allRes = ()=>{
        let allCost = 0
        for(let item of items){
            allCost+=item.cost
        }
        return allCost
    }
    const getOneMonth = ()=>{
        let today = new Date()
        let thisMonth = today.getMonth()
        let res = 0
        for(let item of items){
            let date = new Date(item.date)
            if(date.getMonth() === thisMonth)
            {
                // console.log('cost added for date: ',item)
                res+=item.cost;
            }
        }
        return res
    } 
    const d=new Date('5555-10-10')
    localStorage.setItem('dt', d);
    const ath=useid
    return (
        <div className = 'record-list'>
            <p> Cost for this month: {getOneMonth()} taka</p>
            <p> Cost from {getMinDate().toLocaleDateString()} is {allRes()} taka</p>
            <div>
                
                {
                   items.map(item => (
                       (ath==item.user_id)?
                        <div key={item._id}>
                        <Dateprinter date={item.date}/>
                        <RecordLayout id={item._id} name={item.name} description={item.description} cost={item.cost} />
                        </div>
                        :''
                   ))
                }
                
            </div>
        </div>
    )
}

export default Recordlist