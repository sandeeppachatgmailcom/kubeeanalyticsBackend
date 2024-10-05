
const express = require('express');
const getAdmin = require('../controller/getAdmin');
const postAdminLogin = require('../controller/postAdminLogin');
const getAdminLogout = require('../controller/getAdminLogout');
const getAdminPage = require('../controller/getAdminPage');
const postCreateTask = require('../controller/postCreateTask');
const postcreateDesignation = require('../controller/postcreateDesignation');
const postpostEditDesignation = require('../controller/postEditDesignation');
const router = express.Router()
 

router.use((req,res,next)=>{
    console.log('second')
    next()
}
)

router.post('/login',postAdminLogin)
router.get('/logout', getAdminLogout);
router.get('/Page',getAdminPage)
router.post('/createTask',postCreateTask)
router.post('/createDesignation',postcreateDesignation)
router.post('/editDesignation',postpostEditDesignation )





module.exports= router