const schema = require('../user/schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login =async (req, res)=>{
    const {username,password} = req.body;

    const userExists = await schema.findOne({
        username: username
    });

    if(userExists){
        const passwordIsSame = await bcrypt.compare(req.body.password,userExists.password);

        if(passwordIsSame){
            const encryptData={
                id: userExists._id,
                role: userExists.role,
                userType: userExists.userType,
            };

            const expiryOptions = {
                expiresIn: '30d'
            }
            const token = jwt.sign(encryptData, 'EXPENSE_TRACKER',expiryOptions);
            delete userExists.password;
            res.send({
                message:'User is authenticated',
                status: 200,
                data:{ 
                    user: userExists,
                    token: token
                }
            });
        }else{
            res.status(401).send('Username or password is incorrect');
        }
    }else{
        res.status(401).send('User does not exist');
    }
}

const signup=async (req,res)=>{
    try {
        const userData = {
            username: req.body.username,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            userType: req.body.userType,
            role: req.body.role,
        };

        userData.password =await bcrypt.hash(req.body.password, 10);
        const data = await schema.create(userData);
        res.send({
            status: 201,
            message: 'Data created',
            data: data
        })
    } catch (e) {
        res.status(400).send({
            status: 400,
            message: 'Action could not be completed',
            data: e
        })
    }
}

module.exports = {
    login,
    signup
}