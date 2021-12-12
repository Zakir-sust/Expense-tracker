import ItemModel from '../db/item.js'


export default class RouteCtrl{
    static async apiAddUser(req,res){

    }
    static async apiGetUser(req,res){

    }
    
    ///date in descending order
    static async apiGetItem(req,res){
        console.log('id = ',req.query.id)
        ItemModel.find({user_id:req.query.id}).sort({date:-1})
        .then((data)=>{
            console.log('res = ',data)
            res.send(data)
        })
    }

    static async apiAddItem(req,res){
        let itemObj = {
            name:req.body.name,
            date:req.body.date,
            cost:req.body.cost,
            description:req.body.description,
            user_id:req.body.user_id,
        }
        const newItem = new ItemModel(itemObj)
        if(newItem.date instanceof Date === false){
            console.log('not a date')
            res.send('invalid date')
            return
        }
    
        newItem.save((err,data)=>{
            if(err){
                console.log('err at api add item')
                res.send("Insert failed. Please add valid data in the fields")
                return
            }
            console.log('inserted item info ->',data)
            res.status(200).send(data)
        })
    }

    ///must send id in request parameter
    static async apiDeleteItem(req,res){
        console.log('deleteing id',req.query.id)
        ItemModel.deleteOne({_id:req.query.id},(err,data)=>{
            if(err)
            {
                console.log('err occured at apiDeleteItem')
                res.send("error,can't delete")
            }
            res.send(data)
        })
    }

    ///given name of item,returns only list of that item in desc order
    static async apiGetOneItem(req,res){
        console.log('name ',req.query.name)
        ItemModel.find({name:req.query.name}).sort({date:-1})
        .exec((err,data)=>{
            if(err){
                console.log(`error ${err}`)
                res.send('error')
                return
            }
            console.log('found data- ',data)
            res.send(data)
        })
    }
}

