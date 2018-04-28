//routes = create some routes!
const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/ctrlrs_snacks')

router.get('/', ctrl.getAll)
router.post('/', ctrl.createOne)
router.get('/:id', ctrl.getOne)
// router.put('/:id', ctrl.updateOne)
router.delete('/:name', ctrl.removeOne)

module.exports = router
