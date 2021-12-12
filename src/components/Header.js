import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './Header.css'
const Header = () => {
    const [use, setUse] = useState('')

    axios.get('http://localhost:5000/users/me',{
        headers: {
            'Authorization': localStorage.getItem('token')
          }
    })
    .then(res => {
        console.log('present user exists');
        console.log(res.data) ;
        setUse(res.data.user);
        console.log(use)
    })
    .catch(error => {
        console.log('no one logged in')
    })

    const logoutClick = ()=>{
        axios.get('http://localhost:5000/users/logout', {
            headers: {
              'Authorization': localStorage.getItem('token')
            }
          })
        .then(
            res => {
                localStorage.setItem('token', '1a');
                localStorage.setItem('state','')
                console.log(res.data)
                window.location.href = "/";
            }
         ) 
         .catch(err =>{
             console.log(err)
         })
    }
    const RenderMenu = () => {
        if(use===''){
            return(
           <nav>
           <div className = 'nav-list'>
               <span><Link to='/' >Expense-tracking</Link> </span>
           </div>
           </nav>
            )
        }else{
            return(
           <nav >
          
               <div className = 'nav-list'>
                   <span><Link to='/' >Expense-tracking</Link></span>
                   <span><Link to='/queryform' >Filter</Link></span>
                     <span onClick={logoutClick}>Logout</span>
               </div>
           
           </nav>
            )
        }
   }

    return (
        <div>
            <RenderMenu/>
        </div>
    )
}

export default Header
