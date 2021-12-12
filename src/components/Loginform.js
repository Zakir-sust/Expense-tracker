import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'

const Loginform = () => {
    const [user, setUser] = useState('')
    const [password, setPass] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!user){
            alert('Please enter user')
            return
        }

        if(!password){
            alert('Please enter password')
            return
        }
        /* onAdd({user,email,password,passwordr}) */

        const userDetails = {
            user: user,
            password: password
          }

        axios.post('http://localhost:5000/users/login',userDetails)
          .then(
              res => {
                  localStorage.setItem('token', res.data.token);
                  console.log(res.data)
                  window.location.href='/'
              }
           ) 
           .catch(err =>{
               console.log(err)
           })

        setUser('')
        setPass('')

        
    }
    return (
        <div>
            <h2>Login Form</h2>
            <form  className = 'form' onSubmit={onSubmit}>

                <div>
                <input
                   type='text'
                   placeholder='Enter Username'
                   value={user}
                   onChange={(e) => setUser(e.target.value)}
                />
                </div>
                <div >
                <input
                   type='password'
                   placeholder='Enter Password'
                   value={password}
                   onChange={(e) => setPass(e.target.value)}
                />
                </div>  
                <button type='submit' value='login'>Button</button>
            </form>
        </div>
    )
}

export default Loginform
