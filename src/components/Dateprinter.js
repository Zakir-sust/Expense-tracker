import React from 'react'
import Printdate from './Printdate'

const Dateprinter = ({date}) => {



    const d=new Date(date) ;
    let formattedDate = d.toDateString()
    console.log('date which was in localstorage')
    console.log(localStorage.getItem('dt')+' and '+date)
    let fl=0 ;
    if(date==localStorage.getItem('dt'))fl=1;
    
    console.log('fl '+fl)
    //localStorage.setItem('dt',date)
    const RenderMenu = () => {

        console.log('CHECKING IN RENDER MENU WHERE fl = '+fl)
        
        if(!fl) {
            console.log('YES HERE WE HAVE TO PRINT DATE')
            localStorage.setItem('dt',date)
            return (
                <div className = 'date'> <strong>Date:</strong> {formattedDate}</div>
            )
        }
        else 
        {
            return (<div></div>)
        }
    }

    return (
        <div>
            <RenderMenu/>
            
        </div>
    )
}

export default Dateprinter
