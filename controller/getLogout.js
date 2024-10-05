const getLogout = async(req,res)=>{
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '-1');
 
    res.render('login',{message:'Logout successfull'}) 
}

module.exports = getLogout