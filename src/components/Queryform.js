import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Queryform = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [product, setProduct] = useState('')
    return (
        <div className = 'form-wrapper'>
            <form className='form'>             
                <input
                  type='Date'
                  placeholder='Enter Start Date'
                  value={startDate}
                  onChange={(e)=>setStartDate(e.target.value)}
                ></input>
                <input
                  type='Date'
                  placeholder='Enter End Date'
                  value={endDate}
                  onChange={(e)=>setEndDate(e.target.value)}
                ></input>
                <input
                  type='text'
                  placeholder='Enter Product'
                  value={product}
                  onChange={(e)=>setProduct(e.target.value)}
                ></input>
             <Link to={{
                     pathname: '/querylist',
                     state:{
                     startDate:startDate,
                     endDate: endDate,
                     product: product
                     }

                    }}
                ><button type='submit' value='submit'> Submit</button></Link>
        </form>
        </div>
    )
}

export default Queryform
