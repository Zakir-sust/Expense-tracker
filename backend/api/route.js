import express from 'express'
import routeCtrl from './route.controller.js'

const router = express.Router();


router.route('/item')
.get(routeCtrl.apiGetItem)
.post(routeCtrl.apiPostItem)
.delete(routeCtrl.apiDeleteItem);

router.route('/user')
.get(routeCtrl.apiGetUser)
.post(routeCtrl.apiAddUser)


export default router;
