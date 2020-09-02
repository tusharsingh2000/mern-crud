let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Grocery Model
let grocerySchema = require('../models/Grocery');

// CREATE List
router.route('/create-list').post((req, res, next) => {
  grocerySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ List
router.route('/').get((req, res) => {
  grocerySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Item
router.route('/edit-list/:id').get((req, res) => {
  grocerySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update List
router.route('/update-list/:id').put((req, res, next) => {
  grocerySchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('List updated successfully !')
    }
  })
})

// Delete Item
router.route('/delete-list/:id').delete((req, res, next) => {
  grocerySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;