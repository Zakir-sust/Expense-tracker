import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Queryform = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [product, setProduct] = useState('')
    return (
        <div>
            <form className='signup'>
             <div className='form-control'>
                <label>Start Date</label> {' '} {' '} {' '}
                <input

                  type='Date'
                  placeholder='Enter Start Date'
                  value={startDate}
                  onChange={(e)=>setStartDate(e.target.value)}

                ></input>
             </div>
             <br></br>

             <div className='form-control'>
                <label>Set End Date</label> {' '}
                <input

                  type='Date'
                  placeholder='Enter End Date'
                  value={endDate}
                  onChange={(e)=>setEndDate(e.target.value)}

                ></input>
             </div>

             <br></br>

             <div className='form-control'>
                <label>Product</label> {' '}
                <input

                  type='text'
                  placeholder='Enter Product'
                  value={product}
                  onChange={(e)=>setProduct(e.target.value)}

                ></input>
             </div>
             <br></br>

             <Link to={{
                     pathname: '/querylist',
                     state:{
                     startDate:startDate,
                     endDate: endDate,
                     product: product
                     }

                    }}
                ><input type='submit' value='submit'/></Link>
        </form>
        </div>
    )
}

export default Queryform
