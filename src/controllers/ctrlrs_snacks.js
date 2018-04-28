//controllers = more complicated functions using
// basic functions (model)
const model = require('../models/models_snacks')

function getAll(req, res, next) {
  const data = model.getAll()
  console.log('on controllers: data', data)
  res.status(200).json({ title : "Snacks: Get All", data : data })
}

function getOne(req, res, next) {
  const data = model.getOne(req.params.id)
  if (data.error) return next(data.error)
  res.status(200).json({ title : "Snacks: Get One", data : data.snack })
}

function createOne(req, res, next) {
  console.log('req.body', req.body)
  const data = model.createOne(req.body)
  console.log('dataaaaa', data)
  if (data.error) return next(data.error)
  res.status(201).json({title : "Snacks: Create One", data: data})
}

// function updateOne(req, res, next) {
//   const data = model.getOne(req.params.id)
//   if (data.error) return next(data.error)
//   const updatedData = model.updateOne(data.snack, req.body)
//   if (updatedData.error) return next(updatedData.error)
//   res.status(200).json({ title : "Snacks: Update One", data: updatedData.snack })
// }

function removeOne(req, res, next) {
  const data = model.removeOne(req.params.name)
  console.log('dataaaaaaa', data)
  res.status(200).json({ title : "Snacks: Remove One", data: data})
}

module.exports = {
  getAll,
  getOne,
  createOne,
  // updateOne,
  removeOne
}
