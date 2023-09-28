const express = require('express')
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout, getAnswer
} = require('../controllers/workoutController')

const router = express.Router()

// POST for chatgpt
router.post('/chat', getAnswer)

// GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router