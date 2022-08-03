const express = require('express')
const workschedules = require('../models/workschedules')
const router = express.Router()
const Workschedules = require('../models/workschedules')

// Getting All
router.get('/', async (req, res) => {
    try {
        const workschedules = await Workschedules.find()
        res.send(workschedules)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

// Getting One
router.get('/:id', getWorkSchedule, (req, res) => {
    res.json(res.workschedules)
})

// Creating One
router.post('/', async (req, res) => {
    const workschedules = new Workschedules({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobilephone: req.body.mobilephone
    })

    try {
        const newWorkschedules = await workschedules.save()
        res.status(201).json(newWorkschedules)
    } catch (err){
        res.status(400).json({
            message: err.message
        })
    }
})

// Updating One
router.patch('/:id', getWorkSchedule, async (req, res) => {
    if (req.body.firstname != null) {
        res.workschedules.firstname = req.body.firstname
    }
    if (req.body.lastname != null) {
        res.workschedules.lastname = req.body.lastname
    }
    if (req.body.email != null) {
        res.workschedules.email = req.body.email
    }
    if (req.body.mobilephone != null) {
        res.workschedules.mobilephone = req.body.mobilephone
    }

    try {
        const updatedWorkSchedule = await res.workschedules.save()
        res.json(updatedWorkSchedule)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }   
})

// Deleting One
router.delete('/:id', getWorkSchedule, async (req, res) => {
    try {
        await res.workschedules.remove()
        res.json({
            message: 'Deleted Work Schedule'
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

async function getWorkSchedule(req, res, next) {
    try{
        workschedules = await Workschedules.findById(req.params.id)
        if (workschedules == null) {
            return res.status(404).json({
                message: 'Cannot Find Work Schedule'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

    res.workschedules = workschedules
    next()
}

module.exports = router