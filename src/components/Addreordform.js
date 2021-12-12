import React,{useState} from 'react'
import axios from 'axios'
import './Addreordform.css'
const Addreordform = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    const [use, setUse] = useState('')
    
    axios.get('http://localhost:5000/users/me',{
        headers: {
            'Authorization': localStorage.getItem('token')
          }
    })
    .then(res => {
        // console.log('present user exists');
        console.log(res.data) ;
        setUse(res.data._id);
        // console.log('here is out present user ath who will be used here and hid id is '+res.data+' '+res.data.user+' '+res.data._id)
        console.log(use)
    })
    .catch(error => {
        console.log('no one logged in')
    })
    const ath=use;
    // console.log('here is out present user ath who will be used here and hid id is '+ath)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please enter name')
            return
        }

        if(!date){
            alert('Please enter date')
            return
        }

        if(!description){
            alert('Please enter description')
            return
        }

        if(!cost){
            alert('Please enter cost')
            return
        }


       

        const itemDetails = {
          name: name,
          date: date,
          description: description,
          cost: cost,
          user_id: ath
        }

        console.log('Here i will present itemdetailsixxwunhhwuxcnhwwgnygyjdgwbxgqdytgzajnxjkwhninhwnfwhxnfhcfihuhuhfh')
        
        console.log(itemDetails)


         axios.post('http://localhost:5000/api/expense-tracker/item',itemDetails)
          .then(res => {
            console.log(res.data)
            window.location.href='/'
          })
          .catch((error) => {
            alert('stop it')
          })

        

        
    }
    return (
        <div className = 'form-wrapper'>
            <form className = 'form' onSubmit={onSubmit} >
                <input
                  type='text'
                  placeholder='Enter Name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                >
                </input>
            
                <input
                  type='Date'
                  placeholder='Enter Date'
                  value={date}
                  onChange={(e)=>setDate(e.target.value)}

                ></input>
                <input

                  type='text'
                  placeholder='Enter Description'
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}

                ></input>
                <input
                  type='text'
                  placeholder='Enter Cost'
                  value={cost}
                  onChange={(e)=>setCost(e.target.value)}

                ></input>
             <button className = 'btn' type='submit' value='submit'>Submit</button>
        </form>
        </div>
    )
}

export default Addreordform
