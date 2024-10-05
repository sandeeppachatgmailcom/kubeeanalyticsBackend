const getSignup = (req, res) => {
    console.log('first')
    res.render('signupPage', { message: '' })
}

module.exports = getSignup