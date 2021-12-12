import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Loginform from './Loginform'
import Recordlist from './Recordlist'
import './Home.css'
const Home = () => {
    const [use, setUse] = useState('')
    console.log(localStorage.getItem('token'))

    axios.get('http://localhost:5000/users/me',{
        headers: {
            'Authorization': localStorage.getItem('token')
          }
    })
    .then(res => {
        console.log('present user exists');
        console.log(res.data) ;
        setUse(res.data._id);
        localStorage.setItem('id',res.data._id)
        console.log(use)
    })
    .catch(error => {
        console.log('no one logged in')
    })
    const ath=use;
    console.log('here is present user'); console.log(use) ;
    if(use=='') console.log('an empty user')
    const RenderMenu = () => {
        if(use===''){
            return(
           <div>
               <Loginform/>
               <h3>
                   don't have and account?<Link to='signup'>Sign up</Link>
               </h3>
           </div>
            )
        }else{

            return(
               <div className = 'home-wrapper'>
                   <Link to='/addrecord' className = 'add-record-link'>Add New Record</Link>
                   <Recordlist useid={ath} />
               </div>
            )
        }
   }
    return (
        <div>
            <RenderMenu/>
        </div>
    )
}

export default Home
