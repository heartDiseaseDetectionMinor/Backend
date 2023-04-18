const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Data = require('../models/Data');
const { body, validationResult } = require('express-validator');

router.post('/adddata', fetchuser, async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const data = await Data.create({
            age: req.body.age,
            sex: req.body.sex,
            cp: req.body.cp,
            trestbps: req.body.trestbps,
            fbs: req.body.fbs,
            restecg: req.body.restecg,
            thalach: req.body.thalach,
            exang: req.body.exang,
            oldpeak: req.body.oldpeak,
            slope: req.body.slope,
            ca: req.body.ca,
            thal: req.body.thal,
            chol: req.body.chol,
            user: req.user.id,
            col: req.body.col,
            date: new Date(Date.now()).toLocaleString()
        })
        
        res.json(data);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error Occured");
    }
})

router.get('/fetchalldata', fetchuser, async (req, res)=>{
    try {
        const data = await Data.find({user: req.user.id});
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error Occured");
    }
})

module.exports = router;