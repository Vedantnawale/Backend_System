const User = require('../models/userModel.js')

exports.home = (req, res) => {
    res.send("Account Registration!")
}

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new Error("Name, email, and password are required");
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            throw new Error("User already exists");
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            success: true,
            message: 'User Created Successfully',
            user
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await Register.find({})

        // if(!users){
        //    throw new Error("No Data Available") 
        // } 

        res.status(200).json({
            succes: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id  // for url
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "user deleted succesfully"

        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id)
        res.status(200).json({
            success: true,
            message: "user updated succesfully"

        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }
        // Check for password matches
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid password',
            });
        }

        res.status(200).json({
            success: true,
            message: 'User Login Successfully',
            user: user 
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            succes: false,
            message: error.message
        })
    }
}

