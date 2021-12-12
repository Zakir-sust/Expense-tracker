import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Dateprinter from './Dateprinter'
import RecordLayout from './RecordLayout'

const Querylist = (props) => {

    const [items,setItems] = useState([])
    const [use, setUse] = useState('')
    const det=props.location.state;
    if(det.product=='') det.product=null;

    console.log('WE ARE GOING TO TEST FILTERING')
    console.log(det.startDate+' '+det.endDate+' '+det.product)

    class Datawithnull {

        constructor(data) {
            console.log(data)
            this.data = data;
        }
        
        datamodify(startDate, endDate) {
            startDate = new Date(startDate);
            endDate = new Date(endDate);
            console.log(startDate+' HERE WE ARE PRINTING DATE INTERVAL FOR TEST '+endDate)
            
            let ar = [];
            let i = 0;
            let data = this.data;
            console.log(data.length);
            console.log('HERE IS ONE RECORD DATA')
            while (i < data.length) {
                let ddd = data[i];
                let dat=new Date(ddd.date) ;
                /*console.log(dat);
                console.log('Ms of date '+dat.valueOf())
                console.log(dat+' '+dat.valueOf() +' COMPARING DATESs '+startDate+' '+startDate.valueOf())

                if(dat.valueOf() >= startDate.valueOf()) console.log('SATISFIED');
                else console.log('UNSATISFIED');

                console.log(dat+' '+dat.valueOf() +' COMPARING DATESs '+endDate+' '+endDate.valueOf())

                if(dat.valueOf() <= endDate.valueOf())console.log('SATISFIED');
                else console.log('UNSATISFIED');

                console.log('ONE WHOLE INTERVAL CHECKED')*/
                console.log(dat+' '+dat.valueOf() +' COMPARING DATESs '+startDate+' '+startDate.valueOf())
                console.log(dat+' '+dat.valueOf() +' COMPARING DATESs '+endDate+' '+endDate.valueOf())
                if (dat.valueOf() >= startDate.valueOf() && dat.valueOf() <= endDate.valueOf()) {
                    ar.push(data[i]);
                }
                i++ ;
            }
            return ar;
        }
        }
        
        class Datawithoutnull {
        
        //let data;
        
        constructor(data) {
            console.log(data)
            this.data = data;
        }
        
        datamodify(startDate, endDate, prod) {
            let ar = [];
            let i = 0;
            let data = this.data;
            if (prod != null) {
                startDate = new Date(startDate);
                endDate = new Date(endDate);
                console.log(startDate+' start end '+endDate);
                while (i < data.length) {
                    let ddd = data[i];
                    let dat=new Date(ddd.date);
                    console.log(dat);
                    console.log('Ms of date '+dat.valueOf())
                    console.log(data[i])
                    console.log(dat+' '+dat.valueOf() +' COMPARING DATESs '+startDate+' '+startDate.valueOf())

                    if(dat.valueOf() >= startDate.valueOf()) console.log('SATISFIED');
                    else console.log('UNSATISFIED');
  
                    console.log(dat+' '+dat.valueOf() +' COMPARING DATESs '+endDate+' '+endDate.valueOf())

                    if(dat.valueOf() <= endDate.valueOf())console.log('SATISFIED');
                    else console.log('UNSATISFIED')

                    console.log(prod+' product checking '+data[i].product);
                    if(prod == data[i].name) console.log('SATISFIED')
                    else console.log('UNSATISFIED')
                    if (dat.valueOf() >= startDate.valueOf() && dat.valueOf() <= endDate.valueOf()) {
                            if (prod == data[i].name) ar.push(data[i]);
                    }
                    i++ ;
                }
            } else {
                const dtt = new Datawithnull(data);
                return dtt.datamodify(startDate, endDate);
            }
        
            return ar;
        }
        }
        axios.get('http://localhost:5000/users/me',{
        headers: {
            'Authorization': localStorage.getItem('token')
          }
        })
        .then(res => {
            console.log('present USER exists');
            console.log(res.data) ;
            setUse(res.data._id);
            console.log(use)
        })
        .catch(error => {
            console.log('no one logged in')
        })

    useEffect(() => {
        axios.get('http://localhost:5000/api/expense-tracker/item')
        .then(res => {
            console.log('GOT THE WHOLE LIST OF DATA')
            console.log(res.data) 
            const dd=new Datawithoutnull(res.data)
            setItems(dd.datamodify(det.startDate,det.endDate, det.product))
            console.log('LETS SEE FILTERED DATA');
            console.log(items)
       }) ;
    },[]) 
    const d=new Date('5555-10-10')
    localStorage.setItem('dt', d);
    const ath=use;
    console.log('I JUST NEED TO CHECK THAT EXACTLY WHAT IS HAPPENING')
    console.log(items)
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

export default Querylist
