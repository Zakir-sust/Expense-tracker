import express from 'express'
import routeCtrl from './route.controller.js'

const router = express.Router();


router.route('/item')
.get(routeCtrl.apiGetItem)
.post(routeCtrl.apiAddItem)
.delete(routeCtrl.apiDeleteItem)

router.route('/user')
.get(routeCtrl.apiGetUser)
.post(routeCtrl.apiAddUser)


router.route('/get-one-item')
.get(routeCtrl.apiGetOneItem)
export default router;
