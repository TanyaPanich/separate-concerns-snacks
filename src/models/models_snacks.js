//models = very generic, basic functions,
//which will be used by controllers
const fs = require('fs')
const path = require('path')
const httpErrors = require('http-errors')
const dbFile = path.join(__dirname,'db_snacks.json')
console.log('dirname', __dirname)

//get all from .txt file
// function getAll() {
//   const contents = fs.readFileSync('./database/db_snacks.txt', 'utf8').split('\n')
//   console.log('read_data', contents)
//   return contents
// }

//get all from .json file
function getAll() {
  const contents = fs.readFileSync(dbFile, 'utf-8')
  const result = JSON.parse(contents)
  return result.snacks
}

function getOne(id) {
  const snacks = getAll()
  const snack = snacks.find(snack => snack.id === id)
  if (!snack) {
    error.status = 404
    error.message = `Could not find snack with id of ${id}`
    response = { error }
  } else {
    response = { snack }
  }
  return response
}

function createOne(snack) {
  if (!snack.name || !snack.price || !snack.tasty || !snack.haveit ) {
    console.log("wrong snack parameters")
    return
  }
  const snacks = getAll()
  const maxid = 0
  if(snacks.length > 0) {
    maxid = Math.max(...snacks.map(snack => Number.parseInt(snack.id)))
  } else {
    maxid = 1
  }
  const newsnack = {
    id: maxid + 1,
    ...snack
  }
  snacks.push(newsnack)
  const res = JSON.stringify({snacks: snacks})
  fs.writeFileSync(dbFile, res)
  return newsnack
}

function removeOne(name) {
  const snacks = getAll()
  snack = snacks.filter(el => el.name === name)
  const result = snacks.filter(el => el.name !== name)
  const res = JSON.stringify({snacks: result})
  fs.writeFileSync(dbFile, res)
  return snack
}

module.exports = {
  getAll,
  getOne,
  createOne,
  // updateOne,
  removeOne
}
