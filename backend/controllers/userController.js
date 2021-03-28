const userLogin = (req, res) => res.send('Yes man, it working')
const userSignup = (req, res) => res.send('You are signed up');
const userCreateProfile = (req, res) => res.send('Your profile has been succesfully created');
const userUpdateProfile = (req, res) => res.send('Thank you for updating your profile');
const userDeleteAccount = (req, res) => res.send('Your account has been set for deletion, We hope you come back')
const userGetUser = (req, res) => res.send('Here is the information you requested on')

module.exports = { userLogin, userSignup, userCreateProfile, userUpdateProfile, userDeleteAccount, userGetUser };