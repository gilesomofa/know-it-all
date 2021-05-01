let user = require('../models/user');

//Post req to userlogin
//Authenticate user and get token
//Public

const userLogin = (req, res) => { 
    const { email, password } = req.body;
    res.json( { email, password });
}

const userSignup = async (req, res) => {
     const { email, password, username } = req.body;
     let user_id = 1;
     user = new User({
         user_id,
         email,
         password,
         username
     })
     await user.save();
     let testUser = User.findOne({ user_id })
    res.json(testUser)

};

const userCreateProfile = (req, res) => {
    const { 
        location,
        twitter, 
        github,
        instagram,
        linkedin,
        portfolio,
        experience,
        education,
        avatar,
        bio } = req.body;
    
    const id = req.params.id;
    console.log(id);   
    res.json(req.body)
};

const userUpdateProfile = (req, res) => {

res.send('Thank you for updating your profile')
};


const userDeleteAccount = (req, res) => res.send('Your account has been set for deletion, We hope you come back')
const userGetUser = (req, res) => res.send('Here is the information you requested on')

module.exports = { userLogin, userSignup, userCreateProfile, userUpdateProfile, userDeleteAccount, userGetUser };

