const express = require('express');
const router = express.Router();
const { User } = require('../models');

/* //Route to get all users
router.get('/users', (req, res) =>{
    User.findAll({
        include: [{model: User}]
    }).then(user => res.json(user))
    .catch(e => res.status(400).json(e));
});

//Route to get user by id
router.get('/users/:id', (req, res) => {
    // find a single product by its `id`
    User.findOne({
      where: { id:req.params.id },
      include: [{ model:User }]
    })
    .then(user => res.json(user))
    .catch(e => res.status(400).json(e));
    
  }); */

//Route to create a new user
router.post('/signup', (req, res) => {
    const {name,email,password} = req.body;
    User.create({name,email,password})
    .then(newUser => {
        res.status(200).json(newUser);
    })
    .catch(e => {
        console.error(e);
        res.status(500).json({error:"Unable to create new user"});
    });
});

//Route to update a users info
router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, email, password } = req.body
    User.Update({name, email, password}, {where:{id} })
        .then(updatedInfo => {
            if (updatedInfo[0] === 0){
                return res.status(400).json({error: "Unable to find user"});
            }
            res.status(200).json({message: "Updated user successfully"});
        }).catch(e => {
            console.error(e);
            res.status(500).json({error: "Unable to update user"})
        });
});

//Route to delete a user
router.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    User.destory({where: {id}})
        .then(deletedUser =>{
            if(deletedUser === 0){
                return res.status(400).json({error: "Unable to find user"})
            }
            res.status(200).json({message: "Deleted user successfully"})
        })
        .catch(e =>{
            console.error(e);
            res.status(500).json({error: "Unable to delete user"});
        });
});

//Route to login
router.post('/login', (req, res) => {
    const {email,password} = req.body;
    User.findOne({where: {email}})
    .then(user => {
        if(!user){
            return res.status(400).json({error: "Unable to find user"});
        }

        if(!user.checkPassword(password)){
            return res.status(400).json({error: "Incorrect password"});
        }

        res.status(200).json({message:"Login successful"})
    })
    .catch(e => {
        console.error(e);
        res.status(500).json({error: "Login unsuccessful"});
    })
})