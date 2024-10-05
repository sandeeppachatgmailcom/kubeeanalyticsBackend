const getAdminLogout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            
            return res.redirect('/admin'); // If session destruction fails, redirect to the admin dashboard
        }
         
            res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
            res.set('Pragma', 'no-cache');
            res.set('Expires', '-1');
            
        res.render('adminLogin', { message: 'Admin logout successful' });
    });
}



module.exports = getAdminLogout