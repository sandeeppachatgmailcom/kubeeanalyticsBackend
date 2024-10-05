
const express = require('express')
const postCreateUser = require('../controller/postCreateUser')
const postuserLogin = require('../controller/postuserLogin')
const postReadDesignation = require('../controller/postReadDesignation')
const postUserWiseWorkList = require('../controller/postUserWiseWorkList')
const gettReadAllClients = require('../controller/userController/gettReadAllClients')
const postCreateClients = require('../controller/userController/postCreateClients')
const router = express.Router()

router.post('/signup',postCreateUser)
router.post('/Login',postuserLogin)
router.post('/readDesignation',postReadDesignation)
router.post('/postUserWiseWorkList',postUserWiseWorkList)
router.get('/readAllClients', gettReadAllClients)
router.post('/createClient',postCreateClients)

module.exports = router