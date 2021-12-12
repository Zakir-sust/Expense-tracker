import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Dateprinter from './Dateprinter'
import RecordLayout from './RecordLayout'
import { set } from 'mongoose'


const TempQueryList = (props)=>{
    const [items,setItems] = useState([])
    const filterDate = (ara,start,end)=>{
        start = new Date(start)
        end = new Date(end)
        
        let filteredAra = ara.filter(val=>{
            let date = new Date(val.date)
            return (date >= start.valueOf() && date<= end.valueOf())
        })
        // console.log('filteredara = ',filteredAra)
        return filteredAra
    }
    const getItemArray = async ()=>{
        let vars = props.location.state
        let id = localStorage.getItem('id')
        console.log('vars = ',vars)
        if(vars.startDate === ""){
            vars.startDate = new Date('1970/1/1')
        }
        if(vars.endDate === ""){
            vars.endDate = new Date()
        }

        if(!vars.product){          ///full query + filter
            const res = await axios.get(`http://localhost:5000/api/expense-tracker/item?id=${id}`)
            return filterDate(res.data,vars.startDate,vars.endDate)
        }
        else{                       ///getOneItem query + filter
            const res = await axios.get(`http://localhost:5000/api/expense-tracker/get-one-item?name=${vars.product}`)
            return filterDate(res.data,vars.startDate,vars.endDate)
        }
        
    }
    const allRes = ()=>{
        let allCost = 0
        for(let item of items){
            allCost+=item.cost
        }
        return allCost
    }
    useEffect(()=>{
        getItemArray().then(res=>{
            setItems(res)
            console.log('items = ',items)
        })
        // axios.get()
    },[]);
    
    return (
        <div className = 'record-list'>
            <p className = 'total-cost'>Total Cost : {allRes()} taka</p>
            <div  >
                {
                   items.map(item => (
                        <div key={item._id}>
                        <Dateprinter date={item.date}/>
                        <RecordLayout id={item._id} name={item.name} description={item.description} cost={item.cost} />
                        </div>
                   ))
                }
                
            </div>
        </div>
    )
}

export default TempQueryList;